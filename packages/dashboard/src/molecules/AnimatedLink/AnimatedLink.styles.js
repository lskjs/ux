import styled, { css } from 'react-emotion';
import Icon from 'antd/lib/icon';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';


const dynamicTag = createDynamicTag('a');
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

export const ALink = styled(filteredTag)`
  position: relative;
  display: inline-block;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  text-decoration: none;
  color: ${paintColors};
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: ${paintColors};
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }

  &:after {
    display: block;
    width: 0;
    height: 2px;
    transition: width .25s;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    transition: width .25s;
    background: ${paintColors};
    ${p => (p.paint === 'primary' && css`
      border-color: ${getTheme(p.theme, 'colors.primary')};
    `)}
  }
`;

export const AIcon = styled(Icon)`
  position: relative;
  top: 1px;
  padding-left: 6px;
  font-size: 85%;
`;
