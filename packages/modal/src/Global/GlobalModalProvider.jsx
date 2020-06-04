import React, { createRef, Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

import { Provider } from './Modal.context';
import GlobalModal from './GlobalModal';
import Modal from '../index';

class GlobalModalProvider extends Component {
  constructor(props) {
    super(props);

    this.getMethods = this.getMethods.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.get = this.get.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.list = this.list.bind(this);
    this._getContent = this._getContent.bind(this);
    this._prepareContent = this._prepareContent.bind(this);
    this.modals = createRef();
  }

  getMethods() {
    return {
      create: this.create,
      update: this.update,
      remove: this.remove,
      get: this.get,
      open: this.open,
      close: this.close,
      list: this.list,
    };
  }

  create(id, params = {}, content) {
    if (!this.modals.current) return null;
    const { renderedIds, modals } = this.modals.current.state;
    if (renderedIds.includes(id)) return modals[id].ref;
    const ref = createRef();
    const self = {
      ...params,
      id,
      ref,
      Modal,
      methods: this.getMethods(),
    };
    const modal = {
      ...params,
      ref,
      content: typeof content === 'function' ? content(self) : content,
    };

    this.modals.current.addModal(id, modal, content);

    return modal.ref;
  }

  update(id, params = {}, content) {
    const modal = this.get(id);
    const data = merge(modal, params);
    const self = {
      ...params,
      id,
      ref: modal.ref,
      Modal,
      methods: this.getMethods(),
    };
    if (content) {
      data.content = this._prepareContent(content, self);
    } else {
      const currentContent = this._getContent(id);
      data.content = this._prepareContent(currentContent, self);
    }

    this.modals.current.updateModal(id, data, content);

    return modal.ref;
  }

  remove(id) {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    if (!modals[id]) return null;

    if (modals[id].ref.current) {
      modals[id].ref.current.close();
    }

    this.modals.current.removeModal(id);

    return id;
  }

  list() {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    return modals;
  }

  get(id) {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    return modals[id];
  }

  open(id) {
    const modal = this.get(id);
    if (!modal) return null;
    modal.ref.current.open();
    return id;
  }

  close(id) {
    const modal = this.get(id);
    if (!modal) return null;
    modal.ref.current.close();
    return id;
  }

  _getContent(id) {
    if (!this.modals.current) return null;
    const { contents } = this.modals.current.state;
    return contents[id];
  }

  _prepareContent(content, self) {
    return typeof content === 'function' ? content(self) : content;
  }

  render() {
    const { children } = this.props;

    const data = this.getMethods();

    if (typeof window !== 'undefined') {
      window.globalModals = data;
    }

    return (
      <Provider value={data}>
        {children}
        <GlobalModal ref={this.modals} />
      </Provider>
    );
  }
}

GlobalModalProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default GlobalModalProvider;
