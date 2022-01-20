/* eslint import/no-extraneous-dependencies: 0 */
import createContextToProps from '@lskjs/utils/createContextToProps';
import React from 'react';

const Context = React.createContext('Modal2');

export const { Provider, Consumer } = Context;
export const contextToProps = createContextToProps(Context);
