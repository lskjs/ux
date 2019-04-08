/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
import DefaultModal from '../Modal2';

// / Modal = ,
export default ({ Modal = DefaultModal, ...params } = {}) => ({
  ref = React.createRef(), onSubmit, children, inner, ...props
}) => (
  <Modal
    size="small"
    ref={ref}
    footer={(
      <React.Fragment>
        <Button
          paint="primary"
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
);
