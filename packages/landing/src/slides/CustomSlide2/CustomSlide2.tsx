import React from 'react';
import Grid from '@lskjs/grid';

const CustomSlider2 = () => (
  <div style={{ height: '100vh', padding: '24px 0' }}>
    <Grid.Container style={{ height: '100%' }}>
      <Grid.Row style={{ height: '100%' }}>
        <Grid.Col md={4} style={{ height: '100%' }}>
          <div style={{ backgroundColor: '#cdcdcd', height: '100%' }}>
            123
          </div>
        </Grid.Col>
        <Grid.Col md={4} style={{ height: '100%' }}>
          <div style={{ backgroundColor: '#cdcdcd', height: '100%' }}>
            456
          </div>
        </Grid.Col>
        <Grid.Col md={4} style={{ height: '100%' }}>
          <div style={{ backgroundColor: '#cdcdcd', height: '100%' }}>
            789
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </div>
);

export default CustomSlider2;
