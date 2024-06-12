/* eslint-disable react/jsx-wrap-multilines */
/* eslint import/no-extraneous-dependencies: 0 */
import { css } from '@emotion/core';
import autobind from '@lskjs/autobind';
import Button from '@lskjs/button';
import Story from '@lskjs/dev/Story/UappStory';
import Promise from 'bluebird';
import React, { Component, useContext, useState } from 'react';

import { ModalConsumer, ModalContext, ModalProvider } from '../src/Global';
import Modal from '../src/Modal2';
import StatefulModal from '../src/StatefulModal';

global.Promise = Promise;

const { Title, Subtitle, Description, Image, Help, Content, Footer, Trigger } = Modal;

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const style = css`
  background: red;
`;

class ModalWithRoutesExample extends Component {
  constructor(props) {
    super(props);
    this.modalInstance = React.createRef();
    this.state = {
      step: props.step,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.step !== this.state.step) {
      this.setState({ step: nextProps.step });
    }
  }
  @autobind
  getRoutes() {
    const ctx = this;
    return function (modal) {
      return [
        {
          path: '/',
          action: async (data) => {
            // eslint-disable-line
            const { pathname } = data;
            console.log('default');
            if (modal.hasPrerender(pathname)) {
              return modal.getPrerender(pathname);
            }
          },
          children: [
            {
              path: '/path1',
              action: async () => {
                console.log('path1');
                return {
                  title: 'Path 1 title',
                  settings: {
                    size: 'small',
                  },
                  height: 560,
                  content: (
                    <div>
                      This is exclusive content for Path 1 route
                      <div>
                        <button type="button" onClick={() => ctx.toPath('/path1/subPath', 'forward')}>
                          To subPath
                        </button>
                        <button type="button" onClick={() => ctx.toPath('/path1/100', 'forward')}>
                          To subPath with ID 100
                        </button>
                        <button type="button" onClick={() => ctx.toPath('/path1/200', 'forward')}>
                          To subPath with ID 200
                        </button>
                      </div>
                    </div>
                  ),
                };
              },
            },
            {
              path: '/path1/subPath',
              action: async () => ({
                title: 'Path 1 subPath title',
                onBack: () => modal.toPath('/path1', 'back'),
                settings: {
                  closable: false,
                  size: 'small',
                },
                height: 560,
                content: (
                  <div>
                    This is exclusive content for Path 1 subPath routes
                    <div>SUCH WOW!!</div>
                  </div>
                ),
              }),
            },
            {
              path: '/path1/:id',
              action: async (data) => {
                const { id } = data.params;
                return {
                  title: `Path 1 subPath with ${id} title`,
                  onBack: () => modal.toPath('/path1', 'back'),
                  settings: {
                    closable: false,
                    size: 'small',
                  },
                  height: 560,
                  content: (
                    <div>
                      {`This is exclusive content for Path 1 subPath with id ${id} routes`}
                      <div>SUCH WOW!!</div>
                      <div>
                        <b>How do you like Elon Musk?</b>
                      </div>
                    </div>
                  ),
                };
              },
            },
          ],
        },
      ];
    };
  }
  @autobind
  async toPath(...args) {
    this.modalInstance.current.toPath(...args);
  }
  @autobind
  async goBack() {
    this.modalInstance.current.goBack();
  }
  @autobind
  close() {
    this.modalInstance.current.modal.close();
  }
  render() {
    const { children, ...props } = this.props;
    return (
      <StatefulModal
        ref={this.modalInstance}
        {...props}
        routes={this.getRoutes()}
        preRenderRoutes={['/path1']}
        onOpen={(modal) => {
          modal.toPath('/path1');
        }}
      >
        {children}
      </StatefulModal>
    );
  }
}

export default {
  title: 'modal/Modal2',
};

export const EasyUse = () => (
  <Story>
    <Modal
      title="title"
      size="small"
      trigger="trigger"
      subtitle="subtitle"
      image="https://picsum.photos/1280/720/?random"
      content="content"
      footer="footer"
      onClose={() => console.log('onClose')}
      onOpen={() => console.log('onOpen')}
    />
  </Story>
);

export const DefaultVisible = () => (
  <Story>
    <Modal
      size="small"
      trigger="trigger"
      title="title"
      subtitle="subtitle"
      image="https://picsum.photos/1280/720/?random"
      content="content"
      footer="footer"
      defaultVisible
    />
  </Story>
);

