import React from 'react';
import { inject } from 'mobx-react';
import PageBreadcrumbs from '../PageBreadcrumbs';
import PageTabs from '../PageTabs';

const PageHeader = ({ Page, children, breadcrumbs = {}, actions, tabs, tab, onChangeTab, ...props }) => (
  <Page.PageHeaderWrapper {...props}>
    {children || (
      <>
        <Page.Title actions={actions} />
        {breadcrumbs && <PageBreadcrumbs {...breadcrumbs} />}
        {tabs && <PageTabs tab={tab} tabs={tabs} onClick={onChangeTab} />}
      </>
    )}
  </Page.PageHeaderWrapper>
);

export default inject('Page')(PageHeader);
