import Page from '@lskjs/page';
import React from 'react';

import { AuthLoginForm } from '../forms/AuthLoginForm';
import { AuthFooter } from '../parts/AuthFooter';

export const AuthLoginPage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <AuthLoginForm onSubmit={onSubmit} />
    <AuthFooter view="login" providers={providers} />
  </Page>
);

export default AuthLoginPage;
