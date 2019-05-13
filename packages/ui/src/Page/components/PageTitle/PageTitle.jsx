import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import get from 'lodash/get';
import { PageTitle as Title } from '../../Page.styles';
import PageTitleActions from '../PageTitleActions';

@inject('Page', 'page')
@observer
class PageTitle extends Component {
  render() {
    const {
      Page,
      children,
      actions,
      page,
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
