import React, { Component } from 'react';

import { ListHeader as ListHeaderStyled } from './PageList.styles';
import { Consumer } from './PageListContext';

class PageListHeader extends Component {
  render() {
    return (
      <Consumer>
        {(pageList) => {
          const PageList = pageList.constructor;
          const {
            FilterForm, createTags, HeaderItem,
          } = this.props;
          let { children } = this.props;

          if (!children) {
            if (!PageList) {
              if (__DEV__) {
                return <div>!props.PageList</div>;
              }
              return null;
            }
            children = (
              <React.Fragment>
                <PageList.Search />
                <PageList.Filter
                  Form={FilterForm}
                />
                <PageList.Tags createTags={createTags} />
                <PageList.StickyPanel>
                  <PageList.TableHeader HeaderItem={HeaderItem} />
                </PageList.StickyPanel>
              </React.Fragment>
            );
          }
          return (
            <ListHeaderStyled>
              {children}
            </ListHeaderStyled>
          );
        }}
      </Consumer>
    );
  }
}

export default PageListHeader;

