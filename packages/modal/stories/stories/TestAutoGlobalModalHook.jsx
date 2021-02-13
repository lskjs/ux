import React, { useEffect, useContext } from 'react';
import Button from '@lskjs/button';

import { ModalContext } from '../index';

const TestAutoGlobalModalHook = () => {
  const modal = useContext(ModalContext);
  useEffect(() => {
    modal.create('test-2', { size: 'small', defaultVisible: true }, ({ Modal: M, methods, ref, id }) => (
      <>
        <M.Title>TestAutoGlobalModalHook </M.Title>
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
  }, []);
  return '';
};

export default TestAutoGlobalModalHook;
