import React, { Component } from 'react';
import Button from '@lskjs/button';
import Collapse from './Collapse';
import Story from '@lskjs/dev/Story';

class Container extends Component {
  state = {
    show: false,  // eslint-disable-line
  }
  render() {
    const { type } = this.props;
    return (
      <div>
        <Collapse show={this.state.show} type={type}>
          <Button paint="primary">asd</Button>
        </Collapse>
        <Button
          paint="primary"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show === true ? 'Close' : 'Open'}
        </Button>
      </div>
    );
  }
}

export default ({ storiesOf }) => {
  storiesOf('ui/Collapse', module)
    .add('default', () => (
      <Story>
        <Container />
      </Story>
    ))
    .add('collapseUnmount', () => (
      <Story>
        <Container type="collapseUnmount" />
      </Story>
    ))
    .add('collapse', () => (
      <Story>
        <Container type="collapse" />
      </Story>
    ));
};
