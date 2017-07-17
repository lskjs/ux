import React, { PropTypes } from 'react';
import autobind from 'core-decorators/lib/autobind';
import importcss from 'importcss';
import cx from 'classnames';
import validate from 'validate.js';
import find from 'lodash/find';
import set from 'lodash/set';
import get from 'lodash/get';
import Component from '../Component';


export default class FormBase extends Component {
  static defaultProps = {
    data: null,
    errors: null,
    fields: null,
    validators: {},
    onError: null,
    onSubmit: null,
    onChange: null,
  }
  static propTypes = {
    data: PropTypes.object,
    errors: PropTypes.object,
    fields: PropTypes.array,
    validators: PropTypes.object,
    onSubmit: PropTypes.func,
    onError: PropTypes.func,
    onChange: PropTypes.func,
    horizontal: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.processStateData(props),
      errors: {},
      // errors: props.errors || {}, // @TODO хз зачем
    };
  }

  processStateData(props) {
    const { fields } = props;

    if (this.getFields) {
      // console.log(111);
      this.fields = this.getFields()
    } else if (fields != null) {
      // console.log(222);
      this.fields = fields;
    } else {
      // console.log(333);
      this.fields = [];
    }

    let data = props.data || props.state || props.value;
    if (!data) {
      data = {};
      this.fields.forEach((field) => {
        set(data, field.name, field.value);
      });
    }
    return data;
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: this.processStateData(props),
    });
  }


  getField(name) {
    return find(this.fields, { name });
  }

  getError(name) {
    const { errors } = this.state;
    return errors && errors[name] || {};
  }

  @autobind
  getData() {
    return this.state.data;
  }

  getValidators() {
    const { validators } = this.props;
    this.fields.forEach(field => {
      if (!field.validator) return ;
      validators[field.name] = field.validator;
    })
    return validators;
  }

  getValidatorResults() {
    // const va
    // const { validators } = this.props;
    return validate(this.state.data, this.getValidators());
  }

  validate() {
    const results = this.getValidatorResults();
    const errors = {};
    for (const item in results) {
      const [, message] = /[ \w]* (.*)$/.exec(results[item][0]);
      errors[item] = {
        state: 'error',
        message,
      };
    }
    if (this.fields.filter(field => !!get(errors, field.name)).length > 0) {
      this.onError(errors);
      return false;
    }
    return true;
  }

  onError(errors) {
    const { onError } = this.props;
    this.setState({ errors });
    if (onError) {
      return onError(errors)
    };
  }

  onSubmit(data) {
    const { onSubmit } = this.props;
    this.setState({ errors: {} });
    if (onSubmit) {
      return onSubmit(this.getData());
    }
  }

  @autobind
  handleCancel(e) {
    e && e.preventDefault && e.preventDefault();
    this.setState({
      data: this.processStateData(this.props),
    });
  }

  @autobind
  handleSubmit(e) {
    e && e.preventDefault && e.preventDefault();
    if (this.validate()) {
      return this.onSubmit();
    }
  }

  getFieldValue(name) {
    return this.getStatePath('data.' + name);
  }

  setFieldValue(name, inputValue) {
    const field = this.getField(name);
    let value = inputValue;
    if (field && field.format) {
      try {
        value = field.format(value);
      } catch(err) {
        typeof __DEV__ !== 'undefined' && __DEV__ && console.error('field.format(value) err', err);
      }
    }
    return this.setStatePath('data.' + name, value);
  }

  setFieldData(...args) {
    return this.setFieldValue(...args);
  }

  @autobind
  handleChangeField(name, ...args) {
    const { onChange } = this.props;
    return async (inputValue) => {
      await this.setFieldData(name, inputValue, ...args)
      if (onChange) {
        onChange(this.getData());
      }
    };
  }


}
