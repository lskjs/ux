import Modal from './Modal';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Modal', module)
    // .add('Modal 0', () => (
    //   <Modal>
    //     123123123
    //   </Modal>
    // ))
    // .add('Modal 01', () => (
    //   <Modal>
    //     123123123
    //     <Modal.Button>
    //       Sample content
    //     </Modal.Button>
    //   </Modal>
    // ))

    .add('Modal 1', () => (
      <Modal>
        <Modal.Trigger>
          Open modal
        </Modal.Trigger>
        <Modal.Content>
          Sample content
        </Modal.Content>
      </Modal>
    ))
    .add('Modal 2', () => (
      <Modal>
        <Modal.Trigger>
          Sample content
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header closeButton>
            Header
          </Modal.Header>
          <Modal.Body>
            Body
          </Modal.Body>
          <Modal.Footer>
            Footer
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    ))
    .add('Modal async trigger', () => {
      // npm i eventemitter3
      const emitter = new require('eventemitter3').EventEmitter;
      // const emitter = {}
      const open = () => {
        setTimeout(() => {
          emitter.emit('open');
        }, 1000);
      };
      const close = () => {
        setTimeout(() => {
          emitter.emit('close');
        }, 1000);
      };
      return (<div>
        <button onClick={open}>
          Open async modal
        </button>
        <Modal emitter={emitter}>
          <Modal.Content>
            Sample content
            <button onClick={close}>
              Close async modal
            </button>
          </Modal.Content>
        </Modal>
      </div>);
    });
};
