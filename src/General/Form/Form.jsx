import React, { PropTypes } from 'react';
import autobind from 'core-decorators/lib/autobind';
import importcss from 'importcss';
import cx from 'classnames';
import validate from 'validate.js';
import find from 'lodash/find';
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
import PureComponent from '../PureComponent';



class Input extends PureComponent {

  @autobind
  onChange(e) {
    let value = e.target.value;
    this.props.onChange && this.props.onChange(value);
  }

  render() {
    return (
      <FormControl
        {...this.props}
        onChange={this.onChange}
      />
    )
  }
}


// @importcss(require('./Form.css')) // eslint-disable-line
export default class Form extends Component {
  static Input = Input;
  static defaultProps = {
    data: null,
    errors: null,
    fields: [],
    validators: {},
    onError: null,
    onSubmit: null,
    onChange: null,
    horizontal: false,

    form: false,
    format: String,
    formComponent: FormBase,
    submitButton: 'Отправить',
    submitButtonComponent: Button,
    // align: 'center',
    // bsStyle: 'primary',
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

    format: PropTypes.any,
    submitButton: PropTypes.any,
    submitButtonComponent: PropTypes.any,
    form: PropTypes.bool,
    formComponent: PropTypes.any,
    // bsStyle: PropTypes.string,
    // align: PropTypes.oneOf(['left', 'right', 'center']),
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.getStateData(props),
      errors: props.errors || {}, // @TODO хз зачем
    };
  }

  getStateData(props) {
    let data = props.data || props.state || props.value;
    if (!data) {
      data = {};
      const fields = this && this.fields || props.fields;
      (this.getFields(fields)).forEach((field) => {
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
    if (!fields) fields = this.fields || this.props.fields; // eslint-disable-line
    return (fields || []).map((field) => {
      if (typeof field === 'string') {
        return {
          name: field,
          title: field,
        };
      }
      return field;
    });
  }

  getField(name) {
    return find(this.getFields(), {name});
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
    (this.fields || this.props.fields || []).forEach(field => {
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
        console.log('try err', err);
      }
    }
    return this.setStatePath('data.' + name, value);
  }

  setFieldData(...args) {
    return this.setFieldValue(...args);
  }


  @autobind
  handleChangeField(name) {
    const { onChange } = this.props;
    return async (inputValue) => {
      await this.setFieldData(name, inputValue)
      if (onChange) {
        onChange(this.getData());
      }
    };
  }



  @autobind
  renderFormControl(item) {
    const { Input } = this.constructor;
    const control = (
      <Input
        type="text"
        value={this.getStatePath(`data.${item.name}`) || ''}
        onChange={this.handleChangeField(item.name)}
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
  renderFormGroup(itemOrName, key) {
    if (!itemOrName) return;
    const { horizontal } = this.props;
    const item = typeof itemOrName === 'string' ? this.getField(itemOrName) : itemOrName;
    if (horizontal) {
      return (
        <FormGroup
          key={key || item.name}
          controlId={item.name}
          validationState={this.getError(item.name).state}
        >
          <Col componentClass={ControlLabel} sm={2}>
            {item.title}
          </Col>
          <Col sm={10}>
            {this.renderFormControl(item)}
          </Col>
        </FormGroup>
      );
    }
    return (
      <FormGroup
        key={key || item.name}
        controlId={item.name}
        validationState={this.getError(item.name).state}
      >
        <If condition={item.title}>
          <ControlLabel>
            {item.title}
          </ControlLabel>
        </If>
        {this.renderFormControl(item)}
      </FormGroup>
    );
  }

  renderFields(fields) {
    return fields.map(this.renderFormGroup);
  }

  renderSubmitButton() {
    const { submitButton, submitButtonComponent: SubmitButtonComponent } = this.props;

    if (!SubmitButtonComponent) return null;
    // const style = {
    //   textAlign: align;
    //   // margin-top: $submit-button-top-offset;
    // };

    // const SubmitButtonComponent = submitButtonComponent || Button;
    let button
    if (typeof submitButton === 'string') {
      button = (
        <SubmitButtonComponent type="submit" bsStyle='primary'>
          {submitButton}
        </SubmitButtonComponent>
      )
    } else {
      button = submitButton;
    }
    //   return (
    return (
      <div style={{
        textAlign: 'center',
      }}>
        {button}
      </div>
    );
    //   );
    // }
    // return (
    //   <div styleName={style}>
    //     {submitButton}
    //   </div>
    // );
  }

  render() {
    const { horizontal, fields, formComponent } = this.props;
    const FormComponent = formComponent || FormBase;

    return  (
      <FormComponent horizontal={horizontal} onSubmit={this.handleSubmit}>
        {this.renderFields(this.getFields(fields))}
        {this.renderSubmitButton()}
      </FormComponent>
    )
    // if (FormComponent) {
    //   return (
    //     <FormComponent horizontal={horizontal} onSubmit={this.handleSubmit}>
    //       {this.renderFields(this.getFields(fields))}
    //       {this.renderSubmitButton()}
    //     </FormComponent>
    //   );
    // }
    // return (
    //   <FormBase horizontal={horizontal} onSubmit={this.handleSubmit}>
    //     {this.renderFields(this.getFields(fields))}
    //     {this.renderSubmitButton()}
    //   </FormBase>
    // );
  }

}
