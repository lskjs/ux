import Form from './Form'

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
    .add('Sample 3' , () => (
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
    .add('Sample 4' , () => (
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
    .add('Sample 5' , () => (
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

}
