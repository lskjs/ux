import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';
import PageBreadcrumbs from '../PageBreadcrumbs';
import PageTabs from '../PageTabs';

const PageHeader = ({ Page, children, actions, tabs, tab, onChangeTab, ...props }) => (
  <Page.PageHeaderWrapper {...props}>
    {children || (
      <>
        <Page.Title actions={actions} />
        <PageBreadcrumbs />
        {tabs && <PageTabs tab={tab} tabs={tabs} onClick={onChangeTab} />}
      </>
    )}
  </Page.PageHeaderWrapper>
);

export default inject('Page')(PageHeader);
