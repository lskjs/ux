import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ReloadIcon from 'react-icons2/mdi/reload';
import Alert from 'antd/lib/alert';
import Loading from './Loading';
import Story from '../Story';
import Box from '../UI/molecules/Box';


const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta tempor scelerisque. Morbi id arcu diam. Aenean laoreet turpis non ultrices blandit. Morbi ac elementum dolor, et consectetur ex. Cras eget justo odio. Praesent consectetur justo pharetra venenatis finibus. Nunc blandit ex sed nunc blandit, at iaculis libero posuere.Donec maximus ligula venenatis, eleifend dolor at, auctor ligula. Vestibulum pharetra ac risus at aliquet. Quisque eget nunc ipsum. Pellentesque faucibus libero vel urna blandit, eu imperdiet libero vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae lobortis felis. Quisque sit amet metus suscipit, sollicitudin purus vitae, vehicula arcu. Quisque id mattis dolor. Maecenas auctor euismod urna sed auctor. Integer fermentum sodales ligula sit amet consequat. Morbi eros arcu, aliquam rhoncus molestie at, pulvinar sit amet orci. Fusce sagittis eleifend dolor a finibus. Fusce et est sit amet nisl efficitur ullamcorper non at orci. Suspendisse potenti. Nulla facilisi. Pellentesque vehicula mauris sed leo lacinia sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta tempor scelerisque. Morbi id arcu diam. Aenean laoreet turpis non ultrices blandit. Morbi ac elementum dolor, et consectetur ex. Cras eget justo odio. Praesent consectetur justo pharetra venenatis finibus. Nunc blandit ex sed nunc blandit, at iaculis libero posuere.Donec maximus ligula venenatis, eleifend dolor at, auctor ligula. Vestibulum pharetra ac risus at aliquet. Quisque eget nunc ipsum. Pellentesque faucibus libero vel urna blandit, eu imperdiet libero vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae lobortis felis. Quisque sit amet metus suscipit, sollicitudin purus vitae, vehicula arcu. Quisque id mattis dolor. Maecenas auctor euismod urna sed auctor.';

let isDisabled = false;

export default ({ storiesOf }) => (
  storiesOf('Loading', module)
    .add('svg default', () => (
      <Story>
        <Loading type="svg" full />
      </Story>
    ))
    .add('custom', () => (
      <Story>
        <Loading icon={<ReloadIcon />}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Loading>
      </Story>
    ))
    .add('controlled', () => {
      return (
        <Story>
          <Loading icon={<ReloadIcon />} disabled={isDisabled}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Loading>
          <button onClick={() => { isDisabled = !isDisabled; }}>Trigger</button>
        </Story>
      );
    })
    .add('big content', () => (
      <Story>
        <Loading>
          <Box>
            <Box.Header padded>Title</Box.Header>
            <Box.Body padded>{text}</Box.Body>
          </Box>
        </Loading>
      </Story>
    ))
);
