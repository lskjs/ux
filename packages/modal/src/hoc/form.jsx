/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import If from 'react-if';
import { Form, Field } from 'formik';
import Button from '@lskjs/button';
import ButtonGroup from '@lskjs/button/ButtonGroup';
import createForm from '@lskjs/form/createForm';
import FormSubmitButton from '@lskjs/form/FormSubmitButton';
import FormSubmitError from '@lskjs/form/FormSubmitError';
import T from '@lskjs/ui/T';
import DefaultModal from '../Modal2';
// import { hocFooter } from '../Modal2.styles';

const createView = ({ Modal, controlsOrder }) => ({
  title, subtitle, image, content, control, errors, status,
}) => (
  <Form>
    {title && <Modal.Title>{title}</Modal.Title>}
    {subtitle && <Modal.Subtitle>{subtitle}</Modal.Subtitle>}
    {image && <Modal.Image src={image} />}
    {content && <Modal.Content>{content}</Modal.Content>}
    <Modal.Content>
      {controlsOrder.map(controlName => (
        <Field key={controlName} {...control(controlName)} />
      ))}
    </Modal.Content>
    <Modal.Footer style={{ flexDirection: 'column' }}>
      <If condition={Object.keys(errors).length}>
        <FormSubmitError
          errors={errors}
        />
      </If>
      <ButtonGroup padded>
        <FormSubmitButton
          paint="primary"
          status={status}
        >
          <T name="common.submit" />
        </FormSubmitButton>
        <Modal.Trigger>
          <Button
            paint="danger"
            view="text"
          >
            <T name="common.cancel" />
          </Button>
        </Modal.Trigger>
      </ButtonGroup>
    </Modal.Footer>
  </Form>
);

// / Modal = ,
export default ({
  Modal = DefaultModal,
  controls,
  controlsOrder = Object.keys(controls),
  view = createView({ Modal, controls, controlsOrder }),

  ...params
} = {}) => {
  const ModalForm = createForm({
    view,
    controls,
  });

  return ({
    ref = React.createRef(), onSubmit, children, inner, ...props
  }) => {
    return (
      <Modal
        ref={ref}
        {...params}
        {...props}
        trigger={children}
      >
        <ModalForm
          {...params}
          {...props}
          onSubmit={async (...args) => {
            await onSubmit(...args);
            ref.current.close();
          }}
        />
      </Modal>
    );
  }
};

