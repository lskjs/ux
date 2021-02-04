import Page from '@lskjs/page';
import React from 'react';

export const AuthForbiddenPage = () => (
  <Page layout="auth">
    <Page.Header breadcrumbs={null} />
  </Page>
);

export default AuthForbiddenPage;
