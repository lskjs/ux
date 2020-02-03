/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import { observer, inject } from 'mobx-react';
import T from '@lskjs/ui/T';
import Modal, {
  Title,
  Content,
} from '@lskjs/modal';
import { contextToProps } from './List.context';
import { modalStyle } from './List.styles';

@contextToProps('FilterForm', 'filterProps')
@inject('listStore')
@observer
class ListFilterModal extends Component {
  render() {
    const {
      listStore, filterProps, FilterForm, children, ...props
    } = this.props;
    return (
      <Modal
        trigger={children}
        style={{
          overlay: Modal.defaultStyles.overlay,
        }}
        {...props}
      >
        {() => (
          <React.Fragment>
            <Title><T name="lskList.filterButton" /></Title>
            <Content css={[modalStyle]}>
              <FilterForm
                {...filterProps}
                enableReinitialize
                initialValues={listStore.filter}
                hash={listStore.filter}
                onChange={listStore.setFilter}
              />
            </Content>
          </React.Fragment>
        )}
      </Modal>
    );
  }
}

export default ListFilterModal;
