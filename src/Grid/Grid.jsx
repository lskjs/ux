import React from 'react';

import GridAtom from '../UI/atoms/Grid';
import RowAtom from '../UI/atoms/Row';
import ColAtom from '../UI/atoms/Col';

const Container = props => React.createElement(GridAtom, props);

Container.Row = RowAtom;
Container.Col = ColAtom;

export { GridAtom as Container, RowAtom as Row, ColAtom as Col };
export default { Container, Row: RowAtom, Col: ColAtom };
