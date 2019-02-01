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
      title: 'Координаты',
      // default: [-122.268783, 37.871263],
      component: Geo,
      defaultZoom: 9,
      // apiKey: 'AIzaSyDln0Gfickhxbp96Dgh1DyWqjrdhYo0fB0', // 
      apiKey: 'AIzaSyB2h6WjtzHRJvzi51vdikCpHlG3K6n3U24', // &callback=initMap
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Geo2', () => {
      return (
        <Story>
          <GeoGoogleForm
            initialValue={{
              geo: [-122.268783, 37.871263],
            }}
          />
        </Story>
      );
    });
