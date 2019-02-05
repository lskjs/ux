import React, { Component } from 'react';
import Modal, { Title, Subtitle, Description, Image, Help, Content, Footer } from './Modal2';
import Story from '../Story';
import Button from '../Button';

export default ({ storiesOf, action }) => {
  return storiesOf('Modal2', module)
    .add('1. Widthout wrap', () => (
      <Story>
        <Modal
          trigger="trigger"
          title="title"
        />
      </Story>
    ))
    .add('4. Widthout wrap', () => (
      <Story>
        <Modal
          trigger="trigger"
          title="title"
          defaultVisible={1}
        />
      </Story>
    ))
    .add('2. Widthout wrap', () => (
      <Story>
        <Modal
          size="small"
          defaultVisible
          onClose={() => console.log('onClose')}
        >
          {({ modal }) => (
            <React.Fragment>
              <Modal.Title>title</Modal.Title>
              <Modal.Subtitle>Subtitle</Modal.Subtitle>
              <Modal.Description>Description</Modal.Description>
              <Modal.Help>Help</Modal.Help>
              <Modal.Image src="https://picsum.photos/1280/720/?random" />
              <Modal.Content>
                content
              </Modal.Content>
              <Modal.Footer>
                <Button
                  paint="primary"
                  onClick={() => modal.close()}
                >
                  OK
                </Button>
              </Modal.Footer>
            </React.Fragment>
         )}
        </Modal>
      </Story>
    ))
    .add('3. Widthout modal', () => (
      <Story>
        <Modal.Title>title</Modal.Title>
        <Modal.Subtitle>Subtitle</Modal.Subtitle>
        <Modal.Description>Description</Modal.Description>
        <Modal.Help>Help</Modal.Help>
        <Modal.Image src="https://picsum.photos/1280/720/?random" />
        <Modal.Content>
          content
        </Modal.Content>
        <Modal.Footer>
          <Button
            paint="primary"
          >
            OK
          </Button>
        </Modal.Footer>
      </Story>
    ));
  // .add('2. With title and wrap', () => (
  //   <Story>
  //     <Modal>
  //       <Modal.Trigger>
  //         <button>Open modal</button>
  //       </Modal.Trigger>
  //       <Modal.Content title="Sample title">
  //       Sample content
  //       </Modal.Content>
  //     </Modal>
  //   </Story>
  // ))
  // .add('3. Trigger close', () => (
  //   <Story>
  //     <Modal>
  //       <Modal.Trigger>
  //         <button>Trigger modal</button>
  //       </Modal.Trigger>
  //       <Modal.Content body>
  //       Sample content, and &nbsp;
  //         <Modal.Trigger type="close">
  //           <a>close</a>
  //         </Modal.Trigger>
  //       </Modal.Content>
  //     </Modal>
  //   </Story>
  // ))
  // .add('4. Full control', () => (
  //   <Story>
  //     <Modal>
  //       <Modal.Trigger>
  //         <button>Open modal</button>
  //       </Modal.Trigger>
  //       <Modal.Content>
  //         <Modal.Header closeButton>
  //         Hello!
  //         </Modal.Header>
  //         <Modal.Body>
  //         Some info content
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Modal.Close>
  //             <button>CLOSE ME</button>
  //           </Modal.Close>
  //         </Modal.Footer>
  //       </Modal.Content>
  //     </Modal>
  //   </Story>
  // ))
  // .add('5. Nested', () => (
  //   <Story>
  //     <Modal>
  //       <Modal.Trigger>
  //         <button>Open modal</button>
  //       </Modal.Trigger>
  //       <Modal.Content>
  //         <Modal.Header closeButton>
  //         Hello!
  //         </Modal.Header>
  //         <Modal.Body>
  //         Some info content
  //           <Modal>
  //             <Modal.Trigger>
  //               <button>Open new modal</button>
  //             </Modal.Trigger>
  //             <Modal.Content>
  //               <Modal.Header closeButton>
  //               Hello!
  //               </Modal.Header>
  //               <Modal.Body>
  //               Some info content
  //               </Modal.Body>
  //               <Modal.Footer>
  //                 <Modal.Close>
  //                   <button>CLOSE ME</button>
  //                 </Modal.Close>
  //               </Modal.Footer>
  //             </Modal.Content>
  //           </Modal>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Modal.Close>
  //             <button>CLOSE ME</button>
  //           </Modal.Close>
  //         </Modal.Footer>
  //       </Modal.Content>
  //     </Modal>
  //   </Story>
  // ))

  // .add('6. External open and close', () => {
  //   class ComponentWithModal extends Component {
  //     render() {
  //       return (
  //         <div>
  //           <button onClick={() => this.modal.open()}>Open</button>
  //           <button onClick={() => this.modal.close()}>Close</button>
  //           <Modal ref={modal => this.modal = modal}>
  //             <Modal.Content>
  //               <Modal.Header closeButton>
  //                 Hello!
  //               </Modal.Header>
  //               <Modal.Body>
  //                 Some info content
  //               </Modal.Body>
  //               <Modal.Footer>
  //                 <Modal.Close>
  //                   <button>CLOSE ME</button>
  //                 </Modal.Close>
  //               </Modal.Footer>
  //             </Modal.Content>
  //           </Modal>
  //         </div>
  //       );
  //     }
  //   }
  //   return (
  //     <Story>
  //       <ComponentWithModal />
  //     </Story>
  //   );
  // })
  // .add('7. Visible by default', () => (
  //   <Story>
  //     <Modal visible>
  //       <Modal.Trigger>
  //         <button>Open modal</button>
  //       </Modal.Trigger>
  //       <Modal.Content>
  //         Sample content
  //       </Modal.Content>
  //     </Modal>
  //   </Story>
  // ))
  // .add('8. e.preventDefault', () => (
  //   <Story>
  //     <Modal>
  //       <Modal.Trigger>
  //         some trigger text, open modal <br />
  //         <button onClick={() => console.log('log1 log1 log1')}>Some console.log into modal and open modal</button>  <br />
  //         <button onClick={(e) => { e.preventDefault(); console.log('log2 log2 log2'); }}>Some console.log into modal  without open modal</button>
  //       </Modal.Trigger>
  //       <Modal.Content>
  //         Sample content
  //       </Modal.Content>
  //     </Modal>
  //   </Story>
  // ));

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
  // </Story>
  //   </div>);
  // });
};
