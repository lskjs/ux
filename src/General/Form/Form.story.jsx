import React from 'react';
import Form from './Form';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Form', module)
    .add('Sample 1', () => (
      <Form
        fields={[
          'firstname',
          'lastname',
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Sample 2', () => (
      <Form
        fields={[
          {
            name: 'firstname',
            title: 'Имя',
          },
          {
            name: 'lastname',
            title: 'Фамилия',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Sample 2', () => (
      <Form
        fields={[
          {
            name: 'firstname',
            title: 'Имя',
          },
          {
            name: 'lastname',
            title: 'Фамилия',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Sample 3', () => (
      <Form
        fields={[
          {
            name: 'firstname',
            title: 'Имя',
            icon: 'И',
            placeholder: 'Например, Василий',
          },
          {
            name: 'lastname',
            title: 'Фамилия',
            icon: 'Ф',
            placeholder: 'Например, Уткин',
            help: 'Фамилия и отчество (если есть)',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Sample 4', () => (
      <Form
        fields={[
          {
            name: 'firstname',
            title: 'Имя',
            value: 'Игорь',
          },
          {
            name: 'lastname',
            title: 'Фамилия',
            value: 'Суворов',
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Sample 5', () => (
      <Form
        fields={[
          {
            name: 'email',
            title: 'Email',
            control: {
              placeholder: 'Например, utkin@mail.ru',
              type: 'email',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            control: {
              type: 'password',
            },
          },
          {
            name: 'profile.fio',
            title: 'ФИО',
            control: {
              placeholder: 'Например, Василий',
            },
          },
          {
            name: 'profile.age',
            title: 'Возраст',
            control: {
              placeholder: 'Например, 55',
              type: 'number',
            },
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ))
    .add('Sample Validation', () => (
      <Form
        validators={{
          email: {
            presence: {
              message: 'Поле не должно быть пустым',
            },
            email: {
              message: 'Введите настоящий адрес почты.',
            },
          },
          password: {
            presence: {
              message: 'Поле не должно быть пустым',
            },
            length: {
              minimum: 6,
              message: 'Пароль должен быть больше 6 символов.',
            },
          },
        }}
        fields={[
          {
            name: 'email',
            title: 'Электронная почта',
            icon: 'Э',
            control: {
              type: 'text',
              placeholder: 'Почта',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            icon: 'П',
            control: {
              type: 'password',
              placeholder: 'Пароль',
            },
          },
        ]}
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
        onError={action('onError')}
      />
    ))
    .add('Register', () => (
      <Form
        fields={[
          {
            name: 'name',
            title: 'Имя',
            control: {
              placeholder: 'Например, Василий',
            },
          },
          {
            name: 'password',
            title: 'Пароль',
            control: {
              type: 'password',
            },
          },
          {
            name: 'email',
            title: 'Email',
            control: {
              placeholder: 'Например, utkin@mail.ru',
              type: 'email',
            },
          },
        ]}
        submitButton="Регистрация"
        onChange={action('onChange')}
        onSubmit={action('onSubmit')}
      />
    ));
};
