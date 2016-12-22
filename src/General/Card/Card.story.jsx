import Card from './Card'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Card', module)
    .add('Inner', () => (
      <Card>
        Some inner
      </Card>
    ))
    .add('Inner wrap', () => (
      <Card wrap>
        Sample content
      </Card>
    ))
    .add('Title', () => (
      <Card title='Sample title' wrap>
        Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
      </Card>
    ))
    .add('Inner wrap', () => (
      <Card wrap>
        Sample content
      </Card>
    ))
    .add('Separator', () => (
      <Card title='Sample title' wrap>
        Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
        <Card.Separator />
        Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
        <Card.Separator />
        Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
      </Card>
    ))
    .add('Content', () => (
      <Card title='Sample title'>
        <Card.Content>
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
          <Card.Separator />
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
          <Card.Separator />
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
        </Card.Content>
      </Card>
    ))
    .add('Content', () => (
      <Card title='Sample title'>
        <Card.Content>
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
          <Card.Separator />
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
          <Card.Separator />
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
        </Card.Content>
      </Card>
    ))
    .add('# Login Card', () => (
      <Card title='Войти'>
        <Card.Item icon={123}>
          Почта
          <input />
        </Card.Item>
        <Card.Item icon={354345}>
          Пароль
          <input />
        </Card.Item>
        <Card.Content>
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
          <Card.Separator />
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
          <Card.Separator />
          Sample text sample texte text sample texte text sample texte text sample texte text sample texte text sample texte text sample text
        </Card.Content>
      </Card>
    ))

    .add('Card.Photo', () => (
      <Card>
        <Card.Photo
          title='Игорь Суворов'
          image='https://pp.vk.me/c630321/v630321029/52c63/m2hCs6YCVjY.jpg'
        />
        <Card.Numbers>
          <Card.Number
            title='Рейтинг'
            value='1'
          />
          <Card.Number
            title='Рейтинг'
            value='123'
          />
          <Card.Number
            title='Рейтинг'
            value='33'
          />
        </Card.Numbers>
      </Card>
    ))

    .add('Have not', () => (
      <Card wrap>
        Впервые на Skill Branch?
        &nbsp;
        <a href='йцу'>
           Создайте аккаунт
        </a>
      </Card>
    ))

}
