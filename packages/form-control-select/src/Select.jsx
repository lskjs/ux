import { Global } from '@emotion/core';
import cx from 'classnames';
import find from 'lodash.find';
import get from 'lodash.get';
import isEqual from 'lodash.isequal';
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import ReactAsyncSelect from 'react-select/async';

import CollapsedMultiValue from './CollapsedMultiValue';
import CollapsedValueContainer from './CollapsedValueContainer';
import DropdownIndicator from './DropdownIndicator';
import Option from './Option';
import globalStyles from './Select.styles';
import SingleValue from './SingleValue';
import { getNormalizedOptions, getOptionValue, getReverseOptionValue, NULL_STRING } from './utils';

class Select extends Component {
  constructor(props) {
    super(props);
    this.loadOptions = this.loadOptions.bind(this);
    this.compareVal = this.compareVal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleRemoteChange = this.handleRemoteChange.bind(this);
    this.callbackCloseMenu = this.callbackCloseMenu.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    const propValue = props.field ? props.field.value : props.value;
    const stateValue = state._value;
    const { prevPropValue } = state;
    if (!propValue && !isEqual(stateValue, prevPropValue)) return null;
    if (isEqual(prevPropValue, propValue) && !isEqual(propValue, stateValue)) {
      return {
        prevPropValue: propValue,
      };
    }
    if (!isEqual(prevPropValue, propValue) && isEqual(prevPropValue, stateValue)) {
      return {
        _value: undefined,
        prevPropValue: undefined,
      };
    }
    if (!isEqual(propValue, stateValue) && !isEqual(propValue, stateValue)) {
      return {
        _value: stateValue,
        prevPropValue: propValue,
      };
    }
    if (!isEqual(propValue, stateValue)) {
      return {
        _value: propValue,
        prevPropValue: propValue,
      };
    }
    return null;
  }

  state = {};

