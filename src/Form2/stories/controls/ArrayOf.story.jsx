import React from 'react';
import { Form, Field, FastField } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import ArrayOf from '../../controls/ArrayOf';
import Input from '../../controls/Input';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';
import Button from '../../../Button';

const ArrayOfFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.inputArray} />
      <FastField {...props.controls.inputArray} title="FastField/inputArray" />
      <FormDebug {...props} />
    </Form>
  );
};

const ArrayOfForm = createForm({
  view: ArrayOfFormView,
  FormGroup,
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
      addButton: props => <Button paint="primary" {...props}>+</Button>,
      addLastItem: true,
      maxCount: 5,
      minCount: 4,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('ArrayOf ', () => {
      return (
        <Story>
          <ArrayOfForm
            initialValues={{
              inputArray: [
                111,
                222,
              ],
            }}
          />
        </Story>
      );
    });


// import React from 'react';
// import { Form, Field, FastField } from 'formik';
// import Story from '../../../Story';
// import createForm from '../../createForm';
// import Input from '../../controls/Input';
// import FormGroup from '../../FormGroup';
// import FormDebug from '../../FormDebug';

// const InputFormView = (props) => {
//   return (
//     <Form>
//       <Field {...props.controls.input} />
//       <Field {...props.controls.input2} />
//       <FastField {...props.controls.input2} />
//       <FormDebug {...props} />
//     </Form>
//   );
// };

// const InputForm = createForm({
//   view: InputFormView,
//   FormGroup,
//   initialValues: {
//     input: 'createForm.initialValues',
//   },
//   controls: {
//     input: {
//       title: 'input',
//       component: Input,
//       placeholder: 'input placeholder',
//     },
//     input2: {
//       title: 'input2',
//       component: Input,
//       placeholder: 'input2 placeholder',
//       initialValue: 'Some value in input2',
//     },
//   },
// });

// module.exports = ({ storiesOf }) =>
//   storiesOf('Form2/controls', module)
//     .add('Input', () => {
//       return (
//         <Story>
//           <InputForm />
//         </Story>
//       );
//     });

