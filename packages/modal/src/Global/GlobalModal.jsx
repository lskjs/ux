import React, { Component } from 'react';
import omit from 'lodash/omit';
import unset from 'lodash/unset';
import remove from 'lodash/remove';
import Modal from '../index';

class GlobalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedIds: [],
      modals: {},
      contents: {},
    };

    this.addModal = this.addModal.bind(this);
    this.removeModal = this.removeModal.bind(this);
    this.updateModal = this.updateModal.bind(this);
  }

  addModal(id, modal, content) {
    this.setState((state) => {
      const newState = {
        renderedIds: [...state.renderedIds, id],
        modals: {
          ...state.modals,
          [id]: modal,
        },
      };
      if (content) {
        newState.contents = {
          ...state.contents,
          [id]: content,
        };
      }
      return newState;
    });
  }

  updateModal(id, modal, content) {
    this.setState((state) => {
      const newModals = state.modals;
      newModals[id] = modal;
      const newState = {
        modals: newModals,
      };
      if (content) {
        const newContents = state.contents;
        newContents[id] = content;
        newState.contents = newContents;
      }
      return newState;
    });
  }

  removeModal(id) {
    const { modals, contents, renderedIds } = this.state;
    const newModals = modals;
    unset(modals, id);
    const newContents = contents;
    unset(contents, id);
    const newRenderedIds = remove(renderedIds, (key) => key !== id);
    this.setState({
      renderedIds: newRenderedIds,
      modals: newModals,
      contents: newContents,
    });
  }

  render() {
    const { renderedIds, modals } = this.state;
    return (
      <>
        {Object.keys(modals).map((key) => {
          const modal = modals[key];
          const isRendered = renderedIds.find((e) => e === key);
          if (!isRendered) return false;
          return (
            <Modal key={key} {...omit(modal, ['content', 'ref'])} ref={modal.ref}>
              {modal.content}
            </Modal>
          );
        })}
      </>
    );
  }
}

export default GlobalModal;
