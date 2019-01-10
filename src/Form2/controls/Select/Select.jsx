import React, { PureComponent } from 'react';
import find from 'lodash/find';
import autobind from 'core-decorators/lib/autobind';
import ReactSelect, { AsyncSelect as ReactAsyncSelect } from 'react-select';
import cx from 'classnames';
import Up from 'react-icons2/mdi/chevron-up';
import Down from 'react-icons2/mdi/chevron-down';
import { getOptionValue, getReverseOptionValue, getNormalizedOptions } from './utils';

class Select extends PureComponent {
  state = {}
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     option: props.value,
  //   };
  // }
  componentDidMount() {
    const { loadOption, value, async } = this.props;
    if (async && value && loadOption) {
      this.initOption();
    }
  }
  // componentWillReceiveProps(next) {
  //   const { value, async } = this.props;
  //   if (value !== next.value && !async) {
  //     this.setState({ value: next.value });
  //   }
  // }
  async initOption() {
    const { loadOption, value } = this.props;
    const option = await loadOption(value);
    this.setState({ option, initOption: true }); // eslint-disable-line react/no-unused-state
  }
  @autobind
  async loadOptions(...args) {
    const { loadOptions, ...props } = this.props;
    const options = await loadOptions(...args);
    return getNormalizedOptions(options, props);
  }
  @autobind
  handleChange(option) {
    const { form, field, onChange } = this.props;
    this.setState({ option, initOption: false }); // eslint-disable-line react/no-unused-state
    const value = getReverseOptionValue(option && option.value);
    form.setFieldValue(field.name, value);
    if (onChange) onChange(value);
  }
  render() {
    const {
      field,
      form,
      async,
      options,
      className,
      ...props
    } = this.props;
    const normalizedOptions = getNormalizedOptions(options, props);
    const value = getOptionValue(field.value);
    const option = async ? this.state.option : find(normalizedOptions, { value });
    const Component = async ? ReactAsyncSelect : ReactSelect;

    const hasError = !!form.errors[field.name];
    return (
      <Component
        isClearable={!props.required}
        arrowRenderer={e => (e.isOpen ? <Up /> : <Down />)}
        // styles={customStyles}
        error={hasError}
        classNamePrefix="react-select"
        cacheOptions={async}
        defaultOptions={async}
        {...field}
        {...props}
        className={cx({
          'lsk-form-select': true,
          [className]: !!className,
          'has-error': hasError,
        })}
        value={option}
        loadOptions={this.loadOptions}
        onChange={this.handleChange}
        options={async ? null : normalizedOptions}
      />
    );
  }
}

export default Select;
