import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import CustomSelect from './CustomSelect';
import OptionSelect from '../OptionSelect';
import ValueSelect from '../ValueSelect';

import '../../../styles/lib/antd.g.css';

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
  valueContainer: styles => ({ ...styles, height: 80 }),
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
        <div style={{ width: 300 }}>
          <CustomSelect
            value={options[0]}
            options={options}
          />
        </div>
      </ThemeInjector>
    ))
    .add('CustomOption', () => (
      <ThemeInjector>
        <CustomSelect
          optionComponent={OptionSelect}
          valueComponent={ValueSelect}
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
);
