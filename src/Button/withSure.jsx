import React from 'react';
import DefaultModal from '../Modal2';
import Button from '../Button';
import T from '../T';

const withSure = ({ Modal = DefaultModal, ...params } = {}) => ({
  ref = React.createRef(), onSubmit, BtnText, children, inner, ...props
}) => (
  <React.Fragment>
    <Button
      paint="danger"
      view="text"
      onClick={async () => {
        ref.current.open();
      }}
    >
      {BtnText}
    </Button>
    <Modal
      size="small"
      ref={ref}
      footer={(
        <React.Fragment>
          <Button
            onClick={async () => {
              await onSubmit();
              ref.current.close();
            }}
          >
            <T name="common.yes" />
          </Button>
          <Modal.Trigger>
            <Button
              paint="danger"
              view="text"
            >
              <T name="common.no" />
            </Button>
          </Modal.Trigger>
        </React.Fragment>
      )}
      {...params}
      {...props}
      trigger={children}
      children={inner} // eslint-disable-line react/no-children-prop
    />
  </React.Fragment>
);

export default withSure;
