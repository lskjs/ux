import React from 'react';
import { Form, Field } from 'formik';
// import StoryWithUpload from '@lskjs/dev/Story';
import StoryWithUpload from '../Files/StoryWithUpload';
import createForm from '../../createForm';
import Image from './Image';
import FormDebug from '../../FormDebug';
import Footer from '../Files/FilesDefaultFooter';

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
      component: Image,
    },
    image1: {
      title: 'Image 1',
      component: Image,
      showPreview: false,
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
  storiesOf('form/controls', module).add('Image ', () => (
    <StoryWithUpload>
      <ImageForm />
    </StoryWithUpload>
  ));
