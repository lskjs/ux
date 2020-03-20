import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import TimePicker from 'antd/lib/time-picker';
import LocaleProvider from 'antd/lib/locale-provider';
import en from 'antd/lib/locale-provider/en_US';
import ru from 'antd/lib/locale-provider/ru_RU';
import cx from 'classnames';

@inject('i18')
@observer
class Timepicker extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    onChange: PropTypes.func,
    ranged: PropTypes.bool,
    t: PropTypes.func.isRequired,
  };
  static defaultProps = {
    value: null,
    onChange: null,
    validationState: null,
    ranged: false,
  };
  render() {
    const { id, className, ranged, validationState, i18, ...otherProps } = this.props;
    const locale = i18.t('locale') === 'ru' ? ru : en;
    return (
      <LocaleProvider locale={locale}>
        <div
          className={cx({
            'timepicker-wrapper': true,
            [`timepicker-${id}`]: id,
            [validationState]: validationState,
            [className]: className,
          })}
        >
          <TimePicker className="timepicker" {...otherProps} />
        </div>
      </LocaleProvider>
    );
  }
}

export default Timepicker;
