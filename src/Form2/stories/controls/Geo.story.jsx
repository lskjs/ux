import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import LightFormGroup from '../../LightFormGroup';
import GeoMapboxBase from '../../controls/GeoMapbox';
import GeoGooglemapsBase from '../../controls/GeoGooglemaps';
import DEV from '../../../DEV';

const GeoView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.geo} />
      <div>
        latitude: {values.geo?.latitude}
        <br />
        longitude: {values.geo?.longitude}
      </div>
      <DEV json={values} />
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
      component: GeoGooglemapsBase,
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
      component: GeoMapboxBase,
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
