import React, { PureComponent } from 'react';
import ReactNotificationSystem from 'react-notification-system';
import autobind from 'core-decorators/lib/autobind';

import Notification from '../../../Toast/notify/Notification';
import notify from './notifyStyles.styles';

class NotificationSystem extends PureComponent {
  constructor(props) {
    super(props);
    this.notificationSystem = React.createRef();
  }
  @autobind
  toast({ type, info }) {
    this.notificationSystem.current.addNotification({
      autoDismiss: 0,
      level: type,
      children: <Notification item={{
          type: `notify.${type}`,
          info,
        }}
      />,
    });
  }
  render() {
    return (
      <ReactNotificationSystem ref={this.notificationSystem} style={notify} />
    );
  }
}

export default NotificationSystem;
