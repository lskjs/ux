import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import LightFormGroup from '../../LightFormGroup';
import GeoComponent from '../../controls/Geo';
import '../../../index.g.css';

const GeoView = (props) => {
  const {
    controls,
    // values,
  } = props;
  return (
    <Form>
      <Field {...controls.geo} />
    </Form>
  );
};

const GeoGoogle = createForm({
  view: GeoView,
  FormGroup: LightFormGroup,
  controls: {
    geo: {
      defaultValue: {
        latitude: 37.871263,
        longitude: -122.268783,
      },
      component: GeoComponent,
      type: 'google',
      apiKey: 'AIzaSyDln0Gfickhxbp96Dgh1DyWqjrdhYo0fB0&callback=initMap',
      height: 300,
      width: 400,
    },
  },
});

const GeoMapbox = createForm({
  view: GeoView,
  FormGroup: LightFormGroup,
  controls: {
    geo: {
      defaultValue: {
        latitude: 37.871263,
        longitude: -122.268783,
      },
      component: GeoComponent,
      type: 'mapbox',
      apiKey: 'pk.eyJ1IjoibmF0YXZ0cyIsImEiOiJjanE4NmpsZmswMGpvNDJua293YXVrMmxiIn0.ydvNPvOMQalHl9h5oCSMbA',
      height: 400,
      width: 400,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/stories/controls', module)
    .add('GeoMapbox', () => {
      return (
        <Story>
          <GeoMapbox />
        </Story>
      );
    })
    .add('GeoGoogle', () => {
      return (
        <Story>
          <GeoGoogle />
        </Story>
      );
    });
