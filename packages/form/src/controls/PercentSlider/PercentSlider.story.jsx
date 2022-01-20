import Story from '@lskjs/dev/Story/UappStory';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import PercentSlider from './PercentSlider';

const PercentSliderFormView = (props) => (
  <Form>
    <Field {...props.control('slider')} />
    <FormDebug {...props} />
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

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('PercentSlider', () => (
    <Story>
      <PercentSliderForm />
    </Story>
  ));
