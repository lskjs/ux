import polyfill from '@lskjs/utils/polyfill';
import React, { Component } from 'react';

import UappMock from '../UappMock';
import DevStory from './DevStory';

polyfill();

class UappStory extends Component {
  componentDidMount() {
    window.story = this;
    if (window.parent) window.parent.story = this;
  }
  render() {
    const { children, locale, theme, providers } = this.props;
    return (
      <UappMock locale={locale} theme={theme} {...providers}>
        <DevStory theme={theme}>{children}</DevStory>
      </UappMock>
    );
  }
}

export default UappStory;
