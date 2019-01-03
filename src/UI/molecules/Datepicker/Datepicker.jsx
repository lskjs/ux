import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import DatePicker from 'antd/lib/date-picker';
import LocaleProvider from 'antd/lib/locale-provider';
import en from 'antd/lib/locale-provider/en_US';
import ru from 'antd/lib/locale-provider/ru_RU';
import cx from 'classnames';

const { RangePicker } = DatePicker;

@inject('t')
@observer
class Datepicker extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    onChange: PropTypes.func,
    ranged: PropTypes.bool,
    t: PropTypes.func.isRequired,
  }
  static defaultProps = {
    value: null,
    onChange: null,
    validationState: null,
    ranged: false,
  }
  render() {
    const { id, className, ranged, validationState, t, ...otherProps } = this.props;
    const locale = t('locale') === 'ru' ? ru : en;
    return (
      <LocaleProvider locale={locale}>
        <div
          id={id}
          className={cx({
            'datepicker-wrapper': true,
            [validationState]: validationState,
            [className]: className,
          })}
        >
          {ranged
            ? (
              <RangePicker
                className="datepicker"
                {...otherProps}
              />
            )
            : (
              <DatePicker
                className="datepicker"
                onChange={(m) => {
                  this.onChange(m.toDate());
                }}
                {...otherProps}
              />
          )}
          {/* <DEV>
            <div className="datepicker-icon">
              <Calendar />
            </div>
          </DEV> */}
        </div>
      </LocaleProvider>
    );
  }
}

export default Datepicker;
