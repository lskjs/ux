import React from 'react';
import DEV from '../DEV';
import Button from '../Button';

export default (props) => {
  const {
    touched,
    isSubmitting,
    errors,
    values,
    // controls,
    // ...props
  } = props;

  return (
    <React.Fragment>
      <hr />
      <Button paint="primary">
        Отправить
      </Button>
      <DEV
        json={{
          touched,
          isSubmitting,
          errors,
          values,
        }}
      />
    </React.Fragment>
  );
};
