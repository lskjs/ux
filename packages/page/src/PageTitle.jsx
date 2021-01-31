import React from 'react';
import { inject, observer } from '@lskjs/mobx';
import get from 'lodash/get';
// import PageTitleActions from '../PageTitleActions';
import { contextToProps } from './Page.context';

export const PageTitle = ({ Page, children, actions, page, ...props }) => (
  <Page.PageTitleWrapper {...props}>
    {children || get(page, 'state.meta.title')}
    {actions && <Page.TitleActions>{actions}</Page.TitleActions>}
  </Page.PageTitleWrapper>
);

export default contextToProps('Page')(inject('page')(observer(PageTitle)));
