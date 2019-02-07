import React from 'react';
import Story from '../Story';
import Grid, { Row, Col } from './Grid';

const demoStyle = {
  height: 100,
  background: 'red',
  color: 'white',
  fontSize: 36,
};

export default ({ storiesOf }) => {
  storiesOf('Grid', module)
    .add('Default', () => (
      <Story devtools>
        <Grid>
          <Grid.Row>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Story>
    ))
    .add('Vertical offsets', () => (
      <Story devtools>
        <Grid>
          <Grid.Row vertical>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
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
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
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
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
            </Grid.Col>
            <Grid.Col md={4}>
              <div style={demoStyle}>
                Grid.Col 4
              </div>
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
              <div style={demoStyle}>
                Col 4
              </div>
            </Col>
            <Col md={4}>
              <div style={demoStyle}>
                Col 4
              </div>
            </Col>
            <Col md={4}>
              <div style={demoStyle}>
                Col 4
              </div>
            </Col>
          </Row>
        </Grid>
      </Story>
    ));
};
