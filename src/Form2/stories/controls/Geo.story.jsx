import React from 'react';
import { Form, Field } from 'formik';
import DEV from '../../../DEV';
import Story from '../../../Story';
import createForm from '../../createForm';
import LightFormGroup from '../../LightFormGroup';
import Geo from '../../controls/Geo';
import '../../controls/Geo.g.css';

const GeoView = (props) => {
  const {
    controls,
    values,
  } = props;

  console.log({ controls, values });
  
  return (
    <Form>
      <Field {...controls.geo} />
      <DEV json={values} />
    </Form>
  );
};

const GeoGoogle = createForm({
  view: GeoView,
  FormGroup: LightFormGroup,
  controls: {
    geo: {
      default: [-122.268783, 37.871263],
      component: Geo,
      type: 'google',
      apiKey: 'AIzaSyDln0Gfickhxbp96Dgh1DyWqjrdhYo0fB0&callback=initMap',
    },
  },
});

const GeoMapbox = createForm({
  view: GeoView,
  FormGroup: LightFormGroup,
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
