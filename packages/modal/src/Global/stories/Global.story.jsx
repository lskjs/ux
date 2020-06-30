import React from 'react';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';
import { ModalProvider, ModalConsumer } from '../index';

import TestAutoGlobalModalHook from './TestAutoGlobalModalHook';
import TestManualGlobalModalHook from './TestManualGlobalModalHook';
import TestTriggerGlobalModalHook from './TestTriggerGlobalModalHook';
import TestTriggerGlobalModalConsumer from './TestTriggerGlobalModalConsumer';
import TestTriggerGlobalModalHookWithUpdate from './TestTriggerGlobalModalHookWithUpdate';

export default ({ storiesOf }) =>
  storiesOf('modal/Global', module)
    .add('1. Global modal auto', () => (
      <Story>
        <ModalProvider>
          <TestAutoGlobalModalHook />
        </ModalProvider>
      </Story>
    ))
    .add('2. Global modal manual', () => (
      <Story>
        <ModalProvider>
          <TestManualGlobalModalHook />
        </ModalProvider>
      </Story>
    ))
    .add('3. Global modals triggers', () => (
      <Story>
        <ModalProvider>
          <TestTriggerGlobalModalHook />
          <TestTriggerGlobalModalConsumer />
          <TestTriggerGlobalModalHookWithUpdate />
          <ModalConsumer>
            {modal => (
              <div style={{ padding: '20px 0' }}>
                <Button onClick={() => modal.open('test-3')}>Открыть test-3</Button>
                <br />
                <Button onClick={() => modal.open('test-4')}>Открыть test-4</Button>
                <br />
                <Button onClick={() => modal.open('test-5')}>Открыть test-5</Button>
                <br />
                <Button
                  onClick={() => {
                    console.log(modal);
                  }}
                >
                  Посмотреть `modal` в консоле
                </Button>
              </div>
            )}
          </ModalConsumer>
        </ModalProvider>
      </Story>
    ));
