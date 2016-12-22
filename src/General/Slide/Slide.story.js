import Slide from './Slide'
// import SlideInner from '../SlideInner/SlideInner'
// import SlideInfoPic from '../SlideInfoPic/SlideInfoPic'
// import SlideLink from '../SlideLink/SlideLink'
// import Button from '../Button/Button'
import _ from 'lodash'
// import { Row, Col, Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Slide', module)
    .add('default', () => (
      <Slide>
        Default slide
      </Slide>
    ))
    .add('full color', () => (
      <Slide
        full
        color='#eee'
      >
        Default slide
      </Slide>
    ))
    .add('image', () => (
      <Slide
        full
        image='https://pp.vk.me/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg'
      >
        Try it now
      </Slide>
    ))
    .add('all directions', () => (
      <Slide
        full
        left='left'
        right='right'
        top='top'
        bottom='bottom'

        color='#ff644b'
        center
        style={{color: '#fff'}}
      >
        Content
      </Slide>
    ))
    .add('full error', () => (
      <Slide
        full
        color='#ff644b'
        center
        style={{color: '#fff'}}
        bottom='nginx'
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))

    .add('large content', () => (
      <Slide
        full
        left='left'
        right='right'
        top='top'
        bottom='bottom'

        color='#ff644b'
        center
        fixed
        style={{color: '#fff'}}
      >
        {_.repeat('Content ', 10000)}
      </Slide>
    ))
    .add('fixed', () => (
      <Slide
        full
        left='left'
        right='right'
        top={_.repeat('top ', 100)}
        bottom='bottom'
        center
        style={{color: '#fff'}}

        fixed
      >
        {_.repeat('Content ', 100)}
      </Slide>
    ))
    .add('overlay', () => (
      <Slide
        full
        overlay
        image="https://pp.vk.me/c636819/v636819936/3474a/g6I0ETjiQ4I.jpg"
        style={{
          color: '#fff'
        }}
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))
    .add('overlay 2', () => (
      <Slide
        full
        overlay='rgba(255,0,0,0.3)'
        image="https://pp.vk.me/c636819/v636819936/3474a/g6I0ETjiQ4I.jpg"
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))
    .add('video webm', () => (
      <Slide
        full
        overlay
        style={{
          color: '#fff'
        }}
        video='http://skill-branch.ru/video-background.webm'
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))
    .add('video webm2', () => (
      <Slide
        full
        overlay
        style={{
          color: '#fff'
        }}
        video='https://akg.moe/videoplayback.webm'
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))
    .add('video mp4', () => (
      <Slide
        full
        overlay
        style={{
          color: '#fff'
        }}
        video='http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4'
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))
    //
    // https://www.youtube.com/watch?v=c-shIOFYCRU
    // https://youtu.be/C8PYHjRj-zk
    // https://www.youtube.com/embed/C8PYHjRj-zk
    // https://youtu.be/c-shIOFYCRU?t=3m26s
    .add('video youtube1', () => (
      <Slide
        full
        overlay
        style={{
          color: '#fff'
        }}
        video='https://youtu.be/c-shIOFYCRU'
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))
    .add('video youtube2', () => (
      <Slide
        full
        overlay
        style={{
          color: '#fff'
        }}
        video='https://www.youtube.com/embed/W0LHTWG-UmQ'
      >
        <h1>502</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Наши специалисты знают о проблеме и уже решают её</p>
      </Slide>
    ))
    // .add('3 Items gray', () => (
    //   <Slide
    //     gray
    //     height='50'
    //   >
    //     <Row>
    //       <Col xs={12} md={4} sm={4}>
    //         <SlideInfoPic
    //           img='https://geekbrains.ru/index/img/icon_01.png'
    //           title={`
    //               Практические задания
    //               и разбор от преподавателя
    //             `}
    //         />
    //       </Col>
    //       <Col xs={12} md={4} sm={4}>
    //         <SlideInfoPic
    //           img='https://geekbrains.ru/index/img/icon_02.png'
    //           title={`
    //             Записи занятий.
    //             Вы всегда сможете освежить пройденный материал
    //           `}
    //         />
    //       </Col>
    //       <Col xs={12} md={4} sm={4}>
    //         <SlideInfoPic
    //           img='https://geekbrains.ru/index/img/icon_03.png'
    //           title={`
    //             Сертификаты.
    //             Получите подтверждение своих знаний
    //           `}
    //         />
    //       </Col>
    //     </Row>
    //   </Slide>
    // ))
    // .add('many items rounded', () => (
    //   <Slide fixed color='#fff'>
    //     <Col md={4} sm={6} xs={12}>
    //       <SlideLink
    //         link='#'
    //         img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/002/original/02basics.png?1441377718'
    //         title={`
    //           Основы программирования
    //         `}
    //         subtitle={`
    //           Онлайн-курс
    //         `}
    //       />
    //     </Col>
    //     <Col md={4} sm={6} xs={12}>
    //       <SlideLink
    //         link='asdasd.ru'
    //         img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/058/original/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png?1441377403'
    //         title={`
    //           Основы программирования
    //         `}
    //         subtitle={`
    //           Видеокурс
    //         `}
    //       />
    //     </Col>
    //     <Col md={4} sm={6} xs={12}>
    //       <SlideLink
    //         link='###'
    //         img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/065/original/65_large.png?1438088603'
    //         title={`
    //           PHP. Личный блог
    //         `}
    //         subtitle={`
    //           Личный блог PHP с нуля
    //         `}
    //       />
    //     </Col>
    //     <Col md={4} sm={6} xs={12}>
    //       <SlideLink
    //         link='123'
    //         img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/066/original/3.png?1438287494'
    //         title={'Git. Бычтрый старт'}
    //         subtitle={'Инструмент командной разработки'}
    //       />
    //     </Col>
    //     <Col md={4} sm={6} xs={12}>
    //       <SlideLink
    //         link='#'
    //         img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/067/original/24.png?1440658520'
    //         title={'С#. Мини-программы'}
    //         subtitle={'Создаем небольшие программы на Windows Forms'}
    //       />
    //     </Col>
    //     <Col md={4} sm={6} xs={12}>
    //       <SlideLink
    //         link='#'
    //         img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/068/original/25.png?1440658587'
    //         title={'Objective C. Приложение TO-DO List'}
    //         subtitle={'Мобильное приложение для iPhone'}
    //       />
    //     </Col>
    //   </Slide>
    // ))
}
