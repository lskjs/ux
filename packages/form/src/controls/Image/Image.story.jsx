import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Image from './Image';
import FormDebug from '../../FormDebug';
import Footer from '../Files/DefaultFooter';

const ImageFormView = props => (
  <Form>
    <Field {...props.control('image')} />
    <Field {...props.control('image2')} />
    <FormDebug {...props} />
  </Form>
);

const ImageForm = createForm({
  view: ImageFormView,
  controls: {
    image: {
      title: 'Image',
      component: Image,
    },
    image2: {
      title: 'Image custom',
      component: Image,
      components: {
        Footer,
      },
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Image ', () => {
      return (
        <Story>
          <ImageForm />
        </Story>
      );
    });
