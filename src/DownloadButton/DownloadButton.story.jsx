import React from 'react';
import Story from '../Story';
import DownloadButton from './DownloadButton';

import ListStore from '../stores/ListStore';

const data = Array(50).fill().map((_, i) => ({
  index: i,
  field1: `value${i}`,
  field2: `value${i}`,
  field3: `value${i}`,
  field4: `value${i}`,
  field5: `value${i}`,
  field6: `value${i}`,
  field7: `value${i}`,
  field8: `value${i}`,
  field9: `value${i}`,
}));

const indexToValue = (fieldName) => {
  return ({ item }) => {
    return `${item[fieldName]} ${item.index}`;
  };
};

const markup = [
  ['field 1', indexToValue('field1')],
  ['field 2', indexToValue('field2')],
  ['field 3', indexToValue('field3')],
  ['field 4', indexToValue('field4')],
  ['field 5', indexToValue('field5')],
  ['field 6', indexToValue('field6')],
  ['field 7', indexToValue('field7')],
  ['field 8', indexToValue('field8')],
  ['field 9', indexToValue('field9')],
];

const markupProps = {};

const api = {
  async find({ skip = 0, limit = 20 } = {}) {
    const count = data.length;
    return {
      count,
      items: data.slice(skip, skip + limit),
    };
  },
};

const listStore = new ListStore({
  api,
});

listStore.fetch({ limit: 25 });

export default ({ storiesOf, action }) => (
  storiesOf('DownloadButton', module)
    .add('default', () => (
      <Story>
        <DownloadButton listStore={listStore} markup={markup} markupProps={markupProps} />
      </Story>
    ))
    .add('download all', () => (
      <Story>
        <DownloadButton listStore={listStore} markup={markup} markupProps={markupProps} downloadAll />
      </Story>
    ))
);

