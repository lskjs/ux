import React, { Component } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import get from 'lodash/get';
import BaseInput from '../../components/BaseInput';
import Wrapper from './CodeInput.styles';

class CodeInput extends Component {
  constructor(props) {
    super(props);
    range(props.count).forEach(i => {
      this[`refCode${i}`] = React.createRef();
    });
    this.getArrayOfCount = this.getArrayOfCount.bind(this);
    this.getNumbers = this.getNumbers.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const { autoFocus } = this.props;
    if (autoFocus && __CLIENT__ && get(this, 'refCode0.current')) {
      this.refCode0.current.focus();
    }
  }

  getArrayOfCount() {
    const { count } = this.props;
    return range(count);
  }

  getNumbers(value, index) {
    const { count } = this.props;
    const array = this.getArrayOfCount();
    const val = array
      .map(idx => this[`refCode${idx}`].current.value)
      .join('')
      .slice(0, count);
    if (value === '' || Number.isNaN(Number(val))) return null;
    if (index !== count - 1 && value !== '') {
      this[`refCode${index + 1}`].current.focus();
      return Number(val);
    }
    return Number(val);
  }

  handleKeyDown(index) {
    const { count } = this.props;
    if (index === count - 1 && this[`refCode${index}`].current.value) {
      this[`refCode${index}`].current.focus();
    } else {
      this[`refCode${index - 1}`].current.focus();
    }
  }

  renderItem(index) {
    const { field, form, count, ...props } = this.props;
    const array = this.getArrayOfCount();
    const values = array.map(e => String(get(field, 'value', '')).slice(0, count)[e] || '');
    return (
      <BaseInput
        key={index}
        {...field}
        value={values[index]}
        maxLength={1}
        debounce={0}
        showLimit={false}
        {...props}
        innerRef={this[`refCode${index}`]}
        onKeyDown={({ key }) => {
          if (key === 'Backspace') {
            this.handleKeyDown(index);
          }
        }}
        onChange={value => {
          const val = this.getNumbers(value, index);
          if (!val) return false;
          return form.setFieldValue(field.name, val);
        }}
      />
    );
  }

  render() {
    return <Wrapper>{this.getArrayOfCount().map(this.renderItem)}</Wrapper>;
  }
}

CodeInput.propTypes = {
  field: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  form: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoFocus: PropTypes.bool,
};

CodeInput.defaultProps = {
  count: 4,
  autoFocus: false,
};

export default CodeInput;
