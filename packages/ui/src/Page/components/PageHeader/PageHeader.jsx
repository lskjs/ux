import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';
import PageBreadcrumbs from '../PageBreadcrumbs';
import PageTabs from '../PageTabs';

@inject('Page')
class PageHeader extends PureComponent {
  render() {
    const {
      Page,
      children,
      actions,
      tabs,
      tab,
      onChangeTab,
      ...props
    } = this.props;
    return (
      <Page.PageHeaderWrapper {...props}>
        {children || (
          <React.Fragment>
            <Page.Title actions={actions} />
            <PageBreadcrumbs />
            {tabs && <PageTabs tab={tab} tabs={tabs} onClick={onChangeTab} />}
          </React.Fragment>
        )}
      </Page.PageHeaderWrapper>
    );
  }
}

export default PageHeader;
