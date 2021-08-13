import T from '@lskjs/t';
import { A } from '@lskjs/ui2';
import React from 'react';

// import AuthSocials from './AuthSocials';

const AdditionalInfo = ({ children }) => <div>{children}</div>;

export const AuthFooter = ({ view, providers }) => (
  <>
    {view !== 'login' && (
      <AdditionalInfo>
        <T name="lsk.dash.AuthFooter.login" />
        <A href="/auth/login">
          <T name="lsk.dash.buttons.login" />
        </A>
      </AdditionalInfo>
    )}
    {view !== 'signup' && (
      <AdditionalInfo>
        <T name="lsk.dash.AuthFooter.signup" />
        <A href="/auth/signup">
          <T name="lsk.dash.buttons.signup" />
        </A>
      </AdditionalInfo>
    )}
    {view !== 'restore' && (
      <AdditionalInfo>
        <T name="lsk.dash.AuthFooter.restore" />
        <A href="/auth/restore">
          <T name="lsk.dash.buttons.restore" />
        </A>
      </AdditionalInfo>
    )}
    {/* {providers && <AuthSocials providers={providers} />} */}
  </>
);

export default AuthFooter;
