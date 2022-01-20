import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Geo from './Geo';

const GeoViewForm = (props) => (
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
      apiKey: 'YOUR KEY HERE',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Geo', () => (
    <Story>
      <GeoGoogleForm
        initialValues={{
          geo: [-122.268783, 37.871263],
        }}
      />
    </Story>
  ));
