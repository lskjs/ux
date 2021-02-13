import React, { Component } from 'react';
import omit from 'lodash/omit';
import ObserverDEV from '@lskjs/dev/ObserverDEV';

export default class DebugListStore extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <button type="button" onClick={() => this.forceUpdate()}>
          forceUpdate
        </button>
        <button type="button" onClick={() => store.fetch()}>
          fetch
        </button>
        <button type="button" onClick={() => store.fetch({ skip: 5, limit: 5, cache: true })}>
          fetch 5-10 cache
        </button>
        <button type="button" onClick={() => store.fetch({ skip: 40, limit: 5, cache: true })}>
          fetch 40-45 cache
        </button>
        <ObserverDEV json={omit(store, ['selectStore'])} />
        <ObserverDEV json={omit(store.selectStore, ['listStore'])} />
      </div>
    );
  }
}
