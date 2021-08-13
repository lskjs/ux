import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';
import React from 'react';

import FormItem from './components/FormItem';
import getControlHtmlId from './createForm/getControlHtmlId';
import FormError from './FormError';

const Notice = styled('div')`
  margin-bottom: 8px;
  /* min-height: 48px; */
  border-radius: 3px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  padding: 13px;

  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.83;
  letter-spacing: -0.1px;
  text-align: center;
  color: #111111;
`;

export default ({ errors }) => (
  <FormItem hasError={!!errors}>
    {!!errors.onSubmit && (
      <Notice>
        <FormError id={getControlHtmlId('onSubmit')}>{errors.onSubmit}</FormError>
      </Notice>
    )}
  </FormItem>
);
