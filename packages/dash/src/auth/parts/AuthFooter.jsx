import T from '@lskjs/t';
import { A } from '@lskjs/ui2';
import React from 'react';

// import AuthSocials from './AuthSocials';

const AdditionalInfo = ({ children }) => <div>{children}</div>;

export const AuthFooter = ({ view, providers }) => (
  <>
    {view !== 'login' && (
      <AdditionalInfo>
        <T name="auth.authFooter.login" />
        <A href="/auth/login">
          <T name="buttons.login" />
        </A>
      </AdditionalInfo>
    )}
    {view !== 'signup' && (
      <AdditionalInfo>
        <T name="auth.authFooter.signup" />
        <A href="/auth/signup">
          <T name="buttons.signup" />
        </A>
      </AdditionalInfo>
    )}
    {view !== 'restore' && (
      <AdditionalInfo>
        <T name="auth.authFooter.restore" />
        <A href="/auth/restore">
          <T name="buttons.restore" />
        </A>
      </AdditionalInfo>
    )}
    {/* {providers && <AuthSocials providers={providers} />} */}
  </>
);

export default AuthFooter;
