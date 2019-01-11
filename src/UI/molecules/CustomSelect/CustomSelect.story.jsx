import React from 'react';
import { ValueContainer as DefaultValueContainer } from 'react-select/lib/components/containers';
import CheckBlank from 'react-icons2/mdi/checkbox-blank-outline';
import CheckMarked from 'react-icons2/mdi/checkbox-marked';
import RadioBlank from 'react-icons2/mdi/checkbox-blank-circle-outline';
import RadioSelected from 'react-icons2/mdi/checkbox-marked-circle';
import ThemeInjector from '../../../ThemeInjector';
import CustomSelect from './CustomSelect';
import OptionSelect from '../OptionSelect';
import ValueSelect from '../ValueSelect';
import theme from '../../../utils/theme';
import FlagIcon from '../../organisms/FlagIcon';
import MultiValue from '../../atoms/MultiValueLabel';

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

const codes = ['ru', 'gb'];

const ValueContainer = ({ children, selectProps, ...props }) => {
  const chl = [children[0][0] || children[0], children[1]];
  return (
    <DefaultValueContainer {...props}>{chl}</DefaultValueContainer>
  );
};

// const customStyles = {
//   control: styles => ({ ...styles, height: 48 }),
//   valueContainer: (styles) => {
//     console.log(styles);
//     return { ...styles, height: 80, width: 48 };
//   },
// };
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
          components={{
            SingleValue: ValueSelect,
            Option: OptionSelect,
          }}
          options={[
            {
              label: 'first',
              value: 'one',
              _id: 1,
              image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
              title: 'User1',
            },
            {
              label: 'second',
              value: 'two',
              _id: 2,
              image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
              title: 'User2',
            },
          ]}
          // styles={customStyles}
        />
      </ThemeInjector>
    ))
    .add('Radio', () => (
      <ThemeInjector theme={theme}>
        <CustomSelect
          closeMenuOnSelect={false}
          components={{
            SingleValue: ValueSelect,
            Option: OptionSelect,
          }}
          icon={<RadioBlank />}
          iconActive={<RadioSelected />}
          iconColor={theme.colors.primary}
          options={[
            {
              label: 'first',
              value: 'one',
              _id: 1,
              title: 'User1',
            },
            {
              label: 'second',
              value: 'two',
              _id: 2,
              title: 'User2',
            },
          ]}
          // styles={customStyles}
        />
      </ThemeInjector>
    ))
    .add('Checkbox', () => (
      <ThemeInjector theme={theme}>
        <CustomSelect
          isMulti
          components={{
            MultiValue,
            ValueContainer,
            MultiValueRemove: () => null,
            Option: OptionSelect,
          }}
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          icon={<CheckBlank color="#1890ff" />}
          iconActive={<CheckMarked color="#1890ff" />}
          options={[
            {
              label: 'first',
              value: 'one',
              _id: 1,
              title: 'User1',
            },
            {
              label: 'second',
              value: 'two',
              _id: 2,
              title: 'User2',
            },
          ]}
          // styles={customStyles}
        />
      </ThemeInjector>
    ))
    .add('Games', () => (
      <ThemeInjector theme={theme}>
        <CustomSelect
          isMulti
          components={{
            MultiValue,
            ValueContainer,
            MultiValueRemove: () => null,
            Option: OptionSelect,
          }}
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          icon={<CheckBlank color="#1890ff" />}
          iconActive={<CheckMarked color="#1890ff" />}
          options={[
            {
              label: 'first',
              value: 'one',
              _id: 1,
              image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
              title: 'User1',
            },
            {
              label: 'second',
              value: 'two',
              _id: 2,
              image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
              title: 'User2',
            },
          ]}
          // styles={customStyles}
        />
      </ThemeInjector>
    ))
    .add('Flag', () => (
      <ThemeInjector theme={theme}>
        <CustomSelect
          components={{
            SingleValue: ValueSelect,
            Option: OptionSelect,
          }}
          // hideSelectedOptions={false}
          closeMenuOnSelect={false}
          // icon={<CheckBlank color="#1890ff" />}
          // iconActive={<CheckMarked color="#1890ff" />}
          // optionComponent={OptionSelect}
          // valueComponent={ValueSelect}
          options={codes.map((item) => {
              return (
                {
                  label: 'first',
                  value: 'one',
                  _id: 1,
                  icon: <FlagIcon
                    code={item}
                  />,
                  title: 'User1',
                }
              );
            })}
          // styles={customStyles}
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
          // styles={customStyles}
        />
      </ThemeInjector>
    ))
);
