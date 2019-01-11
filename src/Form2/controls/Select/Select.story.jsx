import React from 'react';
import { Form, Field } from 'formik';
import { ValueContainer as DefaultValueContainer } from 'react-select/lib/components/containers';
import CheckBlank from 'react-icons2/mdi/checkbox-blank-outline';
import CheckMarked from 'react-icons2/mdi/checkbox-marked';
import RadioBlank from 'react-icons2/mdi/checkbox-blank-circle-outline';
import RadioSelected from 'react-icons2/mdi/checkbox-marked-circle';
import range from 'lodash/range';
import random from 'lodash/random';
import Story from '../../../Story';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';
import Select from './Select';
import FlagIcon from '../../../UI/organisms/FlagIcon';

import MultiValue from '../../../UI/atoms/MultiValueLabel';
import OptionSelect from '../../../UI/molecules/OptionSelect';
import ValueSelect from '../../../UI/molecules/ValueSelect';

const SelectFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.select} />
      <Field {...props.controls.select2} />
      <Field {...props.controls.select3} />
      <Field {...props.controls.select4} />
      <hr />
      <Field {...props.controls.radio} />
      <Field {...props.controls.checkboxes} />
      <Field {...props.controls.checkboxesWithValueConrainer} />
      <Field {...props.controls.games} />
      <Field {...props.controls.flag} />
      <hr />
      <Field {...props.controls.userSelect} />
      <Field {...props.controls.asyncSelect} />
      <Field {...props.controls.asyncSelectWithoutloadOptions} />
      <hr />
      <hr />
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <FormDebug {...props} />
    </Form>
  );
};

const ValueContainer = ({ children, selectProps, ...props }) => {
  const chl = [children[0][0] || children[0], children[1]];
  return (
    <DefaultValueContainer {...props}>{chl}</DefaultValueContainer>
  );
};

const SelectForm = createForm({
  view: SelectFormView,
  FormGroup,
  controls: {
    select: {
      title: 'The Select',
      component: Select,
      options: range(1, 11).map(id => ({
        value: id,
        title: `The ${id}`,
      })),
    },
    select2: {
      title: 'The Select2',
      component: Select,
      options: range(1, 11).map(id => ({
        value: id,
      })),
      placeholder: 'placeholder 2',
    },
    select3: {
      title: 'The Select3',
      component: Select,
      options: ['one', 'two'],
    },
    select4: {
      title: 'The Select4',
      component: Select,
      options: ['one', 'two'],
      placeholder: 'placeholder',
    },
    userSelect: {
      title: 'The userSelect',
      component: Select,
      components: {
        SingleValue: ValueSelect,
        Option: OptionSelect,
      },
      options: range(1, 11).map(id => ({
        value: id,
        id,
        image: `https://picsum.photos/40/40/?image=${id}`,
        title: `User ${id}`,
      })),
      placeholder: 'placeholder',
    },
    radio: {
      title: 'Radio',
      component: Select,
      components: {
        SingleValue: ValueSelect,
        Option: OptionSelect,
      },
      options: range(1, 11).map(id => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
      optionProps: {
        icon: <RadioBlank />,
        iconActive: <RadioSelected />,
        iconColor: '#1890ff',
      },
    },
    checkboxes: {
      title: 'checkboxes',
      component: Select,
      isMulti: true,
      // hideSelectedOptions: false,
      components: {
        // MultiValue,
        // ValueContainer,
        // MultiValueRemove: () => null,
        Option: OptionSelect,
      },
      options: range(1, 11).map(id => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
      optionProps: {
        icon: <CheckBlank />,
        iconActive: <CheckMarked />,
        iconColor: '#1890ff',
      },
      // hideSelectedOptions: false,
    },
    checkboxesWithValueConrainer: {
      title: 'checkboxesWithValueConrainer',
      component: Select,
      components: {
        MultiValue,
        ValueContainer,
        // MultiValueRemove: () => null,
        Option: OptionSelect,
      },
      options: [
        {
          value: 'one',
          title: 'User1',
        },
        {
          value: 'two',
          title: 'User2',
        },
      ],
      optionProps: {
        icon: <CheckBlank />,
        iconActive: <CheckMarked />,
        iconColor: '#1890ff',
      },
    },
    games: {
      title: 'Games',
      component: Select,
      isMulti: true,
      components: {
        MultiValue,
        ValueContainer,
        // MultiValueRemove: () => null,
        Option: OptionSelect,
      },
      options: [
        {
          value: 'id1',
          title: 'User1',
          image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
        },
        {
          value: 'id2',
          title: 'User2',
          image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
        },
      ],
      optionProps: {
        icon: <CheckBlank />,
        iconActive: <CheckMarked />,
        iconColor: '#1890ff',
      },
      hideSelectedOptions: false,
    },
    flag: {
      title: 'Flag',
      component: Select,
      components: {
        SingleValue: ValueSelect,
        Option: OptionSelect,
      },
      styles: {
        singleValue: base => ({
          ...base,
          position: 'relative',
          top: 'inherit',
          transform: 'inherit',
        }),
      },
      options: [
        {
          title: 'Russia',
          value: 'one',
          icon: <FlagIcon code="ru" />,
        },
        {
          title: 'Britain',
          value: 'two',
          icon: <FlagIcon code="gb" />,
        },
      ],
    },
    asyncSelectWithoutloadOptions: {
      title: 'The asyncSelectWithoutloadOptions',
      component: Select,
      async: true,
      options: ['one', 'two'],
      placeholder: 'placeholder',
    },
    asyncSelect: {
      title: 'The asyncSelect',
      component: Select,
      async: true,
      loadOption: async value => ({
        value,
        title: (value || '').toUpperCase(),
      }),
      loadOptions: async (searchValue = '') => {
        const start = random(i, i * (searchValue.length + 2));
        return range(start, start + 10).map(id => ({
          value: id,
          id,
          title: `User ${id}`,
        }));
      },
      options: ['one', 'two'],
      placeholder: 'placeholder',
    },
  },
});


module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Select ', () => {
      return (
        <Story>
          <SelectForm
            initialValues={{
              select4: 'two',
            }}
          />
        </Story>
      );
    });
