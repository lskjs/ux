import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import CustomSelect from './CustomSelect';
import OptionSelect from '../OptionSelect';
import ValueSelect from '../ValueSelect';

import '../../../styles/lib/antd.g.css';
import './CustomSelect.g.css';

const options = [
  {
    label: 'first',
    value: 'one',
  },
  {
    label: 'second',
    value: 'two',
  },
];

const customStyles = {
  control: styles => ({ ...styles, height: 100 }),
  valueContainer: (styles) => {
    console.log(styles);
    return { ...styles, height: 80, width: 240 };
  },
};
// console.log(colourStyles);

module.exports = ({ storiesOf }) => (
  storiesOf('ui/CustomSelect', module)
    .add('Default', () => (
      <ThemeInjector>
        <CustomSelect
          options={options}
        />
      </ThemeInjector>
    ))
    .add('Selected', () => (
      <ThemeInjector>
        <CustomSelect
          value={options[0]}
          options={options}
        />
      </ThemeInjector>
    ))
    .add('FixedWidth', () => (
      <ThemeInjector>
        {/* <div style={{ width: 300 }}> */}
        <CustomSelect
          value={options[0]}
          options={options}
        />
        {/* </div> */}
      </ThemeInjector>
    ))
    .add('CustomOption', () => (
      <ThemeInjector>
        <CustomSelect
          components={{
            SingleValue: ValueSelect,
            Option: OptionSelect,
          }}
          options={[
            {
              label: 'first',
              value: 'one',
              _id: 1,
              avatar: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
              title: 'User1',
            },
            {
              label: 'second',
              value: 'two',
              _id: 2,
              avatar: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
              title: 'User2',
            },
          ]}
          styles={customStyles}
        />
      </ThemeInjector>
    ))
    .add('AsyncSelect', () => (
      <ThemeInjector>
        <CustomSelect
          async
          components={{
            SingleValue: ValueSelect,
            Option: OptionSelect,
          }}
          value={1}
          initOption={async (value) => {
            console.log({ value }, 'initOption');
            return new Promise((resolve) => {
              return setTimeout(() => {
                return resolve({
                    label: 'first',
                    value: 'one',
                    _id: 1,
                    avatar: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
                    title: 'User1',
                  });
              }, 2000);
            });
          }}
          onChange={(value) => {
            console.log(value, 'нус');
          }}
          loadOptions={async (value) => {
            return new Promise((resolve) => {
              console.log({ value });
              setTimeout(() => {
                return resolve([
                  {
                    label: 'first',
                    value: 'one',
                    _id: 1,
                    avatar: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
                    title: 'User1',
                  },
                  {
                    label: 'second',
                    value: 'two',
                    _id: 2,
                    avatar: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
                    title: 'User2',
                  },
                ]);
              }, 500);
            });
          }}
          styles={customStyles}
        />
      </ThemeInjector>
    ))
);
