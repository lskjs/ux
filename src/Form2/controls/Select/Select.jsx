import React, { PureComponent } from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import autobind from 'core-decorators/lib/autobind';
import ReactSelect, { AsyncSelect as ReactAsyncSelect } from 'react-select';
import cx from 'classnames';
import Up from 'react-icons2/mdi/chevron-up';
import Down from 'react-icons2/mdi/chevron-down';
import { getOptionValue, getReverseOptionValue, getNormalizedOptions } from './utils';
// import SingleValue from './SingleValue';
// import Option from './Option';
const SingleValue = () => null;
const Option = () => null;

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
    try {
      // console.log('loadOptions');
      const { loadOptions, ...props } = this.props;
      const options = await loadOptions(...args);
      // console.log({ options });
      return getNormalizedOptions(options, props);
    } catch (err) {
      if (__DEV__) console.error('Form2/Select loadOptions error', err); // eslint-disable-line no-console
      return [];
    }
  }
  @autobind
  handleChange(option) {
    const { form, field, onChange } = this.props;
    this.setState({ option, initOption: false }); // eslint-disable-line react/no-unused-state
    let value;
    if (option.length) {
      value = option.map(item => getReverseOptionValue(item && item.value));
    } else {
      value = getReverseOptionValue(option && option.value);
    }
    if (form && field) {
      form.setFieldValue(field.name, value);
    }
    if (onChange) onChange(value);
  }
  // toggleClearable = () =>
  //   this.setState(state => ({ isClearable: !state.isClearable }));
  render() {
    const {
      value: propValue,
      field,
      form,
      async,
      options,
      className,
      components = {},
      styles = {},
      ...props
    } = this.props;
    const normalizedOptions = getNormalizedOptions(options, props);
    const value = getOptionValue(field ? field.value : propValue);
    const option = async ? this.state.option : find(normalizedOptions, { value });
    const Component = async ? ReactAsyncSelect : ReactSelect;
    const hasError = field && field.name && !!get(form, `errors.${field.name}`);
    return (
      <Component
        isClearable={!props.required}
        arrowRenderer={e => (e.isOpen ? <Up /> : <Down />)}
        error={hasError}
        classNamePrefix="react-select"
        cacheOptions={async}
        defaultOptions={async}
        closeMenuOnSelect={!props.isMulti}
        {...field}
        {...props}
        components={{
          SingleValue,
          Option,
          ...components,
        }}
        styles={{
          singleValue: base => ({
            ...base,
            position: 'relative',
            top: 'inherit',
            transform: 'inherit',
          }),
          ...styles,
        }}
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
