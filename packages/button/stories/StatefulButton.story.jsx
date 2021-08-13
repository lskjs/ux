import React from 'react';
import Story from '@lskjs/dev/Story';
import Button from '../Button';
import StatefulButton from './StatefulButton';

const promisedHandleSubmit = () => new Promise((resolve, reject) => {
  const headsOrTails = () => Math.random() > 0.5;
  const resolveOrReject = () => {
    const bool = headsOrTails();
    bool ? resolve() : reject();
  };
  setTimeout(resolveOrReject, 1000);
});

export default ({ storiesOf }) => {
  storiesOf('button/StatefulButton', module)
    .add('Default', () => (
      <Story>
        <StatefulButton
          componentClass={Button}
          onClick={promisedHandleSubmit}
          paint="primary"
          size="large"
        >
          Умная кнопочка
        </StatefulButton>
      </Story>
    ))
    .add('Loooooong', () => (
      <Story>
        <StatefulButton
          componentClass={Button}
          onClick={promisedHandleSubmit}
          paint="primary"
          size="large"
        >
        Очень много текста в умной промисифицированной кнопке
        </StatefulButton>
      </Story>
    ))
    .add('Custom text', () => (
      <Story>
        <StatefulButton
          componentClass={Button}
          onClick={promisedHandleSubmit}
          paint="primary"
          size="large"
          textProcessing="Загружаем..."
          textSuccess="Готово"
          textError="Не повезло"
        >
        Очень много текста
        </StatefulButton>
      </Story>
    ))
    .add('Custom content', () => (
      <Story>
        <StatefulButton
          componentClass={Button}
          onClick={promisedHandleSubmit}
          paint="primary"
          size="large"
          contentProcessing="Загружаем..."
          contentSuccess="Готово"
          contentError="Не повезло"
        >
        Очень много текста
        </StatefulButton>
      </Story>
    ));
};
