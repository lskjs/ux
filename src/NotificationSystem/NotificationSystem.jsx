import React, { PureComponent } from 'react';
import ReactNotificationSystem from 'react-notification-system';
import autobind from 'core-decorators/lib/autobind';

import Notification from './Notification';
import prepareNotificationData from './prepareNotificationData';
import notify from './notifyStyles.styles';

class NotificationSystem extends PureComponent {
  constructor(props) {
    super(props);
    this.notificationSystem = React.createRef();
  }

  @autobind
  toast(rawData) {
    const {
      type = 'info', level, children, autoDismiss, ...info
    } = prepareNotificationData(rawData, { defaultType: 'success' }) || {};

    this.notificationSystem.current.addNotification({
      autoDismiss,
      level: type,
      children: children || (
        <Notification
          item={{
            type: `notify.${type}`,
            info,
          }}
        />
      ),
    });
  }
  render() {
    return (
      <ReactNotificationSystem ref={this.notificationSystem} style={notify} />
    );
  }
}

export default NotificationSystem;
