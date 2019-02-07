import React from 'react';
import Story from '../Story';
import Grid, { Row, Col } from './Grid';

const demoStyle = {
  height: 100,
  background: 'red',
  color: 'white',
  fontSize: 36,
};
const Item = props => <div style={demoStyle} {...props} />;

export default ({ storiesOf }) => {
  storiesOf('Grid', module)
    .add('Default', () => (
      <Story devtools>
        <Grid>
          <Row>
            <Col lg={6} md={12}>
              <Item>
                lg-6 md-12
              </Item>
            </Col>
            <Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Col>
            <Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Col>
            <Col lg={2} md={4} xs={12}>
              <Item>
                lg-2 md-4 xs-12
              </Item>
            </Col>
          </Row>
        </Grid>
      </Story>
    ))
    .add('Vertical offsets', () => (
      <Story devtools>
        <Grid>
          <Row vertical>
            <Col lg={6} md={12}>
              <Item>
                lg-6 md-12
              </Item>
            </Col>
            <Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Col>
            <Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Col>
            <Col lg={2} md={4} xs={12}>
              <Item>
                lg-2 md-4 xs-12
              </Item>
            </Col>
          </Row>
        </Grid>
      </Story>
    ))
    .add('Custom gap', () => (
      <Story devtools>
        <Grid>
          <Row vertical gap={32}>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
          </Row>
        </Grid>
      </Story>
    ))
    .add('Vertical offsets with custom gap', () => (
      <Story devtools>
        <Grid>
          <Row vertical gap={6}>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
            <Col md={4}>
              <Item>
                Col 4
              </Item>
            </Col>
          </Row>
        </Grid>
      </Story>
    ))
    .add('without container', () => (
      <Story devtools>
        <Row>
          <Col md={4}>
            <Item>
              Col 4
            </Item>
          </Col>
          <Col md={4}>
            <Item>
              Col 4
            </Item>
          </Col>
          <Col md={4}>
            <Item>
              Col 4
            </Item>
          </Col>
        </Row>
      </Story>
    ));
};
