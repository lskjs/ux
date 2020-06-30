import React, { useContext } from 'react';
import Button from '@lskjs/button';

import { ModalContext } from '../index';

const TestTriggerGlobalModalHook = () => {
  const modal = useContext(ModalContext);
  let refModal;
  setTimeout(() => {
    refModal = modal.create('test-3', { size: 'small' }, ({ Modal: M, methods, ref, id }) => (
      <>
        <M.Title>TestTriggerGlobalModalHook</M.Title>
        <M.Content>
          Пример контента
          <h2>Заголовок</h2>
        </M.Content>
        <M.Footer>
          <Button paint="primary" onClick={() => ref.current.close()}>
            Закрыть
          </Button>
          <Button
            paint="danger"
            onClick={() => {
              methods.remove(id);
            }}
          >
            Удалить
          </Button>
        </M.Footer>
      </>
    ));
  }, 1);
  return (
    <Button paint="primary" onClick={() => refModal.current.open()}>
      Открыть TestTriggerGlobalModalHook
    </Button>
  );
};

export default TestTriggerGlobalModalHook;
