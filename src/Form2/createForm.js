import React from 'react';
import forEach from 'lodash/forEach';
import set from 'lodash/set';
import { withFormik } from 'formik';
import validate from 'validate.js';
// import pickBy from 'lodash/pickBy';

// const createForm = uapp => ({ controls, view: View }) => {
const createForm = ({
  controls,
  view: View,
  displayName,
  FormGroup,
}) => {
  const prepareControls = (ctrls) => {
    const prepared = {};
    forEach(ctrls, (ctrl, name) => {
      const ControlWrapper = ctrl.FormGroup || FormGroup;
      let component;
      if (ControlWrapper) {
        component = props => React.createElement(
          ControlWrapper,
          props,
          React.createElement(ctrl.component, props),
        );
        // (
        //   <ControlWrapper
        //     {...props}
        //   >
        //     <Component
        //       {...props}
        //     />
        //   </ControlWrapper>
        // );
      } else {
        ({ component } = ctrl);
      }

      prepared[name] = {
        name,
        ...ctrl,
        component,
      };

      // prepared[name].component = () => (
      //   <FormGroup

      //   >
      // )
    });
    return prepared;
  };
  // if(isf(controls)) {
  //   controls = controls(uapp);
  // }
  const preparedControls = prepareControls(controls);

  const staticProps = {
    controls: preparedControls,
  };

  const WrappedView = props => (<View {...staticProps} {...props} />);

  return withFormik({
    mapPropsToValues() {
      const defaultValues = {};
      Object.keys(controls).forEach((key) => {
        set(defaultValues, key, controls[key].default);
      });
      return defaultValues;
    },
    handleSubmit: (values, { /* setSubmitting, */ props }) => {
      const { onSubmit } = props;
      onSubmit(values);
    },
    handleChange: (values, { /* setSubmitting, */ props/* , form  */ }) => {
      const { onChange } = props;
      onChange(values);
    },
    // validate
    // validate(values) {
    //   const validators = {};
    //   forEach(preparedControls, (value, key) => {
    //     validators[key] = value.validator;
    //   });
    //   const errors = validate(values, validators, { fullMessages: false }) || {};
    //   forEach(errors, (error, name) => {
    //     errors[name] = error?.[0];
    //   });
    //   return errors;
    // },
    async validate(values) {
      const validators = {};
      forEach(preparedControls, (value, key) => {
        validators[key] = value.validator;
      });
      try {
        await validate.async(values, validators, { fullMessages: false });
        return {};
      } catch (errors) {
        console.log('catch work', { errors });
        forEach(errors, (error, name) => {
          errors[name] = error?.[0];
        });
        throw errors;
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
    // props.
    displayName: displayName || 'Form',
  })(WrappedView);
};

export default createForm;
