import React from 'react';
import DEV from '../DEV';
import StatefulButton from '../StatefulButton';
import Button from '../Button';

let wasSubmiting = false;
let isSubmittingBefore = false;
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

  if (isSubmitting) {
    isSubmittingBefore = true;
  }
  if (!isSubmitting && isSubmittingBefore) {
    wasSubmiting = true;
    setTimeout(() => {
      wasSubmiting = false;
    }, 1000);
  }


  let state = null;
  if (isSubmitting) {
    state = 'processing';
  } else if (wasSubmiting) {
    if (errors) {
      state = 'error';
    } else {
      state = 'success';
    }
  }

  return (
    <React.Fragment>
      <hr />
      <StatefulButton
        componentClass={Button}
        paint="primary"

        state={state}

        onClick={handleSubmit}
      >
        Отправить
      </StatefulButton>
      <DEV
        json={{
          touched,
          isSubmitting,
          wasSubmiting,
          errors,
          values,
        }}
      />
    </React.Fragment>
  );
};
