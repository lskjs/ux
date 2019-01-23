import React, { PureComponent } from 'react';
import PageTitle from './PageTitle';
import PageBreadcrumbs from './PageBreadcrumbs';

class PageHeader extends PureComponent {
  render() {
    const {
      children,
      actions,
      ...props
    } = this.props;
    return (
      <div {...props}>
        {children || (
          <React.Fragment>
            <PageTitle actions={actions} />
            <PageBreadcrumbs />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PageHeader;
