import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import ImageNative from './ImageNative';
import FormDebug from '../../FormDebug';
import Footer from '../Files/DefaultFooter';

const ImageFormView = props => (
  <Form>
    <Field {...props.control('image')} />
    <Field {...props.control('image1')} />
    <Field {...props.control('image2')} />
    <FormDebug {...props} />
  </Form>
);

const ImageForm = createForm({
  view: ImageFormView,
  controls: {
    image: {
      title: 'Image',
      component: ImageNative,
    },
    image1: {
      title: 'Image 1',
      component: ImageNative,
      showPreview: false,
    },
    image2: {
      title: 'Image custom',
      component: ImageNative,
      components: {
        Footer,
      },
    },
  },
});

export default ({ storiesOf }) => (
  storiesOf('form/controls', module)
    .add('ImageNative ', () => (
      <Story>
        <ImageForm />
      </Story>
    ))
);
