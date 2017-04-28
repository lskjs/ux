import React, { PropTypes } from 'react';
import autobind from 'core-decorators/lib/autobind';
import importcss from 'importcss';
import cx from 'classnames';
import validate from 'validate.js';
import set from 'lodash/set';
import get from 'lodash/get';
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
    this.state = {
      data: this.getStateData(props),
      errors: props.errors || {}, // @TODO хз зачем
    };
  }

  getStateData(props) {
    let data = props.data;
    if (!data) {
      data = {};
      (this.getFields(props.fields)).forEach((field) => {
        set(data, field.name, field.value);
      });
    }
    return data;
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: this.getStateData(props),
    });
  }


  getFields(fields) {
    if (!fields) fields = this.props.fields; // eslint-disable-line
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

  getError(name) {
    const { errors } = this.state;
    return errors && errors[name] || {};
  }

  @autobind
  getData() {
    return this.state.data;
  }

  getValidatorResults() {
    const { validators } = this.props;
    return validate(this.state.data, validators);
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
    if (this.getFields().filter(field => !!get(errors, field.name)).length > 0) {
      this.onError(errors);
      return false;
    }
    return true;
  }

  onError(errors) {
    const { onError } = this.props;
  this.setState({ errors });
    if (onError) onError(errors);
  }

  onSubmit(data) {
    const { onSubmit } = this.props;
    this.setState({ errors: {} });
    if (onSubmit) onSubmit(this.getData());
  }

  @autobind
  async handleSubmit(e) {
    e.preventDefault();
    if (this.validate()) {
      this.onSubmit();
    }
  }

  @autobind
  handleChangeField(path) {
    const { onChange } = this.props;
    return async (e) => {
      await this.setStatePath(path, e.target.value);
      if (onChange) {
        onChange(this.getData());
      }
    };
  }

  renderFieldInner(item) {
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
        <If condition={this.getError(item.name).state}>
          <HelpBlock>
            {this.getError(item.name).message}
          </HelpBlock>
        </If>
        <If condition={item.help}>
          <HelpBlock>
            {item.help}
          </HelpBlock>
        </If>
      </div>
    );
  }

  @autobind
  renderField(item, i) {
    const { horizontal } = this.props;
    if (horizontal) {
      return (
        <FormGroup
          key={i}
          controlId={item.name}
          validationState={this.getError(item.name).state}
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
        key={i}
        controlId={item.name}
        validationState={this.getError(item.name).state}
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
    return fields.map(this.renderField);
  }

  renderSubmitButton() {
    const { submitButton, align, bsStyle } = this.props;
    const style = cx({ [`align-${align}`]: align, submitButton: true });
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
          {this.renderFields(this.getFields(fields))}
          {this.renderSubmitButton()}
        </div>
      );
    }
    return (
      <FormBase horizontal={horizontal} onSubmit={this.handleSubmit}>
        {this.renderFields(this.getFields(fields))}
        {this.renderSubmitButton()}
      </FormBase>
    );
  }

}
