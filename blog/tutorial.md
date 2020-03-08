## Tutorial

### 1. Как сделать лендинг на CRA

```sh
npx create-react-app landing
cd landing
npm start
```

https://github.com/facebook/create-react-app
https://github.com/lskjs/tutorial/tree/steps/step1

### 2. Как добавить кнопку (@lskjs/button) на CRA лендинг

```sh
npm i @lskjs/button
npm i lodash react-icons2
```

```jsx
import Button from "@lskjs/button";
        
<Button paint="primary">Primary</Button>
```

Попробовать код можно в [ветке step2](https://github.com/lskjs/tutorial/tree/steps/step2). Сравнить изменения с предыдущего шага можно [> тут <](https://github.com/lskjs/tutorial/compare/steps/step1...steps/step2)


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