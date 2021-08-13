import React, { useEffect, useContext } from 'react';
import Button from '@lskjs/button';

import { ModalContext } from '../index';

const TestTriggerGlobalModalHookWithUpdate = () => {
  const modal = useContext(ModalContext);
  let refModal;
  useEffect(() => {
    refModal = modal.create('test-5', { size: 'small' }, ({ Modal: M, methods, ref, id, size }) => {
      console.log(size);
      return (
        <>
          <M.Title>TestTriggerGlobalModalHookWithUpdate</M.Title>
          <M.Content>
            Пример контента
            <h2>Заголовок</h2>
          </M.Content>
          <M.Footer>
            <Button
              paint="primary"
              onClick={() => modal.update('test-5', { size: size === 'default' ? 'small' : 'default' })}
            >
              Обновить
            </Button>
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
      );
    });
  }, []);
  return (
    <Button paint="primary" onClick={() => refModal.current.open()}>
      Открыть TestTriggerGlobalModalHookWithUpdate
    </Button>
  );
};

export default TestTriggerGlobalModalHookWithUpdate;
