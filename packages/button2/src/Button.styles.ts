import styled from '@emotion/styled';
import { internalTheme } from './theme';
import { ButtonProps } from './Button';

export const Button = styled('button')<ButtonProps>`
  -webkit-appearance: button;
  text-transform: none;

  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  width: ${(props) => (props.block ? '100%' : 'unset')};
  font-family: ${(props) => internalTheme(props).fontFamily};
  transition: ${(props) => internalTheme(props).transition};

  outline: none;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  overflow: visible;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;

  ${(props) => {
    const ux = internalTheme(props);
    return ux.utils.make(ux.variants, props.variant, 'primary');
  }}

  ${(props) => {
    const ux = internalTheme(props);
    return ux.utils.make(ux.sizes, props.size, 'medium');
  }}
`;
