import React, { createRef, Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

import { Provider } from './Modal.context';
import GlobalModal from './GlobalModal';
import Modal from '../index';

/**
 * @callback createCb
 * @extends create
 */

/**
 * @callback updateCb
 * @extends update
 */

/**
 * @callback removeCb
 * @extends remove
 */

/**
 * @callback listCb
 * @extends list
 */

/**
 * @callback getCb
 * @extends get
 */

/**
 * @callback openCb
 * @extends open
 */

/**
 * @callback closeCb
 * @extends close
 */

/**
 * @callback listCb
 * @extends list
 */

/**
 * Список методов
 * @typedef {Object} Methods
 * @property {createCb} create - Создать модалку
 * @property {updateCb} update - Обновить модалку
 * @property {removeCb} remove - Удалить модалку
 * @property {getCb} get - Инстанс модалки
 * @property {openCb} open - Открыть модалку
 * @property {closeCb} close - Закрыть модалку
 * @property {listCb} list - Список модалок
 */

/**
 * @typedef {Object} ModalListEntity
 * @property {Object} ref - ModalRef
 * @property {*} content - Контент модалки
 */

/**
 * Список модалок
 * @typedef {Object} Modals
 * @property {...ModalListEntity} *
 */

/**
 * @method simple
 * @param {string} id - ID инстанса модалки
 * @returns {string} ID
 */

/**
 * Контекст модалки
 * @callback selfCallback
 * @param {string} id - ID инстанса модалки
 * @param {Object} ref - Reference на компонент модалки
 * @param {*} Modal - Компонент модалки
 * @param {Methods} methods - Методы контекста глобальных модалок
 */

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

  /**
   * Создание инстанса модалки
   * @method create
   * @param {string} id - ID инстанса модалки
   * @param {Object} [props = {}] - Props для модалки
   * @param {(string | selfCallback)} content - Реакт компоненты или функция возвращающая реакт компоненты
   * @returns {*} ModalRef
   */
  create(id, props = {}, content) {
    if (!this.modals.current) return null;
    const { renderedIds, modals } = this.modals.current.state;
    if (renderedIds.includes(id)) return modals[id].ref;
    const ref = createRef();
    const self = {
      ...props,
      id,
      ref,
      Modal,
      methods: this.getMethods(),
    };
    const modal = {
      ...props,
      ref,
      content: typeof content === 'function' ? content(self) : content,
    };

    this.modals.current.addModal(id, modal, content);

    return modal.ref;
  }

  /**
   * Обновление инстанса модалки
   * @method update
   * @param {string} id - ID инстанса модалки
   * @param {Object} [props = {}] - Props для модалки
   * @param {(string | selfCallback)} content - Реакт компоненты или функция возвращающая реакт компоненты
   * @returns {*} ModalRef
   */
  update(id, props = {}, content) {
    const modal = this.get(id);
    const data = merge(modal, props);
    const self = {
      ...props,
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

  /**
   * Удаление инстанса модалки
   * @method remove
   * @extends simple
   */
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

  /**
   * Список инстансов модалок
   * @method list
   * @returns {Modals} Список модалок
   */
  list() {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    return modals;
  }

  /**
   * Получение инстанса модалки
   * @method get
   * @param {string} id - ID инстанса модалки
   * @returns {ModalListEntity} - Инстанс модалки
   */
  get(id) {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    return modals[id];
  }

  /**
   * Открыть модалку
   * @method open
   * @extends simple
   */
  open(id) {
    const modal = this.get(id);
    if (!modal) return null;
    modal.ref.current.open();
    return id;
  }

  /**
   * Закрыть модалку
   * @method open
   * @extends simple
   */
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
