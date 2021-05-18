import React from 'react';

import * as Styles from './TitleComponent.styles';

const Input = ({ title, error, info, isRequired, infoLeft }) => (
  <Styles.Wrapper infoLeft={infoLeft}>
    <Styles.Title error={error}>
      {title}
      {isRequired && <Styles.Required>*</Styles.Required>}
    </Styles.Title>
    {!!info && <Styles.Info>{info}</Styles.Info>}
  </Styles.Wrapper>
);

export default Input;
