import React from 'react';
import Modal from './Modal';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Modal', module)
    .addHtml(<link rel="stylesheet" type="text/css" href="https://yastatic.net/bootstrap/3.3.6/css/bootstrap.min.css" />)
    .add('1. Widthout wrap', () => (
      <Modal>
        <Modal.Open>
          <button>Open modal</button>
        </Modal.Open>
        <Modal.Content>
          Sample content
        </Modal.Content>
      </Modal>
    ))
    .add('2. With title and wrap', () => (
      <Modal>
        <Modal.Open>
          <button>Open modal</button>
        </Modal.Open>
        <Modal.Content title="Sample title">
          Sample content
        </Modal.Content>
      </Modal>
    ))
    .add('3. Trigger close', () => (
      <Modal>
        <Modal.Trigger>
          <button>Trigger modal</button>
        </Modal.Trigger>
        <Modal.Content body>
          Sample content, and &nbsp;
          <Modal.Trigger type='close'>
            <a>close</a>
          </Modal.Trigger>
        </Modal.Content>
      </Modal>
    ))
    .add('4. Full control', () => (
      <Modal>
        <Modal.Open>
          <button>Open modal</button>
        </Modal.Open>
        <Modal.Content>
          <Modal.Header closeButton>
            Hello!
          </Modal.Header>
          <Modal.Body>
            Some info content
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>
              <button>CLOSE ME</button>
            </Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    ))
    .add('5. Nested', () => (
      <Modal>
        <Modal.Open>
          <button>Open modal</button>
        </Modal.Open>
        <Modal.Content>
          <Modal.Header closeButton>
            Hello!
          </Modal.Header>
          <Modal.Body>
            Some info content
            <Modal>
              <Modal.Open>
                <button>Open new modal</button>
              </Modal.Open>
              <Modal.Content>
                <Modal.Header closeButton>
                  Hello!
                </Modal.Header>
                <Modal.Body>
                  Some info content
                </Modal.Body>
                <Modal.Footer>
                  <Modal.Close>
                    <button>CLOSE ME</button>
                  </Modal.Close>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>
              <button>CLOSE ME</button>
            </Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    ))
    ;

    // .add('Modal async trigger', () => {
    //   // npm i eventemitter3
    //   if (!require('eventemitter3')) {
    //     return <div>npm i eventemitter3</div>
    //   }
    //   const emitter = new require('eventemitter3').EventEmitter;
    //   // const emitter = {}
    //   const open = () => {
    //     setTimeout(() => {
    //       emitter.emit('open');
    //     }, 1000);
    //   };
    //   const close = () => {
    //     setTimeout(() => {
    //       emitter.emit('close');
    //     }, 1000);
    //   };
    //   return (<div>
    //     <button onClick={open}>
    //       Open async modal
    //     </button>
    //     <Modal emitter={emitter}>
    //       <Modal.Content>
    //         Sample content
    //         <button onClick={close}>
    //           Close async modal
    //         </button>
    //       </Modal.Content>
    //     </Modal>
    //   </div>);
    // });
};
