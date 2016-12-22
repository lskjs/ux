import Page from './Page'
// import SlideInner from '../SlideInner/SlideInner'
// import SlideInfoPic from '../SlideInfoPic/SlideInfoPic'
// import SlideLink from '../SlideLink/SlideLink'
// import Button from '../Button/Button'

// import { Row, Col, Button } from 'react-bootstrap'
// import { Row, Col } from 'react-bootstrap'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Page', module)
    .add('Page default no styles', () => (
      <Page>
        <h1>Какой-то заголовок</h1>
        <p>Какой-то абзац</p>
        <button>Какая-то кнопка</button>
      </Page>
    ))
    .add('Page Any bootstrap theme', () => (
      <Page
        // вариант 1 самый простой - подключаем booststap.theme.css
        // themeLink='https://bootswatch.com/journal/bootstrap.min.css'
      >
        <h1>Какой-то заголовок</h1>
        <p>Какой-то абзац</p>
        <button className='btn btn-default'>Default</button>
        <button className='btn btn-primary'>Primary</button>
        <button className='btn btn-success'>Success</button>
        <button className='btn btn-info'>Info</button>
        <button className='btn btn-warning'>Warning</button>
        <button className='btn btn-danger'>Danger</button>
      </Page>
    ))
    .add('Page custom font and color palette', () => (
      <Page
        mainFont='OpenSans'

        primaryColor=''
        accentColor=''

        grayColor=''
        whiteColor=''
        darkColor=''
      >
        <h1>Какой-то заголовок</h1>
        <p>Какой-то абзац</p>
        <button>Какая-то кнопка</button>

      </Page>
    ))
}
