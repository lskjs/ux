import React, { PropTypes } from 'react';
import { autobind } from 'core-decorators';
import importcss from 'importcss';
import cx from 'classnames';
import validate from 'validate.js';
// import _ from 'lodash'
import {
  Form as FormBase,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  HelpBlock,
  Button,
  Col,
} from 'react-bootstrap';
import Component from '../Component';

@importcss(require('./Form.css')) // eslint-disable-line
export default class Form extends Component {
  static defaultProps = {
    data: null,
    errors: null,
    fields: null,
    validators: null,
    onError: null,
    onSubmit: null,
    onChange: null,
    horizontal: false,
    submitButton: 'Отправить',
    form: false,
    align: 'center',
    bsStyle: 'primary',
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
    submitButton: PropTypes.any,
    form: PropTypes.bool,
    bsStyle: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right', 'center']),
  }
  constructor(props) {
    super(props);

    let data = props.data;
    let errors = props.errors;
    if (!data) {
      data = {};
      errors = {};
      (this.formatFields(props.fields)).forEach((field) => {
        data[field.name] = field.value;
        errors[field.name] = {
          state: null,
          message: null,
        };
      });
    }
    this.state = {
      data,
      errors,
    };
  }

  formatFields(fields = []) {
    return fields.map((field) => {
      if (typeof field === 'string') {
        return {
          name: field,
          title: field,
        };
      }
      return {
        name: field.name || field.path,
        ...field,
      };
    });
  }

  @autobind
  validate(data) {
    const { validators } = this.props;
    return validate(data, validators);
  }

  @autobind
  getData() {
    return this.state.data;
  }

  @autobind
  getErrors(results) {
    const { onError } = this.props;
    const { errors, data } = this.state;
    for (const item in data) {
      errors[item] = {
        state: null,
        message: null,
      };
    }
    for (const item in results) {
      const re = new RegExp(`${item} (.+)`, 'i');
      const [, message] = re.exec(results[item][0]);
      errors[item] = {
        state: 'error',
        message,
      };
    }
    this.setState({ errors });
    if (onError) return onError(errors);
    return false;
  }

  @autobind
  getResults(data) {
    const { onSubmit } = this.props;
    const { errors } = this.state;
    for (const item in data) {
      errors[item] = {
        state: null,
        message: null,
      };
    }
    this.setState({ errors });
    if (onSubmit) return onSubmit(data);
    return false;
  }

  @autobind
  async handleSubmit(e) {
    const { validators } = this.props;
    e.preventDefault();
    const errors = validators ? this.validate(this.getData()) : null;
    if (!errors) {
      this.getResults(this.getData());
    } else {
      this.getErrors(errors);
    }
  }

  handleChangeField(path) {
    const { onChange } = this.props;
    return async (e) => {
      await this.setStatePath(path, e.target.value);
      if (onChange) {
        onChange(this.getData());
      }
    };
  }

  @autobind
  renderFieldInner(item) {
    const { errors } = this.state;
    const control = (
      <FormControl
        type="text"
        value={this.getStatePath(`data.${item.name}`) || ''}
        onChange={this.handleChangeField(`data.${item.name}`)}
        {...item.control}
      />
    );
    return (
      <div>
        <If condition={item.icon}>
          <InputGroup>
            <InputGroup.Addon>
              {item.icon}
            </InputGroup.Addon>
            {control}
          </InputGroup>
        </If>
        <If condition={!item.icon}>
          {control}
        </If>
        <FormControl.Feedback />
        <If condition={errors[item.name].message}>
          <HelpBlock>
            {errors[item.name].message}
          </HelpBlock>
        </If>
      </div>
    );
  }

  @autobind
  renderField(item) {
    const { horizontal } = this.props;
    const { errors } = this.state;
    if (horizontal) {
      return (
        <FormGroup
          controlId={item.name}
          validationState={errors[item.name].state}
        >
          <Col componentClass={ControlLabel} sm={2}>
            {item.title}
          </Col>
          <Col sm={10}>
            {this.renderFieldInner(item)}
          </Col>
        </FormGroup>
      );
    }
    return (
      <FormGroup
        controlId={item.name}
        validationState={errors[item.name].state}
      >
        <If condition={item.title}>
          <ControlLabel>
            {item.title}
          </ControlLabel>
        </If>
        {this.renderFieldInner(item)}
      </FormGroup>
    );
  }

  renderFields(fields) {
    return fields.map((e, i) => (
      <div key={i}>
        {this.renderField(e)}
      </div>
    ));
  }

  renderSubmitButton() {
    const { submitButton, align, bsStyle } = this.props;
    const style = cx({ [`align-${align}`]: align });
    if (typeof submitButton === 'string') {
      return (
        <div styleName={style}>
          <Button type="submit" bsStyle={bsStyle}>
            {submitButton}
          </Button>
        </div>
      );
    }
    return (
      <div styleName={style}>
        {submitButton}
      </div>
    );
  }

  render() {
    const { form, horizontal, fields } = this.props;
    if (form) {
      return (
        <div>
          {this.renderFields(this.formatFields(fields))}
          {this.renderSubmitButton()}
        </div>
      );
    }
    return (
      <FormBase horizontal={horizontal} onSubmit={this.handleSubmit}>
        {this.renderFields(this.formatFields(fields))}
        {this.renderSubmitButton()}
      </FormBase>
    );
  }

}
