import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ThemeInjector from './ThemeInjector';
import './antd.g.css';
import './bootstrap.g.css';
import Box from './UI/molecules/Box';
import UserBoxFooter from './UI/molecules/UserBoxFooter';


module.exports = ({ storiesOf }) => (
  storiesOf('UserPage', module)
    .add('Default', () => (
      <ThemeInjector>
        <Container>
          <Box image="https://picsum.photos/1280/720/?random" style={{ height: 380 }}>
            <UserBoxFooter image="https://picsum.photos/200" name="Имя Фамилия" position="Техничесий дизайнер" />
          </Box>
          <Row style={{ paddingTop: 30 }}>
            <Col md={6} style={{ paddingBottom: 30 }}>
              <Box padded>
                <Box.Header>
                  О себе
                </Box.Header>
                <Box.Body>
                  Тут будет информация о юзере
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, quasi nam.
                  Nisi assumenda nulla consequatur perferendis, voluptatum,
                  laborum provident eos amet quos, ullam possimus facilis quasi?
                  Magnam optio voluptates ipsam.
                </Box.Body>
              </Box>
            </Col>
            <Col md={6} style={{ paddingBottom: 30 }}>
              <Box padded>
                <Box.Header>
                  Интересы
                </Box.Header>
                <Box.Body>
                  Тут будут интересы юзера
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, quasi nam.
                  Nisi assumenda nulla consequatur perferendis, voluptatum,
                  laborum provident eos amet quos, ullam possimus facilis quasi?
                  Magnam optio voluptates ipsam.
                </Box.Body>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col md={6} style={{ paddingBottom: 30 }}>
              <Box padded>
                <Box.Header>
                  Предыдущая работа
                </Box.Header>
                <Box.Body>
                  Тут будет информация о предыдущей работе
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, quasi nam.
                  Nisi assumenda nulla consequatur perferendis, voluptatum,
                  laborum provident eos amet quos, ullam possimus facilis quasi?
                  Magnam optio voluptates ipsam.
                </Box.Body>
              </Box>
            </Col>
          </Row>
        </Container>
      </ThemeInjector>
    ))
);
