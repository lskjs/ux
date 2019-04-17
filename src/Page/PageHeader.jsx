import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';

@inject('Page')
class PageHeader extends PureComponent {
  render() {
    const {
      children,
      actions,
      tabs,
      tab,
      onChangeTab,
      Page,
      ...props
    } = this.props;
    return (
      <Page.PageHeaderWrapper {...props}>
        {children || (
          <React.Fragment>
            <Page.Title actions={actions} omitLast />
            <Page.Breadcrumbs />
            {tabs && <Page.Tabs tab={tab} tabs={tabs} onClick={onChangeTab} />}
          </React.Fragment>
        )}
      </Page.PageHeaderWrapper>
    );
  }
}

export default PageHeader;
