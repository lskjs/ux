import React from 'react';
import { Container } from 'reactstrap';
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
            <div style={{ height: 240 }} />
            <UserBoxFooter />
          </Box>
        </Container>
      </ThemeInjector>
    ))
);
