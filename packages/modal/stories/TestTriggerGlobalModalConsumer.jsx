import Button from '@lskjs/button';
import React from 'react';

import { ModalConsumer } from '../src/Global';

const TestTriggerGlobalModalConsumer = () => (
  <ModalConsumer>
    {(modal) => {
      let refModal;
      setTimeout(() => {
        refModal = modal.create('test-4', { size: 'small' }, ({ Modal: M, methods, ref, id }) => (
          <>
            <M.Title>TestTriggerGlobalModalConsumer</M.Title>
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
      }, 0);
      return (
        <Button paint="primary" onClick={() => refModal.current.open()}>
          Открыть TestTriggerGlobalModalConsumer
        </Button>
      );
    }}
  </ModalConsumer>
);

export default TestTriggerGlobalModalConsumer;
