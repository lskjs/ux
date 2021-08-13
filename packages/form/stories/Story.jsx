/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Provider } from 'mobx-react';
import Story from '@lskjs/dev/Story';

const i18 = {
  t(name) {
    const dic = {
      'form.name': 'Имя',
      'form.money': 'Деньги',
      'form.gender': 'Пол',
      'form.title': 'Название',
      'form.director': 'Директор',
      'form.users': 'Пользователи',
    };
    return dic[name] || name;
  },
};

export default ({ children, ...props }) => (
  <Story {...props}>
    <Provider i18={i18} uapp={{ i18, module: () => null }}>
      {children}
    </Provider>
  </Story>
);
