## Tutorial

### 0. Что нужно установить перед началом

* IDE - VS Code/Sublime/WebStorm/Atom


* node.js, установить, проверить версию


https://nodejs.org/ru/ -- скачать тут

https://medium.com/devschacht/node-hero-chapter-1-239f7afeb1d1 -- что такое нода.

Проверяем версию: 
```sh
node -v
```
* npm -- https://www.npmjs.com/ -- менеджер пакетов. 

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
