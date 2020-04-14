## Tutorial

### 0. Что нужно установить перед началом

* **IDE - VS Code/Sublime/WebStorm/Atom**


* **Node.js, установить, проверить версию**


https://nodejs.org/ru/ -- скачать тут

https://medium.com/devschacht/node-hero-chapter-1-239f7afeb1d1 -- что такое нода.

Проверяем версию: 
```sh
node -v
```
* **npm -- https://www.npmjs.com/ -- менеджер пакетов.**

Для установки пишем в консоль:
```sh
npm i -g npx
npm -v
```

### 1. Как сделать лендинг на CRA

В консоли разработчика пишем:

```sh
npx create-react-app landing
cd landing
npm start
```
#### Как это работает? 

* Построение лендинга происходит с использованием фреймворка [React](https://ru.reactjs.org/) 

Чтобы установить React в свой проект нужно написать в файле формата `.jsx`
```sh
import React from 'react";
```

Здесь вы можете посмотреть [мини-уроки введение в React](https://learn.javascript.ru/screencast/react)


* Для инициализации используется [create-react-app](https://github.com/facebook/create-react-app)

*Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.
Когда ваше приложение готово к развёртыванию в продакшене, запуск команды npm run build создаст оптимизированную сборку вашего приложения в папке build. Вы можете узнать больше о Create React App из его README и его пользовательского руководства.*
[Подробнее >тут<.](https://ru.reactjs.org/docs/create-a-new-react-app.html)

Посмотреть реализацию  Step 1 можно [> тут <](https://github.com/lskjs/tutorial/tree/steps/step1)

### 2. Как добавить кнопку (@lskjs/button) на CRA лендинг

Подключаем необходимые пакеты:
 
```sh
npm i @lskjs/button
npm i lodash react-icons2
```
В нужном файле импортируем и используем кнопку:
```jsx
import Button from "@lskjs/button";
        
<Button paint="primary">Primary</Button>
```

Попробовать код можно в [ветке step2](https://github.com/lskjs/tutorial/tree/steps/step2). 

Сравнить изменения с предыдущего шага можно [> тут <](https://github.com/lskjs/tutorial/compare/steps/step1...steps/step2)


### 3. Как создать форму (@lskjs/form) на CRA

```
npm i @lskjs/form
npm i react-if antd formik @lskjs/scroll @lskjs/ui
```

Создаём файл для визуализации формы `FormView.jsx`
```jsx
import React from 'react';
import Button from '@lskjs/button';
import { Form, FastField } from 'formik';

const FormView = ({
  control, // функция вызова контрола
  handleSubmit, // функция отправки формы по нажатию на кнопку
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FastField {...control('input')} />
      <FastField {...control('select')} />
      <Button paint="primary" type="submit">Отправить</Button>
    </Form>
  );
};

export default FormView;
```

Создаём файл для инициализации формы `Form.js` используя файл с визуальной частью `FormView`
```js
import createForm from '@lskjs/form/createForm';
import Input from '@lskjs/form/controls/Input';
import Select from '@lskjs/form/controls/Select';
import FormView from './FormView';

const Form = createForm({
  view: FormView, // Указываем компонент для визуализации
  controls: { // Описываем элементы, используемые в форме
    input: { // Название поля в форме
      title: 'Текстовое поле',
      placeholder: 'Введите текст',
      component: Input, // Указываем нужный компонент котрола формы
    },
    select: {
      title: 'Выбор варианта',
      placeholder: 'Выберите вариант',
      component: Select,
      options: [
        {
          value: 'two',
          title: 'Два',
        },
        {
          value: 'one',
          title: 'Один',
        },
        {
          value: 'three',
          title: 'Три',
        },
        {
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});

export default Form;
```

Используем созданную форму
```jsx
import Form from './Form';

<Form
  onSubmit={(values) => {
    alert(JSON.stringify(values, null, 2));
  }}
/>
```

Попробовать код можно в [ветке step3](https://github.com/lskjs/tutorial/tree/steps/step3). Сравнить изменения с предыдущего шага можно [> тут <](https://github.com/lskjs/tutorial/compare/steps/step2...steps/step3)

### 4. Как добавить мультиязычность (@lskjs/i18) на CRA

```
npm i @lskjs/i18
npm i mobx mobx-react
```

Создаём файл инициализации `i18.js`
```js
import I18 from '@lskjs/i18';

const i18 = new I18({ // Создаём экземпляр класса I18.
  config: { // Конфигурируем модуль i18next. См. офф. документацию: https://www.i18next.com/overview/configuration-options
    locales: ['en', 'ru'], // Перечисляем используемые языки
    resources: { // Указываем переводы для каждого из языка
      en: {
        translation: {
          helloWorld: 'Hello World', // Например так
          button: {
            changeLanguage: 'Change language', // Или так, используя вложенность
          },
        },
      },
      ru: {
        translation: {
          helloWorld: 'Привет Мир',
          button: {
            changeLanguage: 'Сменить язык',
          },
        },
      },
    },
  },
});

i18.init({ // Инициализируем модуль
  lng: 'ru' // Указываем какой язык будет использоваться по-умолчанию
});

export default i18;
```

В `App.js` импортируем i18 модуль и передаём его в провайдер [MobX](https://github.com/mobxjs/mobx)
```js
import { Provider } from 'mobx-react';
import i18 from './i18';

function App() {
  return (
    <Provider i18={i18}> {/* Прокидывает модуль i18 сквозь весь проект */}
      ...
    </Provider>
  );
}
```

Создадим новый компонент для примера работы переводов `Translate.jsx`
```js
import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';

function Translate({ i18 }) {
  return (
    <div>
      <h1>{i18.t('helloWorld')}</h1> {/* Функция t для использования ключей переводов */}
      <Button
        paint="primary"
        onClick={() => {
          const nextLocale = i18.locale === 'ru' ? 'en' : 'ru'; // В i18.locale содержится текущий язык
          i18.setLocale(nextLocale); // i18.setLocale функция, меняющая язык на переданный
        }}
      >
        <T name="button.changeLanguage" /> {/* Или компонент <T> для использования ключей переводов */}
      </Button>
    </div>
  );
}

export default inject('i18')(observer(Translate)); // "Инжектим" i18 из провайдера и подписываемся на его изменения
```

Не забудьте импортировать созданный выше компонент в `App.js` и обозначить глобальные переменные для работы модуля i18.

В `index.js` добавляем следующие строки после импортов
```js
global.__DEV__ = process.env.NODE_ENV === 'development';
```

В `public/index.html` добавляем секцию `<script>` для константных глобальных переменных
```html
<script>
  const __CLIENT__ = true;
  const __SERVER__ = false;
</script>
```

Попробовать код можно в [ветке step4](https://github.com/lskjs/tutorial/tree/steps/step4). Сравнить изменения с предыдущего шага можно [> тут <](https://github.com/lskjs/tutorial/compare/steps/step3...steps/step4)

### 4.1. Упрощаем работу с мультиязычностью (@lskjs/build-locales) на CRA

В предыдущем шаге было видно, как мы описыавем переводы JS объектами в конфигурировании i18,
но можно данный шаг сделать более удобным!


```
npm i @lskjs/build-locales
```

Содаём в корне проекта файл `.lskjs.js` со следующим содержимым
```js
module.exports = {
  i18: {
    // Здесь будет ссылка на Google Таблицу подготовленную для работы с переводами
    url: 'https://docs.google.com/spreadsheets/d/1m1PXq0FIhFefqIxd3WTPugqMTcKoHsPuU6SlmnxG1Pw/edit#gid=0',
  },
};
```

Создаём файл `build-locales.sh` в директории `scripts` со следующим содержимым
```sh
#!/usr/bin/env bash

LOCALES_LINK=`node -e "console.log(require('./.lskjs.js').i18.url)"`
LOCALES_DIST="./src/translations"

echo "$LOCALES_LINK => $LOCALES_DIST"

rm -rf $LOCALES_DIST && \
node node_modules/@lskjs/build-locales/bin/build-locales --locales ru,en --link $LOCALES_LINK --dist $LOCALES_DIST && \
echo "done"
```

Запускаем созданный скрипт коммандой `sh ./scripts/build-locales.sh`.
После выполнения будут созданы 2 json файла в директории `src/translations` из таблицы указанной в `.lskjs.js`.

Изменим существующую конфигурацию модуля `i18.js` заменив объекты переводов на json файлы
```js
// ...
import enResource from './translations/en.json';
import ruResource from './translations/ru.json';

const i18 = new I18({
  config: {
    // ...
    resources: {
      en: {
        translation: enResource,
      },
      ru: {
        translation: ruResource,
      },
    },
  },
});
// ...
```

Попробовать код можно в [ветке step4.1](https://github.com/lskjs/tutorial/tree/steps/step4.1). Сравнить изменения с предыдущего шага можно [> тут <](https://github.com/lskjs/tutorial/compare/steps/step4...steps/step4.1)