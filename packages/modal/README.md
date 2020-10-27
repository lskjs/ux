# LSK ux subrepo: modal

## Глобальные модалки

### Как выглядит

Посмотрите демо: https://lskjs.github.io/ux/?path=/story/modal-global

### Как использовать

Как можно раньше в рендере инициализируем провайдер.

```jsx
import React from 'react';
import { ModalProvider }  from '@lskjs/modal/Global';

const Example = () => (
  <ModalProvider>
    ...
  </ModalProvider>
);
```

В нужном вам месте создайте модалку.

В виде хуков:
```js
import React, { useContext, useEffect } from 'react';
import { ModalContext } from '@lskjs/modal/Global';

const Example = () => {
  const modal = useContext(ModalContext);
  
  let modalRef;
  useEffect(() => {
    modalRef = modal.create('id-modal', { size: 'small' }, (
      <div>Контент</div>
    ));
  }, []);
  return (
    <button
      onClick={() => modalRef.current.open()}
    >
      Открыть модалку
    </button>
  );
};
```

В виде Consumer:
```js
import React from 'react';
import { ModalConsumer } from '@lskjs/modal/Global';

const Example = () => (
  <div>
    <ModalConsumer>
      {(modal) => {
        let modalRef;
        setTimeout(() => {
          modalRef = modal.create('id-modal', { size: 'small' }, (
            <div>Контент</div>
          ));
        }, 0);
        return (
          <button
            onClick={() => modalRef.current.open()}
          >
            Открыть модалку
          </button>
        );
      }}
    </ModalConsumer>
  </div>
);
```

Также контент можно передавать в виде callback'а:
```js
modal.create('id', props, ({
  id,
  ref,
  Modal,
  methods,
  ...props // Все пропсы переданные при создании модалки 2 аргументом
}) => (
  <>
    <Modal.Title>Заголовок</Modal.Title>
    <Modal.Content>Контент</Modal.Content>
  </>
))
```

### Методы контекста

| Метод  | Аргументы                                                                                                                 | Описание                                                                            |
|--------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| create | `id`: *string* - ID модалки<br>`props`: *Object* - Props для модалки<br>`content`: *ReactNode \| Function* - Тело модалки | Создание модалки.<br>Возвращает `ModalRef`.                                         |
| update | `id`: *string* - ID модалки<br>`props`: *Object* - Props для модалки<br>`content`: *ReactNode \| Function* - Тело модалки | Обновление модалки.<br>Возвращает `ModalRef`.                                       |
| list   |                                                                                                                           | Список существующих модалок.<br>Возвращает объект с `{ id: ModalCtx }`              |
| get    | `id`: *string* - ID модалки                                                                                               | Получение существующей модалки.<br>Возвращает объект `ModalCtx`                     |
| open   | `id`: *string* - ID модалки                                                                                               | Открытие существующей модалки.<br>Вовзращает `id`                                   |
| close  | `id`: *string* - ID модалки                                                                                               | Закрытие существующей модалки.<br>Возвращает `id`. Не удаляет инстанс модалки.      |
| remove | `id`: *string* - ID модалки                                                                                               | Удаление модалки. Возвращает `id`.<br>Открыть модалку с этим `id` больше не выйдет. |