export const Children = () => (
  <Story>
    <Modal size="small" defaultVisible>
      <Title>title</Title>
      <Subtitle>Subtitle</Subtitle>
      <Description>Description</Description>
      <Help>Help</Help>
      <Image src="https://picsum.photos/1280/720/?random" />
      <Content>content</Content>
      <Footer>
        <Trigger>
          <Button paint="primary">OK</Button>
        </Trigger>
      </Footer>
    </Modal>
  </Story>
);

export const ChildrenAsFunction = () => (
  <Story>
    <Modal size="small" defaultVisible>
      {({ modal }) => (
        <>
          <Title>title</Title>
          <Subtitle>Subtitle</Subtitle>
          <Description>Description</Description>
          <Help>Help</Help>
          <Image src="https://picsum.photos/1280/720/?random" />
          <Content>content</Content>
          <Footer>
            <Button paint="primary" onClick={() => modal.close()}>
              OK
            </Button>
          </Footer>
        </>
      )}
    </Modal>
  </Story>
);

export const ChildrenWithRandomDivWrappers = () => (
  <Story>
    <Modal size="small" defaultVisible>
      <Title>title</Title>
      <Subtitle>Subtitle</Subtitle>
      <div>
        <Description>Description</Description>
        <Help>Help</Help>
        <Image src="https://picsum.photos/1280/720/?random" />
        <Content>content</Content>
      </div>
      <Footer>
        <Button paint="primary">OK</Button>
      </Footer>
    </Modal>
  </Story>
);

export const LargeContent = () => (
  <Story>
    <Modal
      size="small"
      trigger="trigger"
      title="title"
      subtitle="subtitle"
      image="https://picsum.photos/1280/720/?random"
      content={
        <div>
          {['Title', 'Title2', 'Title3'].map((title) => (
            <React.Fragment key={title}>
              <h3>{title}</h3>
              <p>{lorem}</p>
            </React.Fragment>
          ))}
        </div>
      }
      footer="footer"
      defaultVisible
    />
  </Story>
);

export const ModalWithProps = () => (
  <Story>
    <Modal
      // title="asd"
      size="large"
      // children={<Button>asd</Button>}
      // subHeader={<Button>asd</Button>}
      // closeComponent={() => console.log('closeComponent')}
      trigger={<div>asd</div>}
      // color="#ff0000"
      className={style}
      closable={false}
      // closeOnBackdrop={false}
      // body="asd"
      // disabled
      // small
      // onEdit={() => console.log('onEdit')}
      onClose={() => console.log('onClose')}
      onOpen={() => console.log('onOpen')}
    >
      <Title>title</Title>
      <Subtitle>Subtitle</Subtitle>
      <div>
        <Description>Description</Description>
        <Help>Help</Help>
        <Image src="https://picsum.photos/1280/720/?random" />
        <Content>content</Content>
      </div>
      <Footer>
        <Button paint="primary">OK</Button>
      </Footer>
    </Modal>
  </Story>
);

export const NestedModals = () => (
  <Story>
    <Modal
      size="small"
      trigger="trigger"
      title="title"
      subtitle="subtitle"
      image="https://picsum.photos/1280/720/?random"
      content={
        <Modal
          size="large"
          trigger="trigger"
          title="title"
          subtitle="subtitle"
          image="https://picsum.photos/1280/720/?random"
          content={
            <Modal
              trigger="trigger"
              title="title"
              subtitle="subtitle"
              image="https://picsum.photos/1280/720/?random"
              content={
                <Modal
                  size="small"
                  trigger="trigger"
                  title="title"
                  subtitle="subtitle"
                  image="https://picsum.photos/1280/720/?random"
                  content={
                    <Modal
                      trigger="trigger"
                      title="title"
                      subtitle="subtitle"
                      image="https://picsum.photos/1280/720/?random"
                      content="nested"
                      footer="nested footer"
                      onClose={() => console.log('onClose')}
                      onOpen={() => console.log('onOpen')}
                    />
                  }
                  footer="nested footer"
                  onClose={() => console.log('onClose')}
                  onOpen={() => console.log('onOpen')}
                />
              }
              footer="nested footer"
              onClose={() => console.log('onClose')}
              onOpen={() => console.log('onOpen')}
            />
          }
          footer="nested footer"
          onClose={() => console.log('onClose')}
          onOpen={() => console.log('onOpen')}
        />
      }
      footer="footer"
      onClose={() => console.log('onClose')}
      onOpen={() => console.log('onOpen')}
    />
  </Story>
);

export const ModalWithRouter = () => (
  <Story>
    <ModalWithRoutesExample>Modal trigger</ModalWithRoutesExample>
  </Story>
);
