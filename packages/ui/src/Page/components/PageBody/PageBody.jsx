import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';

@inject('Page')
class PageBody extends PureComponent {
  render() {
    const { Page, children, ...props } = this.props;
    return (
      <Page.PageBodyWrapper {...props}>
        {children}
      </Page.PageBodyWrapper>
    );
  }
}

export default PageBody;
