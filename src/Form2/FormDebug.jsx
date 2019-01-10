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
    // controls,
    // ...props
  } = props;

  return (
    <React.Fragment>
      <hr />
      <Button
        paint="primary"
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
        }}
      />
    </React.Fragment>
  );
};
