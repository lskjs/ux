import { css, SerializedStyles, Theme } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

const PACKAGE_THEME_KEY = Symbol.for('#ux/button');

const make = (object: { [key: string]: SerializedStyles }, prop: string, fallback: string = 'default') => {
  const isValid = Object.keys(object).includes(prop);
  return object[isValid ? prop : fallback];
};

export const internalTheme = (props: { theme: Theme }) => props.theme[PACKAGE_THEME_KEY];

const genGenericVariant = (props: { theme: Theme }, name: string): SerializedStyles => css`
  background-color: ${internalTheme(props).colors[name].normal};
  border-color: ${internalTheme(props).colors[name].normal};
  color: ${internalTheme(props).colors[name].text};
  &:focus {
    box-shadow: 0 0 0 0.2rem ${internalTheme(props).colors[name].ring};
  }
  &:focus,
  &:hover {
    background-color: ${internalTheme(props).colors[name].hover};
    border-color: ${internalTheme(props).colors[name].active};
  }
  &:active {
    background-color: ${internalTheme(props).colors[name].active};
    border-color: ${internalTheme(props).colors[name].darker};
  }
`;

export const colorSchema = {
  primary: {
    colors: {
      text: '#fff',
      normal: '#007bff',
      hover: '#0069d9',
      active: '#0062cc',
      darker: '#005cbf',
      ring: 'rgba(38,143,255,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'primary'),
  },
  secondary: {
    colors: {
      text: '#fff',
      normal: '#6c757d',
      hover: '#5a6268',
      active: '#545b62',
      darker: '#4e555b',
      ring: 'rgba(130,138,145,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'secondary'),
  },
  success: {
    colors: {
      text: '#fff',
      normal: '#28a745',
      hover: '#218838',
      active: '#1e7e34',
      darker: '#1c7430',
      ring: 'rgba(72,180,97,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'success'),
  },
  warning: {
    colors: {
      text: '#fff',
      normal: '#ffc107',
      hover: '#e0a800',
      active: '#d39e00',
      darker: '#c69500',
      ring: 'rgba(222,170,12,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'warning'),
  },
  danger: {
    colors: {
      text: '#fff',
      normal: '#dc3545',
      hover: '#c82333',
      active: '#bd2130',
      darker: '#b21f2d',
      ring: 'rgba(225,83,97,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'danger'),
  },
  info: {
    colors: {
      text: '#fff',
      normal: '#17a2b8',
      hover: '#138496',
      active: '#117a8b',
      darker: '#10707f',
      ring: 'rgba(58,176,195,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'info'),
  },
  light: {
    colors: {
      text: '#212529',
      normal: '#f8f9fa',
      hover: '#e2e6ea',
      active: '#dae0e5',
      darker: '#d3d9df',
      ring: 'rgba(216,217,219,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'light'),
  },
  dark: {
    colors: {
      text: '#fff',
      normal: '#343a40',
      hover: '#23272b',
      active: '#1d2124',
      darker: '#171a1d',
      ring: 'rgba(82,88,93,.5)',
    },
    style: (props: { theme: Theme }) => genGenericVariant(props, 'dark'),
  },
  link: {
    colors: {
      normal: '#007bff',
      hover: '#0056b3',
      ring: 'rgba(0,123,255,.25)',
    },
    style: (props: { theme: Theme }) => css`
      background-color: transparent;
      border-color: transparent;
      color: ${internalTheme(props).colors.link.normal};
      &:focus,
      &:hover {
        text-decoration: underline;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem ${internalTheme(props).colors.link.ring};
      }
      &:hover {
        color: ${internalTheme(props).colors.link.hover};
      }
    `,
  },
};

const sizes = {
  large: (props: { theme: Theme }) => css`
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: ${internalTheme(props).fontWeight};
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
  `,
  medium: (props: { theme: Theme }) => css`
    font-size: 1rem;
    line-height: 1.5;
    font-weight: ${internalTheme(props).fontWeight};
    border-radius: 0.25rem;
    padding: 0.375rem .75rem;
  `,
  small: (props: { theme: Theme }) => css`
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: ${internalTheme(props).fontWeight};
    border-radius: 0.2rem;
    padding: 0.25rem 0.5rem;
  `,
};

export const theme = {
  fontFamily: 'sans-serif',
  fontWeight: 400,
  transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
  variants: {},
  colors: {},
  sizes: {},
  utils: {
    make,
  },
};

interface Colors {
  [key: string]: string;
}

export interface ColorSchema {
  colors: Colors;
  style: (props: ComponentPropsWithoutRef<any>) => SerializedStyles;
}

export function addSize(schema: SerializedStyles, name: string) {
  if (!name || !schema) return;
  theme.sizes[name] = schema;
};

export function addColorSchema(schema: ColorSchema, name: string) {
  if (!name || !schema) return;
  if (schema.colors) theme.colors[name] = schema.colors;
  if (schema.style) theme.variants[name] = schema.style;
};

Object.keys(sizes).forEach((schemaName) => {
  addSize(sizes[schemaName], schemaName);
});

Object.keys(colorSchema).forEach((schemaName) => {
  addColorSchema(colorSchema[schemaName], schemaName);
});

export const themeComposer = (selfTheme: Theme) => (ancestorTheme: Theme) => ({
  ...ancestorTheme,
  [PACKAGE_THEME_KEY]: selfTheme,
});
