import React from 'react';
import NotificationSystem from 'react-notification-system';
import Story from '../Story';
import Button from '../Button';
import notify from './notifyStyles.styles';
import Notification from './notify/Notification';

export default ({ storiesOf }) => {
  storiesOf('Toast/NotificationSystem', module)
    .add('default', () => {
      const notificationSystem = React.createRef();
      const toast = () => notificationSystem.current.addNotification({
        message: 'Notification message',
        level: 'success',
      });
      return (
        <Story>
          <NotificationSystem ref={notificationSystem} />

          <Button
            paint="success"
            onClick={() => toast({ type: 'success', title: 'title', text: 'text' })}
          >
            success
          </Button>
          <Button
            paint="warning"
            onClick={() => toast({ type: 'warning', title: 'title', text: 'text' })}
          >
            warning
          </Button>
          <Button
            paint="danger"
            onClick={() => toast({ type: 'danger', title: 'title', text: 'text' })}
          >
            danger
          </Button>
          <Button
            paint="info"
            onClick={() => toast({ type: 'info', title: 'title', text: 'text' })}
          >
            info
          </Button>
        </Story>
      );
    })
    .add('with children', () => {
      const notificationSystem = React.createRef();
      const toast = () => notificationSystem.current.addNotification({
        autoDismiss: 0,
        level: 'success',
        children: <Notification item={{
            type: 'notify.success',
            info: {
              title: 'Success title',
              text: 'Success text',
            },
          }}
        />,
      });
      return (
        <Story>
          <NotificationSystem ref={notificationSystem} style={notify} />

          <Button
            paint="success"
            onClick={() => toast({ type: 'success', title: 'title', text: 'text' })}
          >
            success
          </Button>
        </Story>
      );
    });
};

