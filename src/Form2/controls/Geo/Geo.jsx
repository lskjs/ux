import React from 'react';
import get from 'lodash/get';
// import MapBox from 'react-geo-picker/lib/mapbox';
import GoogleMap from 'react-geo-picker/lib/google-map';

const Geo = ({
  field,
  form,
  type,
  ...props
}) => {
  const { value } = field;
  const coordinates = value ? {
    longitude: get(value, 0, 0),
    latitude: get(value, 1, 0),
  } : null;

  // const GeoComponent = type === 'google' ? GoogleMap : MapBox;

  // if (!GeoComponent) return <div>!GeoComponent</div>;

  return (
    <GoogleMap
      {...field}
      {...props}
      defaultValue={{
        longitude: 0,
        latitude: 0,
      }}
      onChange={(val) => {
        form.setFieldValue(field.name, [val.longitude, val.latitude]);
      }}
      value={coordinates}
    />
  );
};

export default Geo;
