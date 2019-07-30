import React from 'react';
import PropTypes from 'prop-types';
import Files from '../FilesNative/FilesBaseNative';

import DefaultBody from './DefaultBody';
import DefaultFooter from './DefaultFooter';

const ImageUploader = ({
  field,
  form,
  onError,
  components,
  isMulti,
  maxSize,
  ...props
}) => {
  const Body = components.Body || ImageUploader.defaultProps.components.Body;
  const Footer = components.Footer || ImageUploader.defaultProps.components.Footer;
  return (
    <Files
      {...field}
      {...props}
      value2={field.value}
      maxSize={maxSize}
      multiple={isMulti}
      onSubmit={value => form.setFieldValue(field.name, value)}
      onError={() => onError && onError(form.errors[field.name])} // this.globalError
      validationState={form.errors[field.name] ? 'error' : null}
      files={field.value}
      onBlur={null}
      accept="image/jpeg, image/png"
      footer={Footer}
    >
      {Body}
    </Files>
  );
};

ImageUploader.propTypes = {
  components: PropTypes.shape({
    Body: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Footer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  }),
};

ImageUploader.defaultProps = {
  components: {
    Body: DefaultBody,
    Footer: DefaultFooter,
  },
};

export default ImageUploader;
