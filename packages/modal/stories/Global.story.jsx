import Button from '@lskjs/button';
import Story from '@lskjs/dev/Story/UappStory';
import React from 'react';

import { ModalConsumer, ModalProvider } from '../src/Global';
import TestAutoGlobalModalHook from './TestAutoGlobalModalHook';
import TestGlobalModalWithContentComponent from './TestGlobalModalWithContentComponent';
import TestManualGlobalModalHook from './TestManualGlobalModalHook';
import TestTriggerGlobalModalConsumer from './TestTriggerGlobalModalConsumer';
import TestTriggerGlobalModalHook from './TestTriggerGlobalModalHook';
import TestTriggerGlobalModalHookWithUpdate from './TestTriggerGlobalModalHookWithUpdate';

export default {
  title: 'modal/Global',
};

export const Auto = () => (
  <Story>
    <ModalProvider>
      <TestAutoGlobalModalHook />
    </ModalProvider>
  </Story>
);

export const Manual = () => (
  <Story>
    <ModalProvider>
      <TestManualGlobalModalHook />
    </ModalProvider>
  </Story>
);

export const Triggers = () => (
  <Story>
    <ModalProvider>
      <TestTriggerGlobalModalHook />
      <TestTriggerGlobalModalConsumer />
      <TestTriggerGlobalModalHookWithUpdate />
      <ModalConsumer>
        {(modal) => (
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
);

export const ManualComponent = () => (
  <Story>
    <ModalProvider>
      <TestGlobalModalWithContentComponent />
    </ModalProvider>
  </Story>
);
