import PropTypes from 'prop-types';
import React from 'react';

import FilesBase from './FilesBase';
import DefaultBody from './FilesDefaultBody';
import DefaultFooter from './FilesDefaultFooter';

// eslint-disable-next-line no-nested-ternary
const getArray = (val) => (val == null ? [] : Array.isArray(val) ? val : [val]);

const Files = ({
  field,
  form,
  onError,
  components,
  isMulti,
  valueType = 'url',
  hasCropper,
  CropperComponent,
  ...props
}) => {
  const Body = components.Body || Files.defaultProps.components.Body;
  const Footer = components.Footer || Files.defaultProps.components.Footer;
  return (
    <FilesBase
      value2={field.value}
      {...props}
      onError={onError}
      valueType={valueType}
      hasCropper={hasCropper}
      CropperComponent={CropperComponent}
      multiple={isMulti}
      onSubmit={(incomeValues) => {
        if (incomeValues && incomeValues.type === 'remove') {
          const { index } = incomeValues;
          if (isMulti) {
            let value = field.value || [];
            value = [...value];
            value.splice(index, 1);
            form.setFieldValue(field.name, value);
          } else if (incomeValues.src === field.value) {
            form.setFieldValue(field.name, null);
          }
          return;
        }
        if (incomeValues === null) {
          if (isMulti) {
            form.setFieldValue(field.name, []);
          } else {
            form.setFieldValue(field.name, null);
          }
          return;
        }

        if (!isMulti) {
          form.setFieldValue(field.name, incomeValues);
          return;
        }
        const values = [...getArray(field.value), ...getArray(incomeValues)];
        form.setFieldValue(field.name, values);
      }}
      onBlur={null}
      footer={Footer}
    >
      {Body}
    </FilesBase>
  );
};

Files.propTypes = {
  components: PropTypes.shape({
    Body: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Footer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  }),
  hasCropper: PropTypes.bool,
  isMulti: PropTypes.bool,
  form: PropTypes.objectOf(Object).isRequired,
  field: PropTypes.objectOf(Object).isRequired,
  CropperComponent: PropTypes.elementType,
  onError: PropTypes.func,
  valueType: PropTypes.string,
};

Files.defaultProps = {
  components: {
    Body: DefaultBody,
    Footer: DefaultFooter,
  },
  isMulti: false,
  hasCropper: false,
  CropperComponent: undefined,
  onError: null,
  valueType: 'url',
};

export default Files;
