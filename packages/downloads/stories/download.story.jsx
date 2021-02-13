import React from 'react';
import download, { generateFile } from './download';
import Story from '@lskjs/dev/Story';
import DEV from '@lskjs/dev/DEV';
import StatefulButton from '@lskjs/button/StatefulButton';
import Button from '@lskjs/button/Button';
import ListStore from '@lskjs/mobx/stores/ListStore';
const data = Array(10)
  .fill()
  .map((_, i) => ({
    index: i,
    field1: 'value1',
    field2: 'value2',
    field3: 'value3',
    field4: 'value4',
    field5: 'value5',
    field6: 'value6',
    field7: 'value7',
    field8: 'value8',
    field9: 'value9',
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

const defaultData = [
  ['title1', 'title2', 'title 3'],
  ['cell1', 'cell2', 'cell3'],
  ['cell4', 'cell5', 'cell6'],
];

export default ({ storiesOf }) =>
  storiesOf('downloads/utils', module)
    .add('download', () => (
      <Story>
        <DEV json={defaultData} />
        <button onClick={() => generateFile({ name: 'file', data: defaultData })}>Download spreadsheet</button>
      </Story>
    ))
    .add('download button', () => (
      <Story>
        <StatefulButton
          componentClass={Button}
          paint="primary"
          onClick={() =>
            download({
              listStore,
              markup,
              markupProps,
              name: 'default',
            })
          }
        >
          Download
        </StatefulButton>
      </Story>
    ))
    .add('download button all', () => (
      <Story>
        <StatefulButton
          componentClass={Button}
          paint="primary"
          onClick={() =>
            download({
              listStore,
              markup,
              markupProps,
              name: 'all',
              all: true,
            })
          }
        >
          Download all
        </StatefulButton>
      </Story>
    ))
    .add('download button all with dynamic fields', () => (
      <Story>
        <StatefulButton
          componentClass={Button}
          paint="primary"
          onClick={() =>
            download({
              listStore,
              markup,
              markupProps,
              dynamicFields: (item) => {
                // console.log(item);
                const arr = [['vk', '1337', 'vk']];
                if (Math.random() > 0.5) {
                  arr.push(['dynamic field', item.index, 'other']);
                }
                arr.push(['Ссылка на соц. сеть 1 ', 3333]);
                arr.push(['dynamic static field', 1337]);
                arr.push(['Ссылка на соц. сеть 2 ', 3333]);
                arr.push(['vk 2', 11111, 'vk']);
                return arr;
              },
              dynamicFieldsSort: ['other', 'vk'],
              name: 'all',
              all: true,
            })
          }
        >
          Download all
        </StatefulButton>
      </Story>
    ));
