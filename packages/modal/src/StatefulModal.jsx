import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Promise from 'bluebird';
import autobind from '@lskjs/autobind';
import UniversalRouter from 'universal-router';
// import createMemoryHistory from 'history/createMemoryHistory';
import Modal from './Modal2';
import Layout from './components/Layout';

const createMemoryHistory = require('history').createMemoryHistory;

class StatefulModal extends PureComponent {
  static propTypes = {
    pathname: PropTypes.string,
    preRenderRoutes: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    routes: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }
  static defaultProps = {
    pathname: null,
    preRenderRoutes: [],
    onOpen: null,
    onClose: null,
    children: null,
    routes: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      pathname: props.pathname || null,
    };
    this.components = {};
    this.routes = this.getRoutes() || [];
    this.router = new UniversalRouter(this.routes);
    this.history = createMemoryHistory();
    this.history.listen((data) => {
      const { pathname } = data;
      return this
        .router
        .resolve(data)
        .then((page) => {
          console.log(page, pathname);
          // this.page = page;
          this.setState({ pathname, page });
        });
    });
  }
  async componentDidMount() {
    const { preRenderRoutes } = this.props;
    if (preRenderRoutes) {
      await Promise.map(preRenderRoutes, async (pathname) => {
        await this.preRender(pathname);
      });
    }
  }
  @autobind
  async onOpen() {
    const { onOpen } = this.props;
    if (onOpen) {
      await onOpen(this);
    }
  }
  @autobind
  async onClose() {
    const { onClose } = this.props;
    if (onClose) {
      await onClose(this);
    }
  }
  async getPrerender(pathname) {
    return this.components[pathname];
  }
  @autobind
  getRoutes() {
    const { routes } = this.props;
    if (typeof routes === 'function') return routes(this);
    return routes;
  }
  async hasPrerender(pathname) {
    return !!this.components[pathname];
  }
  async preRender(pathname) {
    const component = await this.router.resolve(pathname);
    this.components[pathname] = await component;
  }
  @autobind
  goBack() {
    this.history.goBack();
  }
  @autobind
  toPath(path, transitionName = 'forward') {
    this.setState({ transitionName }, () => {
      this.history.push(path);
    });
  }
  close() {
    this.modal.close();
  }
  open() {
    this.modal.open();
  }
  render() {
    const { children, ref } = this.props;
    const { pathname, transitionName, page } = this.state;
    return (
      <Modal
        {...get(page, 'settings')}
        onOpen={this.onOpen}
        onClose={this.onClose}
        trigger={children}
        ref={(modal) => {
          this.modal = modal;
          if (ref) ref(this);
        }}
      >
        <Layout
          pathname={pathname}
          title={get(page, 'title')}
          onBack={get(page, 'onBack')}
          height={get(page, 'height')}
          transitionName={transitionName}
        >
          {get(page, 'content')}
        </Layout>
      </Modal>
    );
  }
}

export default StatefulModal;
