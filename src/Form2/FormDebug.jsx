import React from 'react';
import DEV from '../DEV';
import Button from '../Button';

export default (props) => {
  const {
    touched,
    isSubmitting,
    errors,
    values,
    handleSubmit,
    status,
    // controls,
    // ...props
  } = props;

  return (
    <React.Fragment>
      <hr />
      <Button
        paint="primary"
        state={status}
        onClick={handleSubmit}
      >
        Отправить
      </Button>
      <DEV
        json={{
          touched,
          isSubmitting,
          errors,
          values,
          status,
        }}
      />
    </React.Fragment>
  );
};
