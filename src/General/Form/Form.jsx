import React, { PropTypes } from 'react';
import { autobind } from 'core-decorators';
import importcss from 'importcss';
import cx from 'classnames';
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
    fields: null,
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
    fields: PropTypes.array,
    onSubmit: PropTypes.func,
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
    if (!data) {
      data = {};
      (this.formatFields(props.fields)).forEach((field) => {
        data[field.name] = field.value;
      });
    }
    this.state = {
      data,
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
  validate() {
    return true;
  }

  @autobind
  getData() {
    return this.state.data;
  }

  @autobind
  async handleSubmit(e) {
    const { onSubmit } = this.props;
    if (!onSubmit) {
      return false;
    }
    e.preventDefault();
    if (!this.validate()) {
      alert('Validation error');
      return false;
    }
    return onSubmit(this.getData());
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
        <FormGroup key={i} controlId={item.name}>
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
      <FormGroup key={i} controlId={item.name}>
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
