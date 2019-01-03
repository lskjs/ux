import React from 'react';
import MapBox from 'react-geo-picker/lib/mapbox';
import GoogleMap from 'react-geo-picker/lib/google-map';

const Geo = ({
  field,
  form,
  defaultValues,
  type,
  value,
  ...props
}) => {
  const defaultCoordinates = defaultValues || [-122.268783, 37.871263];
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
          longitude: defaultCoordinates?.[0],
          latitude: defaultCoordinates?.[1],
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
