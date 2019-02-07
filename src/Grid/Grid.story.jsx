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
          <Grid.Row>
            <Grid.Col lg={6} md={12}>
              <Item>
                lg-6 md-12
              </Item>
            </Grid.Col>
            <Grid.Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Grid.Col>
            <Grid.Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Grid.Col>
            <Grid.Col lg={2} md={4} xs={12}>
              <Item>
                lg-2 md-4 xs-12
              </Item>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Story>
    ))
    .add('Vertical offsets', () => (
      <Story devtools>
        <Grid>
          <Grid.Row vertical>
            <Grid.Col lg={6} md={12}>
              <Item>
                lg-6 md-12
              </Item>
            </Grid.Col>
            <Grid.Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Grid.Col>
            <Grid.Col lg={2} md={4} xs={6}>
              <Item>
                lg-2 md-4 xs-6
              </Item>
            </Grid.Col>
            <Grid.Col lg={2} md={4} xs={12}>
              <Item>
                lg-2 md-4 xs-12
              </Item>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Story>
    ))
    .add('Custom gap', () => (
      <Story devtools>
        <Grid>
          <Grid.Row vertical gap={32}>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Story>
    ))
    .add('Vertical offsets with custom gap', () => (
      <Story devtools>
        <Grid>
          <Grid.Row vertical gap={6}>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
            <Grid.Col md={4}>
              <Item>
                Grid.Col 4
              </Item>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Story>
    ))
    .add('Destructing imports', () => (
      <Story devtools>
        <Grid>
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
        </Grid>
      </Story>
    ));
};
