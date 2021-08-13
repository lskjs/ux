import Grid from '@lskjs/grid';
import React from 'react';

const CustomSlider1: React.FC = () => (
  <div style={{ height: '100vh', padding: '24px 0' }}>
    <Grid.Container style={{ height: '100%' }}>
      <Grid.Row style={{ height: '100%' }}>
        <Grid.Col md={6} style={{ height: '100%' }}>
          <div style={{ backgroundColor: '#cdcdcd', height: '100%' }}>123</div>
        </Grid.Col>
        <Grid.Col md={6} style={{ height: '100%' }}>
          <div style={{ backgroundColor: '#cdcdcd', height: '100%' }}>456</div>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </div>
);

export default CustomSlider1;
