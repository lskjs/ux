import styled from 'react-emotion';
import { removeProps } from '../../../utils';

export const Option = styled('button')`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border: none;
  height: 48px;
  padding-left: 8px;

  font-family: ${p => p.theme.fontFamily};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.6;
  letter-spacing: -0.1px;
  color: #4a4a4a;
  &:hover {
    transition: .3s ease-in;
    background-color: #f0f0ff;
    color: #7070ff;
  }

`;

export const Image = styled('img')`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;


export const Title = styled('div')`
  margin-left: ${p => (p.image ? '2px' : '4px')};
`;

const filteredTag = removeProps('div', ['color']);
export const IconWrapper = styled(filteredTag)`
  font-size: 24px;
  margin-right: 8px;
  color: ${p => p.color};
  display: inline-flex;
  margin-left: ${p => (p.image ? '8px' : '4px')};
`;
