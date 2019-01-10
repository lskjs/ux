import React from 'react';
import { Form, Field } from 'formik';
import range from 'lodash/range';
import random from 'lodash/random';
import Story from '../../../Story';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';
import Select from './Select';
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
      <Field {...props.controls.userSelect} />
      <Field {...props.controls.asyncSelect} />
      <FormDebug {...props} />
    </Form>
  );
};

const SelectForm = createForm({
  view: SelectFormView,
  FormGroup,
  controls: {
    select: {
      title: 'The Select',
      component: Select,
      options: [
        {
          value: 'one',
          title: 'The One',
        },
        {
          value: 'two',
          title: 'The Two',
        },
      ],
      placeholder: 'placeholder 1',
    },
    select2: {
      title: 'The Select2',
      component: Select,
      options: [
        {
          value: 'one',
        },
        {
          value: 'two',
        },
      ],
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
      options: [{
        value: 'id1',
        _id: 1,
        image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
        title: 'User1',
      }, {
        value: 'id2',
        _id: 2,
        image: 'https://cdn2.iconfinder.com/data/icons/adobe-icons-professional/512/Br.png',
        title: 'User2',
      }],
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
      loadOptions: async (searchValue = '') => (
        range(10).map(i => i * random(i, i * (searchValue.length + 2))).map(value => ({
          value,
          title: `Title ${value}`,
        }))
      ),
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
