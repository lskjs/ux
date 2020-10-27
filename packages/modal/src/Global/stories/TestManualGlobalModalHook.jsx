import React, { useEffect, useContext } from 'react';
import Button from '@lskjs/button';

import { ModalContext } from '../index';

const TestManualGlobalModalHook = () => {
  const modal = useContext(ModalContext);
  useEffect(() => {
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
    setTimeout(() => {
      if (refModal && refModal.current) {
        refModal.current.open();
      }
    }, 0);
  }, []);
  return '';
};

export default TestManualGlobalModalHook;
