import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';


@inject('i18')
@observer
class DateInfo extends Component {
  render() {
    const {
      i18,
      date,
      format = 'l',
      longFormat = 'LLL',
    } = this.props;
    return (
      <span title={i18.m(date).format(longFormat)}>
        {i18.m(date).format(format)}
      </span>
    );
  }
}

export default DateInfo;
