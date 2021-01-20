import { css } from '@emotion/react';

function make(object, prop, fallback = 'default') {
  const isValid = Object.keys(object).includes(prop);
  return object[isValid ? prop : fallback];
}

export const internalTheme = (props) => props.theme['ux/Button'];

export const variants = {
  primary: (props) => css`
    background-color: ${internalTheme(props).colors.primary};
    border-color: ${internalTheme(props).colors.primary};
    color: ${internalTheme(props).colors.white};
  `,
  secondary: (props) => css`
    background-color: ${internalTheme(props).colors.secondary};
    border-color: ${internalTheme(props).colors.secondary};
    color: ${internalTheme(props).colors.white};
  `,
  success: (props) => css`
    background-color: ${internalTheme(props).colors.success};
    border-color: ${internalTheme(props).colors.success};
    color: ${internalTheme(props).colors.white};
  `,
  warning: (props) => css`
    background-color: ${internalTheme(props).colors.warning};
    border-color: ${internalTheme(props).colors.warning};
    color: ${internalTheme(props).colors.white};
  `,
  danger: (props) => css`
    background-color: ${internalTheme(props).colors.danger};
    border-color: ${internalTheme(props).colors.danger};
    color: ${internalTheme(props).colors.white};
  `,
  info: (props) => css`
    background-color: ${internalTheme(props).colors.info};
    border-color: ${internalTheme(props).colors.info};
    color: ${internalTheme(props).colors.white};
  `,
  light: (props) => css`
    background-color: ${internalTheme(props).colors.light};
    border-color: ${internalTheme(props).colors.light};
    color: ${internalTheme(props).colors.default};
  `,
  dark: (props) => css`
    background-color: ${internalTheme(props).colors.dark};
    border-color: ${internalTheme(props).colors.dark};
    color: ${internalTheme(props).colors.white};
  `,
  link: (props) => css`
    background-color: transparent;
    border-color: transparent;
    color: ${internalTheme(props).colors.primary};
  `,
};

export const theme = {
  fontFamily: 'sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1.5',
  borderRadius: '.25rem',
  transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8',
    light: '#f8f9fa',
    default: '#212529',
    dark: '#343a40',
    white: '#ffffff',
  },
  variants,
  utils: {
    make,
  },
};

export const themeComposer = (selfTheme) => (ancestorTheme) => ({
  ...ancestorTheme,
  'ux/Button': theme,
});
