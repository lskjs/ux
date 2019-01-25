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
      old,
    } = this.props;
    const filter = toJS(listStore.filter);
    if (old) {
      return (
        <div>
          <Form
            defaultValues={{ filter }}
            store={listStore}
            removeNull
            value={{ filter }}
            validateOnChange
            onChange={(values) => {
              listStore.handleChangeFilter(values.filter);
            }}
          />
        </div>
      );
    }
    return (
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
        <Form
          initialValues={filter}
          onChange={(values) => {
            listStore.handleChangeFilter(values);
          }}
        />
      </UnmountClosed>
    );
  }
}

export default PageListFilter;
