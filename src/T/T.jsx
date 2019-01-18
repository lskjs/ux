import { inject } from 'mobx-react';

const T = inject('t')(({ t, name }) => t(name));

export default T;
