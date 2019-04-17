import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import get from 'lodash/get';

@inject('Page', 'page')
@observer
class PageTitle extends Component {
  render() {
    const {
      children,
      actions,
      page,
      Page,
      ...props
    } = this.props;
    return (
      <Page.PageTitleWrapper {...props}>
        {children || get(page, 'state.meta.title')}
        {actions && (
          <Page.TitleActions>
            {actions}
          </Page.TitleActions>
        )}
      </Page.PageTitleWrapper>
    );
  }
}

export default PageTitle;
