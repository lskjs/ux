import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import ImageComponent from '../../controls/Image';
import LightFormGroup from '../../LightFormGroup';


const ImageView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.image} />
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
