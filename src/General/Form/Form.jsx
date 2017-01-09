import Component from '../Component'
import {autobind} from 'core-decorators'
// import _ from 'lodash'
import {
  Form as FormBase,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  HelpBlock,
  Button,
  Col
} from 'react-bootstrap'

// import models from 'import?grep=./models/*.js';
// import from 'biot/asdasd/asdasdasd/'

export default class Form extends Component {

  constructor(props) {
    super(props)

    let data = props.data;
    if (!data) {
      data = {};
      (this.formatFields(props.fields)).forEach(field => {
        data[field.name] = field.value;
      });
    }
    this.state = {
      data,
    };
  }

  formatFields(fields = []) {
    return fields.map(field => {
      if (typeof field === 'string') {
        return {
          name: field,
          title: field,
        }
      }
      return {
        name: field.name || field.path,
        ...field,
      }
    })
  }


  @autobind
  validate() {
    return true
  }

  @autobind
  getData() {
    return this.state.data
  }

  @autobind
  async handleSubmit(e) {
    if (!this.props.onSubmit) {
      return true;
    }
    e.preventDefault();
    if (!this.validate()) {
      alert('Validation error');
      return;
    }
    return this.props.onSubmit && this.props.onSubmit(this.getData())
  }

  handleChangeField(path) {
    return async (e) => {
      await this.setStatePath(path, e.target.value)
      this.props.onChange && this.props.onChange(this.getData());
    }
  }

  @autobind
  renderFieldInner(item) {
    return <div>
      <InputGroup>
        <If condition={item.icon}>
          <InputGroup.Addon>
            {item.icon}
          </InputGroup.Addon>
        </If>
        <FormControl
          type='text'
          value={this.getStatePath('data.' + item.name) || ''}
          onChange={this.handleChangeField('data.' + item.name)}
          {...item.control}
        />
      </InputGroup>
      <FormControl.Feedback />
      <If condition={item.help}>
        <HelpBlock>
          {item.help}
        </HelpBlock>
      </If>
    </div>
  }

  @autobind
  renderField(item) {
    if (this.props.horizontal) {
      return <FormGroup controlId={item.name}>
        <Col componentClass={ControlLabel} sm={2}>
          {item.title}
        </Col>
        <Col sm={10}>
          {this.renderFieldInner(item)}
        </Col>
      </FormGroup>
    }
    return <FormGroup controlId={item.name}>
      <If condition={item.title}>
        <ControlLabel>
          {item.title}
        </ControlLabel>
      </If>
      {this.renderFieldInner(item)}
    </FormGroup>
  }

  renderFields(fields) {
    return <div>
      {fields.map(this.renderField)}
    </div>
  }

  renderSubmitButton() {
    return this.props.submitButton != null ? this.props.submitButton : (
      <Button type='submit' bsStyle='primary'>
        Отправить
      </Button>
    )
  }

  render() {
    return <FormBase horizontal={this.props.horizontal} onSubmit={this.handleSubmit}>
      {this.renderFields(this.formatFields(this.props.fields))}
      {this.renderSubmitButton()}
    </FormBase>
  }

}
