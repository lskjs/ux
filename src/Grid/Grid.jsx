import React from 'react';

import GridAtom from '../UI/atoms/Grid';
import RowAtom from '../UI/atoms/Row';
import ColAtom from '../UI/atoms/Col';

const Grid = props => React.createElement(GridAtom, props);

Grid.Row = RowAtom;
Grid.Col = ColAtom;

export { RowAtom as Row, ColAtom as Col };
export default Grid;
