import React from 'react';
import createContextToProps from '../utils/createContextToProps';

const Context = React.createContext('PageList');

export const { Provider, Consumer } = Context;
export const contextToProps = createContextToProps(Context);
