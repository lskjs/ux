import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { UnmountClosed } from 'react-collapse';
import cx from 'classnames';

@inject('pageStore')
@observer
class PageListFilter extends Component {
  render() {
    const {
      Form,
      pageStore,
      old,
    } = this.props;
    const filter = toJS(pageStore.filter);
    if (old) {
      return (
        <div>
          <Form
            defaultValues={{ filter }}
            store={pageStore}
            removeNull
            value={{ filter }}
            validateOnChange
            onChange={(values) => {
              pageStore.handleChangeFilter(values.filter);
            }}
          />
        </div>
      );
    }
    return (
      <UnmountClosed
        isOpened={pageStore.isOpenFilterBar}
        forceInitialAnimation
        onRest={() => {
          if (pageStore.isOpenFilterBar) {
            pageStore.toggleRestFilterBar(true);
          }
        }}
        theme={{
          collapse: cx({
            'ReactCollapse--collapse': true,
            'ReactCollapse--rest': pageStore.isOpenFilterBar && pageStore.isRestFilterBar,
          }),
        }}
      >
        <Form
          initialValues={filter}
          onChange={(values) => {
            pageStore.handleChangeFilter(values);
          }}
        />
      </UnmountClosed>
    );
  }
}

export default PageListFilter;
