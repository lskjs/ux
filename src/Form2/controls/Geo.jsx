import React from 'react';
import MapBox from 'react-geo-picker/lib/mapbox';
import GoogleMap from 'react-geo-picker/lib/google-map';

const Geo = ({
  field,
  form,
  // defaultValues,
  type,
  value,
  ...props
}) => {
  // const defaultVal = defaultValues || [-122.268783, 37.871263];
  const coordinates = value ? {
    longitude: value?.[0],
    latitude: value?.[1],
  } : {
    longitude: 0,
    latitude: 0,
  };

  const GeoComponent = type === 'google' ? GoogleMap : MapBox;
  return (
    <div>
      <GeoComponent
        {...field}
        {...props}
        // defaultValue={{
        //   longitude: -111.268783,
        //   latitude: 37.871263,
        // }}
        onChange={(val) => {
          form.setFieldValue(field.name, [val.longitude, val.latitude]);
        }}
        value={coordinates}
      />
    </div>
  );
};

export default Geo;
