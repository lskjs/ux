import React from 'react';
import { contextToProps } from './Page.context';

export const PageBody = ({ Page, children, ...props }) => (
  <Page.PageBodyWrapper {...props}>{children}</Page.PageBodyWrapper>
);

export default contextToProps('Page')(PageBody);
