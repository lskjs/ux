PhoneInput example:

Default country нужен для того, чтобы указывать страны по умолчанию
-  1 выбор флажка
-  2 по вводу первых цифр подставляется флажок
-  3 при открытии флага (или при нажатии на определенную букву) производится поиск по первой букве
-  4 есть ограничение по количеству вводимых цифр
-  5 автоматическая маска (пробелы, тире)

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import PhoneInput from './react-phone-input-2';
import Container from './PhoneInput.style';

const InputFormView = props => (
  <Form>
    <Field {...props.control('PhoneInput')} />
    <FormSubmit {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    PhoneInput: {
      title: 'PhoneInput',
      component: PhoneInput,
      defaultCountry: 'fr',
    },
  },
});


<Story>
  <InputForm />
</Story>
 ```

Поиск по странам

С помощью enableSearchField можно включить поля поиска по странам

Поиск по странам нужен для более удобного и быстрого ориентирования среди списка возможных стран.
-  1 выбор флажка
-  2 есть поле для поиска стран (можно искать по названию страны латинскими буквами, не обязательно с первой, высвечива все варианты, либо по цифрам)
-  2 в поле search есть возможность стереть все с помощью крестика
-  3 по вводу первых цифр подставляется флажок
```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import PhoneInput from './react-phone-input-2';
import Container from './PhoneInput.style';

const InputFormView = props => (
  <Form>
    <Field {...props.control('PhoneInput')} />
    <FormSubmit {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    PhoneInput: {
      title: 'PhoneInput',
      component: PhoneInput,
      defaultCountry: 'fr',
      enableSearchField: true,
    },
  },
});

<Story>
  <InputForm />
</Story>
```

Поиск по странам

Если нам нужные только конкретные страны, то мы можем выбрать их свойством onlyCountries

Определенные страны нужны, чтобы указывать только нужные нам страны
1 выбор флажка
2 по вводу первых цифр подставляется флажок
3 при открытии флага, при нажатии на определенную букву, производится поиск по первой букве
4 есть ограничение по количеству вводимых цифр
5 автоматическая маска (пробелы, тире)

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import PhoneInput from './react-phone-input-2';
import Container from './PhoneInput.style';

const InputFormView = props => (
  <Form>
    <Field {...props.control('PhoneInput')} />
    <FormSubmit {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    PhoneInput: {
      title: 'PhoneInput',
      component: PhoneInput,
      defaultCountry: 'fr',
      onlyCountries: ['fr', 'at'],
    },
  },
});

<Story>
  <InputForm />
</Story>
```

Если нам нужны только определенные регионы у нас есть параметр regions

Пример региона показывает регионы определенных стран, в зависимости от того, что прописано кодом (например, страны Европы)
- 1 выбор флажка,
- 2 по вводу первых цифр подставляется флажок
- 3 при открытии флага, при нажатии на определенную букву, производится поиск по первой букве
- 4 есть ограничение по количеству вводимых цифр
- 5 автоматическая маска (пробелы, тире)
- 6 Регионы на выбор america europe, asia, oceania, africa

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import PhoneInput from './react-phone-input-2';
import Container from './PhoneInput.style';

const InputFormView = props => (
  <Form>
    <Field {...props.control('PhoneInput')} />
    <FormSubmit {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    PhoneInput: {
    title: 'PhoneInput',
      component: PhoneInput,
      defaultCountry: 'it',
      regions: 'europe',
    },
  },
});

<Story>
  <InputForm />
</Story>
```
