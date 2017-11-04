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
  static validate = validate;
  static defaultProps = {
    defaultValue: null,
    value: null,
    errors: null,
    fields: [],
    validators: {},
    onError: null,
    onSubmit: null,
    onChange: null,
  };
  static propTypes = {
    defaultValue: PropTypes.object,
    value: PropTypes.object,
    errors: PropTypes.object,
    fields: PropTypes.array,
    validators: PropTypes.object,
    onSubmit: PropTypes.func,
    onError: PropTypes.func,
    onChange: PropTypes.func,
    horizontal: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.processStateData(props, 1),
      errors: {},
      // errors: props.errors || {}, // @TODO хз зачем
    };
  }

  _getFields() {
    let fields;
    if (this.getFields) {
      return this.getFields()
    } else if (this.props.fields != null) {
      return this.props.fields;
    } else {
      return [];
    }
  }

  processStateData(props, isConstructor) {
    // console.log('processStateData', isConstructor, this._getFields());
    const { fields } = props;

    let data;
    if (isConstructor) {
      data = props.defaultValue || props.data || props.state || props.value;
    } else {
      data = props.data || props.state || props.value;
      if (!data) {
        data = this.state.data
      }
    }
    if (!data) {
      data = {};
    }
    this._getFields().forEach((field) => {
      set(data, field.name, field.value);
      // console.log('defaultValue@@@@@', field, get(data, field.name), typeof field.defaultValue !== 'undefined', field.defaultValue);
      if (!get(data, field.name) && typeof field.defaultValue !== 'undefined') {
        set(data, field.name, field.defaultValue);
      }
    });
    return data;
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: this.processStateData(props),
    });
  }


  getField(name) {
    return find(this._getFields(), { name });
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
    const { validators, t } = this.props;
    this._getFields().forEach(field => {
      // if (!field.validator) return ;
      validators[field.name] = field.validator || {};
      // console.log('field.required', field.required);
      if (field.required) {
        if (!validators[field.name].presence) {
          validators[field.name].presence = {
            allowEmpty: false,
            message: t ? t('form.presence') : 'form.presence',
          };
        }
      }
    })

    // console.log({validators}, this.state.data, t);
    return validators;
  }

  getValidatorResults() {
    // const va
    // const { validators } = this.props;
    return this.constructor.validate(this.state.data, this.getValidators());
  }

  validate() {
    const results = this.getValidatorResults();
    // console.log('validate', {results});
    const errors = {};
    for (const item in results) {
      errors[item] = {
        state: 'error',
        message: results[item][0].substr(item.length + 1),
      };
    }
    // console.log('errors', {errors});
    if (this._getFields().filter(field => !!get(errors, field.name)).length > 0) {
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


  onChange(data) {
    const { onChange } = this.props;
    // if (this.props.validateOnChange && !this.validate()) return null;
    if (onChange) {
      onChange(data);
    }
  }

  @autobind
  handleChangeField(name, ...args) {
    // console.log('handleChangeField', name, ...args);
    return async (inputValue) => {
      await this.setFieldData(name, inputValue, ...args)
      this.props.validateOnChange && this.validate();
      // this.props.validateOnChange && this.validate();
      this.onChange(this.getData());
    };
  }

  onSubmit(data) {
    const { onSubmit } = this.props;
    // this.setState({ errors: {} });
    if (onSubmit) {
      onSubmit(data);
    }
  }

  @autobind
  handleSubmit(e) {
    e && e.preventDefault && e.preventDefault();
    if (this.validate()) {
      return this.onSubmit(this.getData());
    }
  }

  @autobind
  handleCancel(e) {
    e && e.preventDefault && e.preventDefault();
    this.setState({
      data: this.processStateData(this.props),
    });
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

}
