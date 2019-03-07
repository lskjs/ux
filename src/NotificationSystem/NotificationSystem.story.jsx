import React from 'react';
import NotificationSystem from './NotificationSystem';
import Story from '../Story';
import Button from '../Button';
import notify from './notifyStyles.styles';
import Notification from './Notification';

export default ({ storiesOf }) => {
  storiesOf('NotificationSystem', module)
    .add('default', () => {
      const notificationSystem = React.createRef();
      const toast = (obj) => {
        console.log({ notificationSystem });
        notificationSystem.current.toast(obj);
      };
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
            onClick={() => toast({ type: 'warning', title: 'title', text: 'text', autoDismiss: 5 })}
          >
            warning
          </Button>
          <Button
            paint="danger"
            onClick={() => toast({ type: 'danger', title: 'title', text: 'text', autoDismiss: 10 })}
          >
            danger
          </Button>
          <Button
            paint="info"
            onClick={() => toast({ type: 'info', title: 'title', text: 'text', autoDismiss: 15 })}
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

