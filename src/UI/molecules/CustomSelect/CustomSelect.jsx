import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select, { AsyncSelect } from 'react-select';
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
    initOption: PropTypes.func,
    isClearable: PropTypes.bool,
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
    initOption: null,
    isClearable: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.asyncSelect = React.createRef();
    this.changeOption = this.changeOption.bind(this);
    this.callback = this.callback.bind(this);
  }
  async componentDidMount() {
    const { initOption, value, async } = this.props;
    // const { asyncSelect } = this;
    // console.log({ initOption, value, async, asyncSelect });
    if (async && value && initOption) {
      this.initAsyncValue();
    }
  }
  componentWillReceiveProps(next) {
    const { value, async } = this.props;
    if (value !== next.value && !async) {
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
  async initAsyncValue() {
    const { initOption, value } = this.props;
    const option = await initOption(value);
    this.setState({ value: option });
  }
  render() {
    const { value } = this.state;
    const {
      options,
      className,
      error,
      components,
      icon,
      iconActive,
      iconColor,
      async,
      onChange,
      isClearable,
      ...props
    } = this.props;
    const opt = options.map(option => ({
      ...option,
      icon,
      iconActive,
      iconColor,
      label: option.label || option.title,
    }));
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
      isClearable,
      ...omit(props, ['onChange', 'value']),
    };
    if (async) {
      const { loadOptions } = this.props;
      return (
        <AsyncSelect
          {...selectProps}
          cacheOptions
          ref={this.asyncSelect}
          loadOptions={loadOptions}
          defaultOptions
        />
      );
    }
    return (
      <Select
        {...selectProps}
        options={opt}
        isSearchable={false}
      />
    );
  }
}

export default CustomSelect;
