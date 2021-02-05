import Page from '@lskjs/page';
import React from 'react';

import { AuthSignupForm } from '../forms/AuthSignupForm';
import { AuthFooter } from '../parts/AuthFooter';

const AuthSignupPage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <AuthSignupForm onSubmit={onSubmit} />
    <AuthFooter view="signup" providers={providers} />
  </Page>
);

export default AuthSignupPage;
