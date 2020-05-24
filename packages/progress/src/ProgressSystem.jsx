import React, { Component } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Progress from './Progress';

export default class ProgressSystem extends Component {
  state = {
    value: 0,
    isLoading: 0,
  };

  start() {
    this.setState({
      value: 30,
      isLoading: 1,
    });
  }
  finish() {
    this.setState({
      value: 100,
      isLoading: 0,
    });
  }

  render() {
    const { value, isLoading = false } = this.state;
    return <Progress value={value} speed={10} isLoading={isLoading} global />;
  }
}
