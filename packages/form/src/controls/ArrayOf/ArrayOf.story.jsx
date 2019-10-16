import React from 'react';
import { Form, Field, FastField, withFormik } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import ArrayOf from './ArrayOf';
import Input from '../Input/Input';
import Select from '../Select';
import createFormWithI18 from '../../createFormWithI18';
import Radio from '../Radio';
import FormDebug from '../../FormDebug';

const loadOption = async () => ['1', '1', '1', '1', '1'];

const createNestedFormControl = Component => (props) => {
  const { form, field, ...otherProps } = props;
  const { value } = field;
  return (
    <Component  //eslint-disable-line
      {...otherProps}
      initialValues={value}
      onChange={(values) => {
        form.setFieldValue(field.name, values);
      }}
    />
  );
};

const SpeakerFormView = ({ i18, loadOptions, ...props }) => { // loadOptions не прокидывается
  console.log(props);
  return (
    <Form className="ant-form ant-form-vertical">
      <FastField {...props.control('titlePlatform')} loadOptions={loadOptions} /> {/* loadOptions не прокидывается */}
    </Form>
  );
};

const SpeakerForm = createFormWithI18(({ i18 }) => ({
  withFormik,
  view: SpeakerFormView,
  controls: {
    titlePlatform: {
      title: i18.t('event.speakerFormNameTitle'),
      component: Select,
      async: true,
      isMulti: false,
      placeholder: i18.t('event.speakerFormNamePlaceholder'),
      required: true,
    },
  },
}));

const ArrayOfFormView = props => (
  <Form>
    <Field {...props.control('inputArray')} />
    <FastField {...props.control('inputArray')} title="FastField/inputArray" />
    <hr />
    <Field {...props.control('inputArray')} />
    <Field {...props.control('speakers')} />
    <FormDebug {...props} />
  </Form>
);

const ArrayOfForm = createForm({
  view: ArrayOfFormView,
  controls: {
    inputArray: {
      title: 'ArrayOf',
      component: ArrayOf,
      itemComponent: Input,
      itemProps: {
        type: 'number',
      },
      itemInitialValue: '',
      showRemoveButton: true,
      autoAddLastItem: true,
      maxCount: 5,
      minCount: 2,
    },
    inputArray2: {
      title: 'inputArray2',
      component: ArrayOf,
      itemComponent: Input,
      showRemoveButton: true,
      // addLastItem: true,
    },
    inputArray3: {
      title: 'inputArray3',
      component: ArrayOf,
      itemComponent: Input,
      showRemoveButton: true,
      showAddButton: true,
      addButton: 'Добавить input',
    },
    speakers: {
      component: ArrayOf,
      itemComponent: createNestedFormControl(SpeakerForm, React),
      value: loadOption,
      showAddButton: true,
      showRemoveButton: true,
    },
  },
});

export default ({ storiesOf }) => storiesOf('form/controls', module)
  .add('ArrayOf ', () => (
    <Story>
      <ArrayOfForm
        initialValues={{
          inputArray: [
            1122221,
            222222,
          ],
        }}
      />
    </Story>
  ));
