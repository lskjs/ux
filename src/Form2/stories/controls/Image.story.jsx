import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import ImageComponent from '../../controls/Image';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const ImageView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.image} />
      <DEV json={values} />
    </Form>
  );
};

const Image = createForm({
  view: ImageView,
  FormGroup: LightFormGroup,
  controls: {
    image: {
      title: 'Image',
      component: ImageComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Image ', () => {
      return (
        <Story>
          <Image />
        </Story>
      );
    });
