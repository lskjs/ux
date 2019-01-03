import React from 'react';
import get from 'lodash/get';
import MapBox from 'react-geo-picker/lib/mapbox';
import GoogleMap from 'react-geo-picker/lib/google-map';

const Geo = ({
  field,
  form,
  type,
  ...props
}) => {
  const value = get(form.values, field.name);
  const coordinates = value ? {
    longitude: value?.[0],
    latitude: value?.[1],
  } : null;

  const GeoComponent = type === 'google' ? GoogleMap : MapBox;
  
  return (
    <div>
      <GeoComponent
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
    </div>
  );
};

export default Geo;
