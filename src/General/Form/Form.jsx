import Component from '../Component'
import { autobind } from 'core-decorators'
// import _ from 'lodash'
import {
  FormGroup,
  FormControl,
  // ControlLabel,
  InputGroup,
  HelpBlock,
} from 'react-bootstrap'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    };
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
    if (!this.props.onSubmit) return true
    e.preventDefault();
    if (!this.validate()) {
      alert('Validation error')
      return;
    }
    return this.props.onSubmit && this.props.onSubmit(this.getData())
  }

  handleChangeField(path) {
    return (e) => {
      this.setStatePath(path, e.target.value)
      this.props.onChange && this.props.onChange(this.getData())
    }
  }

  renderFields(fields) {
    return <div>
      <For each="item" index="idx" of={fields}>
        <FormGroup
          controlId="formBasicText"
        >
          <InputGroup>
            <If condition={item.icon}>
              <InputGroup.Addon>
                {item.icon}
              </InputGroup.Addon>
            </If>
            <FormControl
              type="text"
              value={this.getStatePath('data.' + item.path) || ''}
              onChange={this.handleChangeField('data.' + item.path)}
              {...item.control}
            />
          </InputGroup>
          <FormControl.Feedback />
          <If condition={item.help}>
            <HelpBlock>
              {item.help}
            </HelpBlock>
          </If>
        </FormGroup>
      </For>
    </div>
  }

}
