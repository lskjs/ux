import React, { useContext } from 'react';
import Button from '@lskjs/button';

import { ModalContext } from '../index';

const TestManualGlobalModalHook = () => {
  const modal = useContext(ModalContext);
  setTimeout(() => {
    const refModal = modal.create('test-1', { size: 'small' }, ({ Modal: M, methods, ref, id }) => (
      <>
        <M.Title>TestManualGlobalModalHook</M.Title>
        <M.Content>
          Пример контента
          <h1>Заголовок</h1>
        </M.Content>
        <M.Footer>
          <Button paint="primary" onClick={() => ref.current.close()}>
            Закрыть
          </Button>
          <Button paint="danger" onClick={() => methods.remove(id)}>
            Удалить
          </Button>
        </M.Footer>
      </>
    ));
    if (refModal && refModal.current) {
      refModal.current.open();
    }
  }, 1);
  return '';
};

export default TestManualGlobalModalHook;
