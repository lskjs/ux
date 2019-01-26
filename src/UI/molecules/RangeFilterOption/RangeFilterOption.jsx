import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/lib/autobind';
import { formatter } from '../../../utils/formatter';
import RangeGroup from '../RangeGroup';
import { Wrapper, Values, ValueItem } from './RangeFilterOption.styles';

class RangeFilterOption extends PureComponent {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    stats: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.object.isRequired,
    quickValues: PropTypes.shape({
      min: PropTypes.array,
      max: PropTypes.array,
    }),
    value: PropTypes.arrayOf(PropTypes.number),
  }
  static defaultProps = {
    min: null,
    max: null,
    stats: null,
    quickValues: {},
    value: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      minValue: props.value?.[0] || props.selected?.value[0], // eslint-disable-line no-undef
      maxValue: props.value?.[1] || props.selected?.value[1], // eslint-disable-line no-undef
      minFocused: true,
      maxFocused: false,
    };
  }
  @autobind
  selectShortValue(value, type) {
    const reverse = type === 'min' ? 'max' : 'min';
    this.setState({
      [`${type}Value`]: value,
    }, () => {
      this.handleFocus(reverse);
      const { minValue, maxValue } = this.state;
      this.callback(minValue, maxValue);
    });
  }
  @autobind
  handleFocus(type) {
    const reverse = type === 'min' ? 'max' : 'min';
    this.setState({
      [`${type}Focused`]: true,
      [`${reverse}Focused`]: false,
    });
    this[`${type}Ref`]?.focus(); // eslint-disable-line
  }
  @autobind
  callback(min, max) {
    const { onChange } = this.props;
    onChange({
      title: `${min ? formatter(min) : 'Мин.'} - ${max ? formatter(max) : 'Макс.'}`,
      value: [min, max],
    });
  }
  @autobind
  handleChangeRange([min, max]) {
    this.setState({
      minValue: min,
      maxValue: max,
    }, () => {
      this.callback(min, max);
    });
  }
  render() {
    const {
      minFocused, maxFocused, minValue, maxValue,
    } = this.state;
    const {
      min, max, stats, quickValues, footer,
    } = this.props;
    let minValues;
    let maxValues;
    let values;
    let selectedFocus;
    if (quickValues) {
      ({ min: minValues = [], max: maxValues = [] } = quickValues);
    }
    if (minFocused) {
      values = minValues;
      selectedFocus = 'min';
    }
    if (maxFocused) {
      values = maxValues;
      selectedFocus = 'max';
    }
    const alignValues = minFocused ? 'flex-start' : 'flex-end';
    return (
      <Wrapper>
        <RangeGroup
          min={min}
          max={max}
          value={[Number(minValue), Number(maxValue)]}
          onChange={this.handleChangeRange}
          stats={stats}
          minProps={{
            innerRef: (e) => {
              this.minRef = e?.refsInput; // eslint-disable-line no-undef
            },
            placeholder: 'Мин.',
            autoFocus: true,
            onFocus: () => {
              this.handleFocus('min');
            },
          }}
          maxProps={{
            innerRef: (e) => {
              this.maxRef = e?.refsInput; // eslint-disable-line no-undef
            },
            placeholder: 'Макс.',
            onFocus: () => {
              this.handleFocus('max');
            },
          }}
        />
        <If condition={minFocused || maxFocused}>
          <If condition={minValues || maxValues}>
            <Values>
              {values.map((item, i) => {
                let disabled = false;
                if (minFocused) disabled = item.value >= Number(maxValue);
                if (maxFocused) disabled = item.value <= Number(minValue);
                return (
                  <ValueItem
                    key={i} // eslint-disable-line react/no-array-index-key
                    align={alignValues}
                    disabled={disabled}
                    onClick={() => {
                      this.selectShortValue(item.value, selectedFocus);
                    }}
                  >
                    {item.title}
                  </ValueItem>
                );
              })}
            </Values>
          </If>
        </If>
        {footer}
      </Wrapper>
    );
  }
}

export default RangeFilterOption;
