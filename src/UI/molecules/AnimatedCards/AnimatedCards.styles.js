import styled, { css } from 'react-emotion';
import Icon from 'antd/lib/icon';
import createDynamicTag from '../../../utils/createDynamicTag';
import removeProps from '../../../utils/removeProps';


const dynamicTag = createDynamicTag('div');
const filteredTag = removeProps(dynamicTag, [
  'paint',
]);

const paintColors = (p) => {
  const { colors } = p.theme;
  switch (p.paint) {
    case 'primary':
      return colors.primary;
    default:
      return colors.default;
  }
};

export const ACard = styled(filteredTag)`
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;

  &:before, &:after {
    content: '';
    position: absolute;
    transition: width .25s;
    background: ${paintColors};
    ${p => (p.paint === 'primary' && css`
      border-color: ${p.theme.colors.primary};
    `)}
  }
`;

export const AIcon = styled(Icon)`
  position: relative;
  top: 1px;
  padding-left: 6px;
  font-size: 85%;
`;
