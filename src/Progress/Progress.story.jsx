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
    .add('method', () => (
      <Story>
        <Wrapper>
          <Progress value={10} speed={5} isLoading height={7} />
        </Wrapper>
      </Story>
    ))

    .add('variable props height', () => {
      // eslint-disable-next-line react/no-multi-comp
      class Increment extends Component {
        state = { global: true }
        toggleglobal = () => {
          console.log(this.state.global);
          this.setState({
            global: !this.state.global,
          });
        }
        render() {
          return (
            <div>
              <button onClick={this.toggleglobal} >global</button>
              <button>value ++ </button>
              <Progress value={this.state.value} speed={5} isLoading global={this.state.global} height={7} />
            </div>
          );
        }
      }
      return (
        <Story>
          <Wrapper>
            <Increment />
          </Wrapper>
        </Story>
      );
    })
);
// {this.state.global ? 'true' : 'false'}
