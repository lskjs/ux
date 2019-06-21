import React from 'react';
import If from 'react-if';
import Form from 'antd/lib/form';
import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';
import getControlHtmlId from './createForm/getControlHtmlId';
import FormError from './FormError';

const Notice = styled('div')`
  margin-bottom: 8px;
  min-height: 48px;
  border-radius: 3px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 13px;

  font-family: ${p => getTheme(p.theme, 'fontFamily')};
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
  <Form.Item
    validateStatus={errors ? 'error' : null}
  >
    <If condition={!!errors.onSubmit}>
      {/* <FormError id={getControlHtmlId('onSubmit')}>{errors.onSubmit}</FormError> */}
      <Notice>
        <FormError id={getControlHtmlId('onSubmit')}>
          {errors.onSubmit}
        </FormError>
        {/* {errors.general} */}
      </Notice>
    </If>
  </Form.Item>
);
