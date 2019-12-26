import React from 'react';
import If from 'react-if';
import * as Styles from './TitleComponent.styles';

const Input = ({ title, error, info }) => (
  <Styles.Wrapper>
    <Styles.Title error={error}>{title}</Styles.Title>
    <If condition={info}>
      <Styles.Info>{info}</Styles.Info>
    </If>
  </Styles.Wrapper>
);

export default Input;
