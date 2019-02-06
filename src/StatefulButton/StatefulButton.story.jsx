import React from 'react';
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
  storiesOf('Button/StatefulButton', module)
    .add('Default', () => (
      <StatefulButton
        componentClass={Button}
        onClick={promisedHandleSubmit}
        paint="primary"
        size="large"
      >
        Умная кнопочка
      </StatefulButton>
    ))
    .add('Loooooong', () => (
      <StatefulButton
        componentClass={Button}
        onClick={promisedHandleSubmit}
        paint="primary"
        size="large"
      >
       Очень много текста в умной промисифицированной кнопке
      </StatefulButton>
    ))
    .add('Custom text', () => (
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
    ))
    .add('Custom content', () => (
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
    ));
};
