import React from 'react';
import { Form, Field } from 'formik';
import DefaultModal from '../../Modal2';
import Button from '../../Button';
import createForm from '../../Form2/createForm';
import Submit from '../../Form2/FormSubmit';
import T from '../../T';
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
    <Modal.Footer>
      <Submit
        paint="primary"
        errors={errors}
        status={status}
      >
        <T name="common.submit" />
      </Submit>
      <Modal.Trigger>
        <Button
          paint="danger"
          view="text"
        >
          <T name="common.cancel" />
        </Button>
      </Modal.Trigger>
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
  }) => (
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
};

