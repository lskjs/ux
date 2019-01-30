import React, { Component } from 'react';
import If from 'react-if';
import { contextToProps } from './List.context';

@contextToProps('List', 'show')
class ListHeader extends Component {
  render() {
    const { List, children, show } = this.props;
    if (children) {
      return (
        <List.HeaderWrapper>
          {children}
        </List.HeaderWrapper>
      );
    }
    console.log('List.HeaderRow', List.HeaderRow);
    
    return (
      <List.HeaderWrapper>
        <If condition={show.search}>
          <List.Search />
        </If>
        <List.Filter />
        <If condition={show.tags}>
          <List.Tags />
        </If>
        <If condition={show.sticky}>
          <List.Sticky>
            <List.HeaderRow />
          </List.Sticky>
        </If>
        <If condition={!show.sticky}>
          <List.HeaderRow />
        </If>
      </List.HeaderWrapper>
    );
  }
}

export default ListHeader;

