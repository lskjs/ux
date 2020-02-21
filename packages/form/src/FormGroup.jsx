import React from 'react';
import Form from 'antd/lib/form';
import { Global } from '@emotion/core';
import T from '@lskjs/ui/T';
import FormError from './FormError';
import Title from './components/TitleComponent';
import { globalStylesFormItem } from './Form.styles';

export default ({
  field,
  form,
  withI18,
  children,
  htmlId,
  required,
  _required,
  title,
  help,
  errorMessage,
  info,
  infoLeft,
}) => {
  const errorMsg = errorMessage || (form && form.errors && form.errors[field.name]);
  const looksLikeRequired = required || _required;
  let titleComponent;
  console.log({title});
  
  if (title) {
    titleComponent = (
      <Title
        withI18={withI18}
        infoLeft={infoLeft}
        title={withI18 ? <T name={title} /> : title}
        error={errorMsg}
        info={info}
        isRequired={looksLikeRequired}
      />
    );
  }
  return (
    <>
      <Global styles={globalStylesFormItem} />
      <Form.Item
        key={htmlId}
        required={looksLikeRequired}
        label={titleComponent}
        help={help}
        validateStatus={errorMsg ? 'error' : null}
      >
        <div id={htmlId} />
        {children}
        {errorMsg && <FormError style={{ color: '#ee1e31' }}>{errorMsg}</FormError>}
      </Form.Item>
    </>
  );
};
