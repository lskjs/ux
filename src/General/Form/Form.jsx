import React, { PropTypes } from 'react';
import autobind from 'core-decorators/lib/autobind';
import importcss from 'importcss';
import cx from 'classnames';
import validate from 'validate.js';
import find from 'lodash/find';
import set from 'lodash/set';
import get from 'lodash/get';
import DebounceInput from 'react-debounce-input'
import {
  Form as BsForm,
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
import FormBase from '../FormBase'

class Input extends PureComponent {

  @autobind
  onChange(e) {
    let value = e.target.value;
    this.props.onChange && this.props.onChange(value);
  }

  render() {
    return (
      <FormControl
        componentClass={DebounceInput}
        {...this.props}
        onChange={this.onChange}
      />
    )
  }
}



// @importcss(require('./Form.css')) // eslint-disable-line
export default class Form extends FormBase {
  static Input = Input;
  static defaultProps = {
    ...FormBase.defaultProps,
    horizontal: false,

    form: false,
    format: String,
    formComponent: BsForm,
    submitButton: 'Отправить',
    submitButtonComponent: Button,
    // align: 'center',
    // bsStyle: 'primary',
  }
  static propTypes = {
    ...FormBase.propTypes,
    horizontal: PropTypes.bool,

    format: PropTypes.any,
    submitButton: PropTypes.any,
    submitButtonComponent: PropTypes.any,
    form: PropTypes.bool,
    formComponent: PropTypes.any,
    // bsStyle: PropTypes.string,
    // align: PropTypes.oneOf(['left', 'right', 'center']),
  }


  @autobind
  renderFormControl(item) {
    const { Input } = this.constructor;
    const { Control } = item;
    let control;
    if (Control) {
      control = (
        <Control
          value={this.getStatePath(`data.${item.name}`) || ''}
          onChange={this.handleChangeField(item.name)}
          {...item.control}
        />
      )
    } else {
      control = (
        <Input
          type="text"
          value={this.getStatePath(`data.${item.name}`) || ''}
          onChange={this.handleChangeField(item.name)}
          {...item.control}
        />
      );
    }
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
    // console.log('renderFormGroup', {itemOrName});
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
    const { horizontal, formComponent } = this.props;
    const FormComponent = formComponent || BsForm;

    return  (
      <FormComponent horizontal={horizontal} onSubmit={this.handleSubmit}>
        {this.renderFields(this.fields)}
        {this.renderSubmitButton()}
      </FormComponent>
    )

  }

}
