// import Story from '@lskjs/dev/Story/UappStory';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../form2/src/createForm';
// import FormDebug from '../../FormDebug';
import PercentSliderComponent from '../src/PercentSlider';

const PercentSlider = () => <PercentSliderComponent />;

const PercentSliderFormView = (props) => (
  <Form>
    <Field {...props.control('slider')} />
    {/* <FormDebug {...props} /> */}
  </Form>
);

const PercentSliderForm = createForm({
  view: PercentSliderFormView,
  initialValues: {
    slider: 10,
  },
  controls: {
    slider: {
      title: 'PercentSlider',
      component: PercentSlider,
    },
  },
});

export default {
  title: 'form-control-percentslider/PercentSliderForm',
  component: PercentSliderForm,
};

export const Default = () => <PercentSliderForm />;
