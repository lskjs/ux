import React from 'react';

import { Info, Required, Title, Wrapper } from './TitleComponent.styles';

export const Input = ({ title, error, info, isRequired, infoLeft }) => (
  <Wrapper infoLeft={infoLeft}>
    <Title error={error}>
      {title}
      {isRequired && <Required>*</Required>}
    </Title>
    {!!info && <Info>{info}</Info>}
  </Wrapper>
);

export default Input;
