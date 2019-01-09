import React from 'react';
import { Form, Field } from 'formik';
import DEV from '../../../DEV';
import Story from '../../../Story';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import Geo from './Geo';
import FormDebug from '../../FormDebug';

import './Geo.g.css';

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

const GeoMapboxForm = createForm({
  view: GeoViewForm,
  FormGroup,
  controls: {
    geo: {
      default: [-122.268783, 37.871263],
      component: Geo,
      type: 'mapbox',
      apiKey: 'pk.eyJ1IjoibmF0YXZ0cyIsImEiOiJjanE4NmpsZmswMGpvNDJua293YXVrMmxiIn0.ydvNPvOMQalHl9h5oCSMbA',
      height: 400,
      width: 400,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('GeoMapbox', () => {
      return (
        <Story>
          <GeoMapboxForm />
        </Story>
      );
    })
    .add('GeoGoogle', () => {
      return (
        <Story>
          <GeoGoogleForm />
        </Story>
      );
    });
