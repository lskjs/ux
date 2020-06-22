import React from 'react';
import If from 'react-if';
import * as Styles from './TitleComponent.styles';

const Input = ({ title, error, info, isRequired, infoLeft }) => (
  <Styles.Wrapper infoLeft={infoLeft}>
    <Styles.Title error={error}>
      {`${title}:`}
      <If condition={isRequired}>
        <Styles.Required>*</Styles.Required>
      </If>
    </Styles.Title>
    <If condition={!!info}>
      <Styles.Info>{info}</Styles.Info>
    </If>
  </Styles.Wrapper>
);

export default Input;
