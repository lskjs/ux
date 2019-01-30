import { inject } from 'mobx-react';

const T = inject('i18')(({ i18, name, ...props }) => i18.t(name, props));

export default T;
