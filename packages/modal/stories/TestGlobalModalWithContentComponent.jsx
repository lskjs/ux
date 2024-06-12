/* eslint-disable react/prop-types */
import Button from '@lskjs/button';
import React, { useContext, useEffect, useState } from 'react';

import { ModalContext } from '../src/Global';

const ContentComponent = ({ Modal, methods, id, view }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Modal.Title>TestGlobalModalWithContentComponent </Modal.Title>
      <Modal.Content>
        Пример контента
        <h1>Заголовок</h1>
        <h3>VIEW: {view}</h3>
        <b>Count: {count}</b>
        <Button onClick={() => setCount((prev) => prev + 1)}>Increase count</Button>
      </Modal.Content>
      <Modal.Footer>
        <Button paint="primary" onClick={() => methods.close(id)}>
          Закрыть
        </Button>
        <Button paint="danger" onClick={() => methods.remove(id)}>
          Удалить
        </Button>
      </Modal.Footer>
    </>
  );
};

const TestGlobalModalWithContentComponent = () => {
  const modal = useContext(ModalContext);
  useEffect(() => {
    modal.create('test-component', { size: 'small' }, ({ ref, ...props }) => (
      <ContentComponent modalRef={ref} {...props} />
    ));
  }, []);
  return (
    <div>
      <Button
        onClick={() => {
          modal.open('test-component', { view: 'normal' });
        }}
      >
        Change VIEW to NORMAL and OPEN
      </Button>
      <br />
      <Button
        onClick={() => {
          modal.open('test-component', { view: 'alternative' });
        }}
      >
        Change VIEW to ALTERNATIVE and OPEN
      </Button>
    </div>
  );
};

export default TestGlobalModalWithContentComponent;
