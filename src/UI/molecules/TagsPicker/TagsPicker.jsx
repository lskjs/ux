import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import bind from 'core-decorators/lib/autobind';
import get from 'lodash/get';
import Plus from 'react-icons2/mdi/plus-circle';

import Tag from '../Tag';
import TagsWrapper from '../TagsWrapper';
import Add from '../../atoms/IconCircleButton';
import TreePicker from '../../organisms/TreePicker';
import Button from '../../../Button';

function getFieldsKeys(fields = []) {
  const keys = {};
  fields.forEach((field) => {
    keys[field._id] = field;
    (field.children || []).forEach((f) => {
      keys[f._id] = f;
    });
  });
  return keys;
}

function getAvailable(fields, values) {
  const availableKeys = Object.keys(getFieldsKeys(fields));
  const filteredKeys = availableKeys.filter(e => values.includes(e));
  return filteredKeys;
}

class TagsPicker extends PureComponent {
  static propTypes = {
    fields: PropTypes.array,
    value: PropTypes.array,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    triggerTitle: PropTypes.string,
    flat: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }
  static defaultProps = {
    fields: [],
    value: [],
    onSubmit: null,
    onChange: null,
    triggerTitle: 'Select',
    flat: false,
    disabled: false,
    readOnly: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      // fields: props.fields,
      value: getAvailable(props.fields, props.value),
    };
  }
  componentWillReceiveProps(next) {
    const { fields, value } = this.props;
    const state = {};
    const newValue = getAvailable(fields, value);
    // if (fields !== next.fields) state.fields = next.fields;
    if (newValue !== next.value) state.value = getAvailable(next.fields, next.value);
    this.setState(state);
  }
  @bind getValue() {
    const { value } = this.state;
    return !Array.isArray(value) ? [value] : value;
  }
  @bind handleDeleteTag(id) {
    const { value } = this.state;
    this.setState({ value: value.filter(e => e !== id) }, this.callbackCombo);
  }
  @bind callbackCombo() {
    this.callbackChange();
    this.callbackSubmit();
  }
  @bind handleSubmit(value) {
    this.setState({ value }, this.callbackSubmit);
  }
  @bind callbackSubmit() {
    const { onSubmit } = this.props;
    const { value } = this.state;
    if (onSubmit) onSubmit(value);
  }
  @bind handleChange(value) {
    this.setState({ value }, this.callbackChange);
  }
  @bind callbackChange() {
    const { onChange } = this.props;
    const { value } = this.state;
    if (onChange) onChange(value);
  }
  @bind renderModal(trigger) {
    const { flat, title, onChange, fields, createTag } = this.props;
    // const { fields } = this.state;
    const value = this.getValue();
    console.log(this.props);

    return (
      <TreePicker
        fields={fields}
        value={value}
        title={title}
        onChange={onChange && this.handleChange}
        onSubmit={this.handleSubmit}
        flat={flat}
        createTag={createTag}
      >
        {trigger}
      </TreePicker>
    );
  }
  render() {
    const { block, triggerTitle, fields, disabled, readOnly } = this.props;
    const value = this.getValue();
    const fieldsKeys = getFieldsKeys(fields);
    const trigger = value.length > 0
      ? <Add inverse disabled={disabled} />
      : (
        <Button
          paint="primary"
          block={block}
          iconLeft={<Plus />}
          disabled={disabled}
        >
          {triggerTitle}
        </Button>
      );
    return (
      <div>
        {/* <DEV json={fields} /> */}
        <If condition={value.length > 0}>
          <TagsWrapper>
            {value.filter(item => !(!get(fieldsKeys, `${item}.title`) && __DEV__)).map(item => (
              <Tag
                key={item}
                id={item}
                onClose={!readOnly ? () => this.handleDeleteTag(item) : null}
                disabled={disabled}
              >
                {get(fieldsKeys, `${item}.title`, '???')}
              </Tag>
            ))}
            <If condition={!readOnly}>
              {disabled ? trigger : this.renderModal(trigger)}
            </If>
          </TagsWrapper>
        </If>
        <If condition={!readOnly && value.length === 0}>
          {disabled ? trigger : this.renderModal(trigger)}
        </If>
      </div>
    );
  }
}

export default TagsPicker;
