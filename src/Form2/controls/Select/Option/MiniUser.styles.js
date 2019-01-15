import styled from 'react-emotion';

import { createDynamicTag } from '../../../../utils';

const dynamicTag = createDynamicTag('div');

export const Title = styled('div')`
  font-family: ${p => p.theme.fontFamily};
  font-size: 11px;
  letter-spacing: -0.1px;
  text-align: left;
  color: #9b9b9b;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AvatarWrapper = styled('div')`
  margin-right: 8px;
  flex-shrink: 0;
  display: flex;
  > div {
    display: flex !important;
  }
`;

export const Block = styled(dynamicTag)`
  display: flex;
  align-items: center;
  overflow: hidden;
  ${p => (p.normal && `
    ${Title} {
      font-size: 13px;
      line-height: 1.43;
      color: #4a4a4a;
    }
  `)}
  ${p => (p.tiny && `
    ${Title} {
      font-size: 10px;
      line-height: 1.8;
      text-align: left;
      color: #4a4a4a;
    }
    ${AvatarWrapper} {
      margin-right: 4px;
      > div {
        margin-top: -4px;
      }
    }
  `)}
`;
