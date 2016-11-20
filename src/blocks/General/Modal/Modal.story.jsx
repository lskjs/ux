import Modal from './Modal'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Modal', module)
    .add('Modal 0', () => (
      <Modal>
        123123123
      </Modal>
    ))
    .add('Modal 01', () => (
      <Modal>
        123123123
        <Modal.Button>
          Sample content
        </Modal.Button>
      </Modal>
    ))
    .add('Modal 1', () => (
      <Modal>
        <Modal.Button>
          Sample content
        </Modal.Button>
        <Modal.Content>
          Sample content
        </Modal.Content>
      </Modal>
    ))
    .add('Modal 2', () => (
      <Modal>
        <Modal.Button>
          Sample content
        </Modal.Button>
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
}
