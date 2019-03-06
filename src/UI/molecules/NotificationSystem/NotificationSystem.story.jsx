import React from 'react';
import NotificationSystem from 'react-notification-system';
import Story from '../../../Story';
import Button from '../../../Button';

export default ({ storiesOf }) => {
  storiesOf('Toast/NotificationSystemComponent', module)
    .add('default', () => {
      let notification;
      return (
        <Story>
          <NotificationSystem ref={(e) => { notification = e; }} />

          <Button
            paint="success"
            onClick={() => notification.toast({
              type: 'success',
              info: {
                title: 'Success title',
                text: 'Success text',
              },
            })}
          >
            success
          </Button>
        </Story>
      );
    });
};

