import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Geo from './Geo';
import FormDebug from '../../FormDebug';

const GeoViewForm = props => (
  <Form>
    <Field {...props.control('geo')} />
    <FormDebug {...props} />
  </Form>
);


const GeoGoogleForm = createForm({
  view: GeoViewForm,
  controls: {
    geo: {
      title: 'Координаты',
      component: Geo,
      defaultZoom: 9,
      apiKey: 'AIzaSyB2h6WjtzHRJvzi51vdikCpHlG3K6n3U24',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Geo', () => {
      return (
        <Story>
          <GeoGoogleForm
            initialValues={{
              geo: [-122.268783, 37.871263],
            }}
          />
        </Story>
      );
    });
