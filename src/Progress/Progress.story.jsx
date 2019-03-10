import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Story from '../Story';
import Progress from './Progress';

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{
        padding: 100,
        background: '#eee',
        border: '1px solid black',
        position: 'relative',
    }}>
        <div style={{
          padding: 100,
          background: '#ccc',
          border: '1px solid black',
          position: 'relative',
      }}>
          {children}
        </div>
      </div>
    );
  }
}

export default ({ storiesOf }) => (
  storiesOf('Progress', module)
    .add('default', () => (
      <Story>
        <Wrapper>
          <Progress />
        </Wrapper>
      </Story>
    ))
    .add('50%', () => (
      <Story>
        <Wrapper>
          <Progress value={50} />
        </Wrapper>
      </Story>
    ))
    .add('isLoading', () => (
      <Story>
        <Wrapper>
          <Progress isLoading />
        </Wrapper>
      </Story>
    ))
    .add('isLoading from 30', () => (
      <Story>
        <Wrapper>
          <Progress value={30} isLoading />
        </Wrapper>
      </Story>
    ))
    .add('deep wrapping', () => (
      <Story>
        <Wrapper>
          <div>
            aaaaa
            <div>
              bbbb
              <div>
                ccccc
                <div>
                  dddd
                  <Progress value={30} isLoading />
                  wwwwww
                </div>
                xxxxxx
              </div>
              yyyyy
            </div>
            zzzzz
          </div>
        </Wrapper>
      </Story>
    ))
    .add('isLoading global', () => (
      <Story>
        <Wrapper>
          <Progress isLoading global />
        </Wrapper>
      </Story>
    ))
    .add('custom speed', () => (
      <Story>
        <Wrapper>
          <Progress value={30} speed={10} isLoading global />
        </Wrapper>
      </Story>
    ))
    .add('custom color', () => (
      <Story>
        <Wrapper>
          <Progress value={30} speed={10} isLoading global color="#0000ff" />
        </Wrapper>
      </Story>
    ))
    .add('custom height', () => (
      <Story>
        <Wrapper>
          <Progress value={10} speed={5} isLoading height={7} />
        </Wrapper>
      </Story>
    ))
);