  componentDidMount() {
    const { loadOption, field, async, isMulti } = this.props;
    const value = get(field, 'value');
    if (async && value && loadOption) {
      if (isMulti && !value.length) return;
      this.initOption();
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { state, props } = this;
    const prevValue = get(props, 'field.value');
    const nextValue = get(nextProps, 'field.value');
    const hasError = nextProps.field && nextProps.field.name && !!get(nextProps.form, `errors.${nextProps.field.name}`);
    const hadError =
      this.props.field && this.props.field.name && !!get(this.props.form, `errors.${this.props.field.name}`);
    const prevIsDisabled = get(props, 'isDisabled');
    const nextIsDisabled = get(nextProps, 'isDisabled');
    if (!isEqual(hadError, hasError)) {
      return true;
    }
    if (!isEqual(state._value, nextState._value)) {
      return true;
    }
    if (!isEqual(nextValue, prevValue)) {
      return true;
    }
    if (!isEqual(props.options, nextProps.options)) {
      return true;
    }
    if (!isEqual(state.option, nextState.option)) {
      return true;
    }
    if (!isEqual(nextIsDisabled, prevIsDisabled)) {
      return true;
    }
    return false;
  }
  async initOption() {
    const { _value } = this.state;
    const { loadOption, field } = this.props;
    const { value } = field;
    let rawValue = _value;
    if (!rawValue) {
      rawValue = value;
    }
    const option = getNormalizedOptions(await loadOption(rawValue), this.props);
    this.setState({ option, initOption: true }); // eslint-disable-line react/no-unused-state
  }
  async loadOptions(...args) {
    try {
      const { loadOptions, sortable, ...props } = this.props;
      const options = await loadOptions(...args);

      if (sortable && !!options) {
        options.sort(this.compareVal);
      }
      return getNormalizedOptions(options, props);
    } catch (err) {
      if (__DEV__) console.error('Form2/Select loadOptions error', err); // eslint-disable-line no-console
      return [];
    }
  }

  compareVal(currentValue, nextValue) {
    if (currentValue.title > nextValue.title) {
      return 1;
    }
    if (currentValue.title < nextValue.title) {
      return -1;
    }
    return 0;
  }

  handleChange(option) {
    const { blurInputOnSelect = true } = this.props;
    this.setState({ option, initOption: false }); // eslint-disable-line react/no-unused-state
    let value;
    if (option && option.length) {
      value = option.map((item) => getReverseOptionValue(item && item.value));
    } else {
      value = getReverseOptionValue(option && option.value);
    }
    if (typeof value === 'undefined') {
      this.handleLocaleChange(value);
      this.handleRemoteChange(value);
    } else if (blurInputOnSelect) {
      this.handleRemoteChange(value);
    } else {
      this.handleLocaleChange(value);
    }
  }

  handleLocaleChange(value, reset) {
    const newState = {
      _value: value,
    };
    if (reset) {
      newState.prevPropValue = undefined;
    }
    this.setState(newState);
  }

  handleRemoteChange(value) {
    const { form, field, onChange } = this.props;
    if (form && field) {
      form.setFieldValue(field.name, value);
    }
    if (onChange) onChange(value);
  }

  callbackCloseMenu() {
    const { blurInputOnSelect = true, field, value } = this.props;
    const { _value } = this.state;
    if (!blurInputOnSelect) {
      const callbackValue = _value || (field && field.value) || value;
      this.handleRemoteChange(callbackValue);
      this.handleLocaleChange(undefined, true);
    }
  }
  render() {
    const { _value } = this.state;
    const {
      blurInputOnSelect = true,
      hideSelectedOptions = false,
      placeholder = '',
      value: propValue,
      field,
      form,
      sortable,
      async,
      options,
      collapsed,
      className,
      components = {},
      styles = {},
      isMulti,
      multiSearch,
      isHideSelected,
      onMenuClose,
      ...props
    } = this.props;

    let filterOption;
    if (options && multiSearch) {
      filterOption = (option, inputValue) => {
        const { label, value } = option;
        const valueSearch =
          options.filter((opt) => opt.value.toLowerCase().includes(inputValue.toLowerCase())).length === 1;
        const otherKey = options.filter(
          (opt) =>
            (opt.title === label && opt.en.toLowerCase().includes(inputValue.toLowerCase())) ||
            (opt.title === label && opt.ru.toLowerCase().includes(inputValue.toLowerCase())),
        );
        return value.toLowerCase().includes(inputValue.toLowerCase()) || (!valueSearch && otherKey.length > 0);
      };
    }
    if (sortable && !!options) {
      options.sort(this.compareVal);
    }
    const normalizedOptions = getNormalizedOptions(options, props);
    let option;
    let value;
    let rawValue = _value;
    if (!rawValue) {
      rawValue = field ? field.value : propValue;
    }
    // if (!async) {
    value = getOptionValue(rawValue);
    // }
    if (async) {
      ({ option } = this.state);
      if (value == null || value === NULL_STRING) {
        value = null;
        option = null;
      } else if (((option && option.value) || null) !== value) {
        // Увы, мы наверное не имеем право перезапросить option если сверху поменялся value
        this.initOption(); // TODO: потестировать может быть рекурсия
      }
    } else if (!isMulti) {
      option = find(normalizedOptions, { value });
    } else if (isMulti) {
      if (Array.isArray(value)) {
        option = normalizedOptions.filter((el) => value.includes(el.value));
      } else {
        option = [];
      }
    }
    const SelectComponent = async ? ReactAsyncSelect : ReactSelect;
    const hasError = field && field.name && !!get(form.errors, field.name);
    const collapsedComponents = {
      ValueContainer: CollapsedValueContainer,
      MultiValue: CollapsedMultiValue,
    };
    const nullOption = find(normalizedOptions, (o) => o.value === NULL_STRING);
    const defaultIsClearable = !props.required && !nullOption;
    const defaultIsSearchable = options && options.length > 10;
    return (
      <>
        <Global styles={globalStyles} />
        <SelectComponent
          blurInputOnSelect={blurInputOnSelect}
          // isClearable={defaultIsClearable}
          isSearchable={defaultIsSearchable}
          isClearable={defaultIsClearable}
          error={hasError}
          classNamePrefix="react-select"
          cacheOptions={async}
          defaultOptions={async}
          closeMenuOnSelect={false}
          placeholder={placeholder}
          isMulti={isMulti}
          hideSelectedOptions={hideSelectedOptions}
          filterOption={filterOption}
          {...field}
          {...props}
          components={{
            SingleValue,
            Option,
            DropdownIndicator,
            ...(collapsed ? collapsedComponents : {}),
            ...components,
          }}
          styles={{
            singleValue: (base) => ({
              ...base,
              position: 'relative',
              top: 'inherit',
              transform: 'inherit',
              flexWrap: 'nowrap',
            }),
            valueContainer: (base) => ({
              ...base,
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }),
            ...styles,
          }}
          className={cx({
            'lsk-form-select': true,
            [className]: !!className,
            'has-error': hasError,
          })}
          value={option || null}
          loadOptions={this.loadOptions}
          onChange={this.handleChange}
          options={async ? null : normalizedOptions}
          onMenuClose={onMenuClose || (!blurInputOnSelect && this.callbackCloseMenu)}
        />
      </>
    );
  }
}

export default Select;
