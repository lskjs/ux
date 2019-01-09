import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import cx from 'classnames';
import omit from 'lodash/omit';

class CustomSelect extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    className: PropTypes.string,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    counter: PropTypes.bool,
    optionComponent: PropTypes.any,
    valueComponent: PropTypes.any,
    icon: PropTypes.any,
    iconActive: PropTypes.any,
    iconColor: PropTypes.string,
    loadOptions: PropTypes.func,
    async: PropTypes.bool,
  }
  static defaultProps = {
    value: null,
    className: null,
    onChange: null,
    error: false,
    options: [],
    counter: false,
    optionComponent: null,
    valueComponent: null,
    icon: null,
    iconActive: null,
    iconColor: null,
    loadOptions: null,
    async: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.changeOption = this.changeOption.bind(this);
    this.callback = this.callback.bind(this);
  }
  componentWillReceiveProps(next) {
    const { value } = this.props;
    if (value !== next.value) {
      this.setState({ value: next.value });
    }
  }
  changeOption(value) {
    this.setState({ value }, this.callback);
  }
  callback() {
    const { value } = this.state;
    const { onChange } = this.props;
    if (onChange) onChange(value);
  }
  render() {
    const { value } = this.state;
    const {
      options,
      className,
      error,
      optionComponent,
      valueComponent,
      icon,
      iconActive,
      iconColor,
      async,
      ...props
    } = this.props;
    const opt = options.map(option => ({
      ...option,
      icon,
      iconActive,
      iconColor,
      label: option.label || option.title,
    }));
    const components = {};
    if (optionComponent) components.Option = optionComponent;
    if (valueComponent) components.SingleValue = valueComponent;
    const selectProps = {
      components,
      className: cx({
        'form-select': true,
        [className]: className,
        'has-error': error,
      }),
      classNamePrefix: 'react-select',
      value,
      onChange: this.changeOption,
      ...omit(props, ['onChange', 'value']),
    };
    if (async) {
      const { loadOptions } = this.props;
      return (
        <AsyncSelect
          {...selectProps}
          loadOptions={loadOptions}
          defaultOptions
        />
      );
    }
    return (
      <Select
        {...selectProps}
        options={opt}
        isClearable={false}
        isSearchable={false}
      />
    );
  }
}

export default CustomSelect;
