import styled, { css } from 'react-emotion';

import removeProps from '../../../utils/removeProps';

const filteredTag = removeProps('section', ['padded', 'paint']);

export default styled(filteredTag)`
    line-height: 2.15em;
    font-size: 12px;
    font-weight: 600;
    ${p => (p.padded && css`
        padding: 12px 20px;
        font-size: 16px;
        border-bottom: 1px solid transparent;
        font-weight: 500;
    `)}
`;
