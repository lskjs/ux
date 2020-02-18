import React from 'react';
import If from 'react-if';
import T from '@lskjs/ui/T';
import * as Styles from './TitleComponent.styles';

const Input = ({ title, error, info, isRequired, infoLeft, withI18 }) => (
  <Styles.Wrapper infoLeft={infoLeft}>
    <Styles.Title error={error}>{withI18 ? <T name={title} /> : title}</Styles.Title>
    <If condition={!!info}>
      <Styles.Info>{info}</Styles.Info>
    </If>
  </Styles.Wrapper>
);

export default Input;
