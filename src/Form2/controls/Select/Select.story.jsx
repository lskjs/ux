import React from 'react';
import { Form, Field } from 'formik';
// import { ValueContainer as DefaultValueContainer } from 'react-select/lib/components/containers';
import CheckBlank from 'react-icons2/mdi/checkbox-blank-outline';
import CheckMarked from 'react-icons2/mdi/checkbox-marked';
import RadioBlank from 'react-icons2/mdi/checkbox-blank-circle-outline';
import RadioSelected from 'react-icons2/mdi/checkbox-marked-circle';
import range from 'lodash/range';
import Story from '../../../Story';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';
import Select from './Select';
import FlagIcon from '../../../UI/organisms/FlagIcon';

import SingleValue from './SingleValue';
import MultiValue from './MultiValue';
import Option from './Option';
import ValueContainer from './ValueContainer/ValueContainer';

const SelectFormView = (props) => {
  return (
    <Form>
      <h1>Обычные селекты</h1>
      <Field {...props.controls.select} />
      <Field {...props.controls.select2} />
      <Field {...props.controls.select3} />
      <Field {...props.controls.select4} />
      <hr />
      <h1>Мультиселекты</h1>
      <Field {...props.controls.multiselect} />
      <Field {...props.controls.multiselect2} />
      <Field {...props.controls.checkboxes} />
      <Field {...props.controls.checkboxesWithValueConrainer} />
      <hr />
      <h1>Асинхронные селекты</h1>
      <Field {...props.controls.asyncSelect} />
      <Field {...props.controls.asyncSelect2} />
      <hr />
      <h1>Кастомный дизайн</h1>
      <Field {...props.controls.radio} />
      <Field {...props.controls.games} />
      <Field {...props.controls.flag} />
      <Field {...props.controls.userSelect} />
      <hr />
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

// const ValueContainer = ({ children, selectProps, ...props }) => {
//   const chl = [children[0][0] || children[0], children[1]];
//   return (
//     <DefaultValueContainer {...props}>{chl}</DefaultValueContainer>
//   );
// };

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
    // ///
    multiselect: {
      title: 'multiselect',
      component: Select,
      isMulti: true,
      options: range(1, 11).map(id => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
    },
    multiselect2: {
      title: 'multiselect2',
      component: Select,
      isMulti: true,
      hideSelectedOptions: false,
      options: range(1, 11).map(id => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
    },
    checkboxes: {
      title: 'checkboxes',
      component: Select,
      isMulti: true,
      hideSelectedOptions: false,
      components: {
        Option,
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
        Option,
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
    // ///
    radio: {
      title: 'Radio',
      component: Select,
      components: {
        SingleValue,
        Option,
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
    userSelect: {
      title: 'The userSelect',
      component: Select,
      components: {
        SingleValue,
        Option,
      },
      options: range(1, 11).map(id => ({
        value: id,
        id,
        image: `https://picsum.photos/40/40/?image=${id}`,
        title: `User ${id}`,
      })),
      placeholder: 'placeholder',
    },
    games: {
      title: 'Games',
      component: Select,
      isMulti: true,
      components: {
        MultiValue,
        ValueContainer,
        // MultiValueRemove: () => null,
        Option,
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
        SingleValue,
        Option,
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
    // /////
    asyncSelect: {
      title: 'The asyncSelect',
      component: Select,
      async: true,
      loadOption: async value => ({
        value,
        id: value,
        image: `https://picsum.photos/40/40/?image=${value}`,
        title: `User ${value}`,
      }),
      loadOptions: async (searchValue = '') => {
        const start = searchValue.length;
        return new Promise((resolve) => {
          setTimeout(() => resolve(range(start, start + 10).map(value => ({
            value,
            id: value,
            image: `https://picsum.photos/40/40/?image=${value}`,
            title: `User ${value}`,
          }))), 50);
        });
      },
        // return range(start, start + 10).map(value => ({
        //   value,
        //   id: value,
        //   image: `https://picsum.photos/40/40/?image=${value}`,
        //   title: `User ${value}`,
        // }));
      // },
    },
    asyncSelect2: {
      title: 'The asyncSelect2',
      component: Select,
      async: true,
      loadOption: async value => ({
        value,
        id: value,
        image: `https://picsum.photos/40/40/?image=${value}`,
        title: `User ${value}`,
      }),
      loadOptions: async (searchValue = '') => {
        const start = searchValue.length;
        return new Promise((resolve) => {
          setTimeout(() => resolve(range(start, start + 10).map(value => ({
            value,
            id: value,
            image: `https://picsum.photos/40/40/?image=${value}`,
            title: `User ${value}`,
          }))), 2000);
        });
      },
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
              asyncSelect2: 99,
            }}
          />
        </Story>
      );
    });
