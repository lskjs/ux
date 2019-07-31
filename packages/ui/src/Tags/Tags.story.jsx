import React from 'react';
import Story from '@lskjs/dev/Story';
import Tags from './Tags';


export default ({ storiesOf }) => {
  storiesOf('ui/Tags', module)
    .add('Default', () => (
      <Story >
        <Tags
          options={[1, 2, 3, 4].map(value => ({ value, title: value }))}
          values={[1, 2]}
          nullValue="Не выбраны теги"
          closable
          onClose={item => console.log('onClose', item)}
          onClick={item => console.log('onClick', item)}
        />
      </Story>
    ));
};
