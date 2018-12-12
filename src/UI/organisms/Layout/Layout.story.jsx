import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import '../../../antd.g.css';

import Layout from './Layout';

module.exports = ({ storiesOf }) => (
  storiesOf('Layout', module)
    .add('Default', () => (
      <ThemeInjector>
        <Layout>
          123
        </Layout>
      </ThemeInjector>
    ))
    .add('Boxed', () => (
      <ThemeInjector>
        <Layout boxed>
          123
        </Layout>
      </ThemeInjector>
    ))
    .add('Fixed all', () => (
      <ThemeInjector>
        <Layout fixed={['sidebar', 'header']}>
          123
        </Layout>
      </ThemeInjector>
    ))
    .add('Fixed sidebar', () => (
      <ThemeInjector>
        <Layout fixed={['sidebar']}>
          123
        </Layout>
      </ThemeInjector>
    ))
    .add('Fixed header', () => (
      <ThemeInjector>
        <Layout fixed={['header']}>
          123
        </Layout>
      </ThemeInjector>
    ))
);
