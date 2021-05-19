import createContextToProps from '@lskjs/utils/createContextToProps';
import { createContext } from 'react';

const Context = createContext(null);

export const { Provider, Consumer } = Context;
export const contextToProps = createContextToProps(Context);

export default Context;
