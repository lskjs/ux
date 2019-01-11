import React from 'react';
import { Form, Field } from 'formik';
// import DEV from '../../../DEV';
import Story from '../../../Story';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import Geo from './Geo2';
import FormDebug from '../../FormDebug';

import './Geo2.g.css';

const GeoViewForm = (props) => {
  return (
    <Form>
      <Field {...props.controls.geo} />
      <FormDebug {...props} />
    </Form>
  );
};

const GeoGoogleForm = createForm({
  view: GeoViewForm,
  FormGroup,
  controls: {
    geo: {
      default: [-122.268783, 37.871263],
      component: Geo,
      type: 'google',
      apiKey: 'AIzaSyDln0Gfickhxbp96Dgh1DyWqjrdhYo0fB0&callback=initMap',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Geo2', () => {
      return (
        <Story>
          <GeoGoogleForm />
        </Story>
      );
    });
