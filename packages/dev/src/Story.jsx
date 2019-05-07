import polyfill from '@lskjs/utils/polyfill';
import React, { Component } from 'react';
import StoryDebug from './StoryDebug';
import Uapp from './Uapp';

polyfill();

class Story extends Component {
  componentDidMount() {
    window.story = this;
    if (window.parent) window.parent.story = this;
  }
  render() {
    const { children, locale, theme } = this.props;
    return (
      <Uapp locale={locale} theme={theme}>
        <StoryDebug theme={theme}>
          {children}
        </StoryDebug>
      </Uapp>
    );
  }
}

export default Story;
