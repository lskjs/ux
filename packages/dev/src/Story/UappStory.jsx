import polyfill from '@lskjs/utils/polyfill';
import React, { Component } from 'react';
import DevStory from './DevStory';
import UappMock from '../UappMock';

polyfill();

class UappStory extends Component {
  componentDidMount() {
    window.story = this;
    if (window.parent) window.parent.story = this;
  }
  render() {
    const { children, locale, theme } = this.props;
    return (
      <UappMock locale={locale} theme={theme}>
        <DevStory theme={theme}>{children}</DevStory>
      </UappMock>
    );
  }
}

export default UappStory;
