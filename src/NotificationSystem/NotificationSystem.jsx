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
  addNotification(...args) {
    this.notificationSystem.current.addNotification(...args);
  }

  @autobind
  toast(rawData) {
    const {
      type = 'info', level, children, autoDismiss = 5, ...info
    } = prepareNotificationData(rawData, { defaultType: 'success' });

    this.notificationSystem.current.addNotification({
      autoDismiss,
      level: type,
      children: children || (
        <div style={{ borderRadius: 50, position: 'relative' }}>
          <div
            className="notify-timeline"
            style={{
              animationDuration: autoDismiss !== null ? `${autoDismiss}s` : '5s',
              background: 'white',
              opacity: 0.6,
              paddingTop: 2,
              position: 'absolute',
              borderRadius: '250px 250px 50px 0',
              zIndex: 1,
            }}
          />
          <Notification
            type={type}
            {...info}
          />
        </div>
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
