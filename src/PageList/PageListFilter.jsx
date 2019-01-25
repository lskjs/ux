import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { UnmountClosed } from 'react-collapse';
import cx from 'classnames';

@inject('listStore')
@observer
class PageListFilter extends Component {
  render() {
    const {
      Form,
      listStore,
      container,
      old,
    } = this.props;
    const filter = toJS(listStore.filter);

    let children = (
      <Form
        initialValues={filter}
        onSubmit={listStore.handleChangeFilter}
        onChange={listStore.handleChangeFilter}
      />
    );

    if (container) {
      children = (
        <UnmountClosed
          isOpened={listStore.isOpenFilterBar}
          forceInitialAnimation
          onRest={() => {
            if (listStore.isOpenFilterBar) {
              listStore.toggleRestFilterBar(true);
            }
          }}
          theme={{
            collapse: cx({
              'ReactCollapse--collapse': true,
              'ReactCollapse--rest': listStore.isOpenFilterBar && listStore.isRestFilterBar,
            }),
          }}
        >
          {children}
        </UnmountClosed>
      );
    }

    return children;
  }
}

export default PageListFilter;
