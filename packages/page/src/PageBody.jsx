import React from 'react';

export const PageBody = ({ Page, children, ...props }) => (
  <Page.PageBodyWrapper {...props}>{children}</Page.PageBodyWrapper>
);

export default contextToProps('Page')(PageBody);
