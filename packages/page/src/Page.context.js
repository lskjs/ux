import { createContext } from 'react';
import createContextToProps from '@lskjs/utils/createContextToProps';

const Context = createContext(null);

export const { Provider, Consumer } = Context;
export const contextToProps = createContextToProps(Context);

export default Context;
