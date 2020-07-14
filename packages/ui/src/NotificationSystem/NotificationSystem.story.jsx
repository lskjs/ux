import React from 'react';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';
import NotificationSystem from '@lskjs/notification';
import notify from '@lskjs/notification/notifyStyles.styles';
import Notification from '@lskjs/notification/Notification';

export default ({ storiesOf }) => {
  storiesOf('notification/NotificationSystem', module)
    .add('default', () => {
      const notificationSystem = React.createRef();
      const toast = obj => {
        notificationSystem.current.toast(obj);
      };
      return (
        <Story>
          <NotificationSystem ref={notificationSystem} clickable={false} />
          <Button
            paint="success"
            onClick={() =>
              toast({
                type: 'success',
                title: 'title',
                text: 'text',
                onClick: () => console.log('onClick'),
              })}
          >
            success
          </Button>
          <Button
            paint="warning"
            onClick={() =>
              toast({
                type: 'warning',
                title: 'title',
                text: 'text',
                href: '/cabinet/qweqweqwe',
              })}
          >
            warning
          </Button>
          <Button paint="danger" onClick={() => toast({ type: 'error', title: 'title', text: 'text' })}>
            danger
          </Button>
          <Button paint="info" onClick={() => toast({ type: 'info', title: 'title', text: 'text' })}>
            info
          </Button>
          <Button paint="danger" onClick={() => toast({ type: 'error' })}>
            danger2
          </Button>
          <Button paint="success" onClick={() => toast({ type: 'success' })}>
            success2
          </Button>
          <Button paint="success" onClick={() => toast({ type: 'success', autoDismiss: 5 })}>
            autoDismiss: 5
          </Button>
          <Button paint="success" onClick={() => toast({ type: 'success', autoDismiss: 15 })}>
            autoDismiss: 15
          </Button>
        </Story>
      );
    })
    .add('with children', () => {
      const notificationSystem = React.createRef();
      const toast = () =>
        notificationSystem.current.addNotification({
          autoDismiss: 0,
          level: 'success',
          children: (
            <Notification
              item={{
                type: 'notify.success',
                info: {
                  title: 'Success title',
                  text: 'Success text',
                },
              }}
            />
          ),
        });
      return (
        <Story>
          <NotificationSystem ref={notificationSystem} style={notify} />

          <Button paint="success" onClick={() => toast({ type: 'success', title: 'title', text: 'text' })}>
            success
          </Button>
        </Story>
      );
    });
};
