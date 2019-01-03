// import React from 'react';
// import { Form, Field } from 'formik';
// import Story from '../../../Story';
// import createForm from '../../createForm';
// import EditorComponent from '../../controls/Editor';
// import LightFormGroup from '../../LightFormGroup';


// const EditorView = (props) => {
//   const {
//     controls,
//   } = props;
//   return (
//     <Form>
//       <Field {...controls.editor} />
//     </Form>
//   );
// };

// const Editor = createForm({
//   view: EditorView,
//   FormGroup: LightFormGroup,
//   controls: {
//     editor: {
//       title: 'Editor',
//       component: EditorComponent,
//     },
//   },
// });

// module.exports = ({ storiesOf }) =>
//   storiesOf('Form2/controls', module)
//     .add('Editor ', () => {
//       return (
//         <Story>
//           <Editor />
//         </Story>
//       );
//     });
