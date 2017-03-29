import React from 'react'; //eslint-disable-line
import StatusButton from './StatusButton';
import TestPromise from './test/TestPromise';

module.exports = ({ storiesOf }) => {
  return storiesOf('StatusButton', module)
    .addHtml(<link rel="stylesheet" type="text/css" href="https://yastatic.net/bootstrap/3.3.6/css/bootstrap.min.css" />)
    .add('Default', () => (
      <StatusButton>Status Button</StatusButton>
    ))
    .add('Large', () => (
      <StatusButton bsSize="large">Status Button</StatusButton>
    ))
    .add('Loading', () => (
      <StatusButton status="loading">Click me!</StatusButton>
    ))
    .add('Success', () => (
      <StatusButton status="success">Click me!</StatusButton>
    ))
    .add('Error', () => (
      <StatusButton status="error">Click me!</StatusButton>
    ))
    .add('Promise success', () => (
      <TestPromise />
    ))
    .add('Promise error', () => (
      <TestPromise error />
    ))
    .add('Large Promise success', () => (
      <TestPromise bsSize="large" />
    ))
    .add('Large Promise error', () => (
      <TestPromise bsSize="large" error />
    ));
};
