import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import T from '../T';
import { contextToProps } from './List.context';
import Modal, {
  Title,
  Content,
} from '../Modal2';
import { modalStyle } from './List.styles';

@contextToProps('FilterForm')
@inject('listStore')
@observer
class ListFilterModal extends Component {
  render() {
    const {
      listStore, FilterForm, children,
    } = this.props;
    return (
      <Modal
        trigger={children}
      >
        {() => {
          return (
            <React.Fragment>
              <Title><T name="lskList.filterButton" /></Title>
              <Content className={modalStyle}>
                <FilterForm
                  ref={this.form}
                  enableReinitialize
                // initialValues={listStore.filter}
                  initialValues={toJS(listStore.filter)}
                  onChange={listStore.setFilter}
                />
              </Content>
            </React.Fragment>
          );
        }}
      </Modal>
    );
  }
}

export default ListFilterModal;
