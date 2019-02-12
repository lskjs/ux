export { default as Table } from './Table';
export { default as Row } from './TableRow';
export { default as Col } from './TableCol';
export const createIndex = () => { let index = 0; return () => index++ } //eslint-disable-line