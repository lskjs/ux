import Slide from './Slide'
import SlideInner from '../SlideInner/SlideInner'
import SlideInfoPic from '../SlideInfoPic/SlideInfoPic'
import SlideLink from '../SlideLink/SlideLink'
import Button from '../Button/Button'

// import { Row, Col, Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Abp/Slide', module)
    .add('Fullsize image', () => (
      <Slide
        full
        flex
        // image='//bootstrap-themes.github.io/marketing/assets/img/startup-1.jpg'
        image='https://pp.vk.me/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg'
      >
        <SlideInner
          title='Analytics on demand.'
          subtitle={`
            Stop installing bloated scripts that all track
            the exact same things. Install one that does everything.
          `}
        >
          <Button fill>
            Try it now
          </Button>
        </SlideInner>
      </Slide>
    ))
    .add('3 Items gray', () => (
      <Slide
        gray
        height='50'
      >
        <Row>
          <Col xs={12} md={4} sm={4}>
            <SlideInfoPic
              img='https://geekbrains.ru/index/img/icon_01.png'
              title={`
                  Практические задания
                  и разбор от преподавателя
                `}
            />
          </Col>
          <Col xs={12} md={4} sm={4}>
            <SlideInfoPic
              img='https://geekbrains.ru/index/img/icon_02.png'
              title={`
                Записи занятий.
                Вы всегда сможете освежить пройденный материал
              `}
            />
          </Col>
          <Col xs={12} md={4} sm={4}>
            <SlideInfoPic
              img='https://geekbrains.ru/index/img/icon_03.png'
              title={`
                Сертификаты.
                Получите подтверждение своих знаний
              `}
            />
          </Col>
        </Row>
      </Slide>
    ))
    .add('many items rounded', () => (
      <Slide fixed color='#fff'>
        <Col md={4} sm={6} xs={12}>
          <SlideLink
            link='#'
            img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/002/original/02basics.png?1441377718'
            title={`
              Основы программирования
            `}
            subtitle={`
              Онлайн-курс
            `}
          />
        </Col>
        <Col md={4} sm={6} xs={12}>
          <SlideLink
            link='asdasd.ru'
            img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/058/original/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png?1441377403'
            title={`
              Основы программирования
            `}
            subtitle={`
              Видеокурс
            `}
          />
        </Col>
        <Col md={4} sm={6} xs={12}>
          <SlideLink
            link='###'
            img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/065/original/65_large.png?1438088603'
            title={`
              PHP. Личный блог
            `}
            subtitle={`
              Личный блог PHP с нуля
            `}
          />
        </Col>
        <Col md={4} sm={6} xs={12}>
          <SlideLink
            link='123'
            img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/066/original/3.png?1438287494'
            title={'Git. Бычтрый старт'}
            subtitle={'Инструмент командной разработки'}
          />
        </Col>
        <Col md={4} sm={6} xs={12}>
          <SlideLink
            link='#'
            img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/067/original/24.png?1440658520'
            title={'С#. Мини-программы'}
            subtitle={'Создаем небольшие программы на Windows Forms'}
          />
        </Col>
        <Col md={4} sm={6} xs={12}>
          <SlideLink
            link='#'
            img='https://d1ywbwqv5var5z.cloudfront.net/courses/images/000/000/068/original/25.png?1440658587'
            title={'Objective C. Приложение TO-DO List'}
            subtitle={'Мобильное приложение для iPhone'}
          />
        </Col>
      </Slide>
    ))
}
