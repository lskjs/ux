import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import StatusButton from '../StatusButton';

const PROMISE_TIMEOUT = 2000;

export default class TestPromise extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
    };
  }

  @autobind
  getData() {
    this.promise = new Promise((resolve, reject) => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.props.error ? reject() : resolve();
      }, PROMISE_TIMEOUT);
    });
    this.setState({ fetching: true });
  }

  @autobind
  handleClick() {
    this.getData();
  }

  render() {
    return (
      <StatusButton {...this.props} promise={this.promise} onClick={this.handleClick}>Click me!</StatusButton>
    );
  }
}
