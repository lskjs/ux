import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactNotificationSystem from 'react-notification-system';
import autobind from '@lskjs/autobind';
import Link from '@lskjs/link';
import NotifyTimelineWrapper from './components/NotifyTimelineWrapper';
import NotifyTimeline from './components/NotifyTimeline';

import Notification from './Notification';
import prepareNotificationData from './prepareNotificationData';
import notify from './notifyStyles.styles';

class NotificationSystem extends PureComponent {
  constructor(props) {
    super(props);
    this.notificationSystem = React.createRef();
  }

  @autobind
  addNotification(...args) {
    this.notificationSystem.current.addNotification(...args);
  }

  @autobind
  toast(rawData, config) {
    const { type = 'info', level, children, autoDismiss = 5, href, onClick, ...info } = prepareNotificationData(
      rawData,
      { defaultType: 'success', ...config },
    );
    const { componentClass } = this.props;
    const Tag = componentClass || Link;
    this.notificationSystem.current.addNotification({
      autoDismiss,
      level: type,
      children: children || (
        <Tag href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} onClick={onClick}>
          <NotifyTimelineWrapper>
            <NotifyTimeline animationDuration={autoDismiss !== null ? autoDismiss : 5} />
            <Notification type={type} clickable={componentClass} {...info} />
          </NotifyTimelineWrapper>
        </Tag>
      ),
    });
  }
  render() {
    return <ReactNotificationSystem ref={this.notificationSystem} style={notify} />;
  }
}

NotificationSystem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  componentClass: PropTypes.any,
};
NotificationSystem.defaultProps = {
  componentClass: null,
};

export default NotificationSystem;
