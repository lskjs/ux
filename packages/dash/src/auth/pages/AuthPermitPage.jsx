import Page from '@lskjs/page';
import React from 'react';

import { AuthPermitForm } from '../forms/AuthPermitForm';
import { AuthFooter } from '../parts/AuthFooter';

const AuthPermitPage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <AuthPermitForm onSubmit={onSubmit} />
    <AuthFooter view="permit" providers={providers} />
  </Page>
);

export default AuthPermitPage;
