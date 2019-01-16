import styled from 'react-emotion';

export const Card = styled('div')`
  background-color: #efefef;
  padding: 16px;
  display: block;
`;

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled('div')`
  font-family: ${p => p.theme.fontFamily};
  font-weight: 400;
  font-size: 25px;
  padding: 4px;
  color: #2b3032;
  text-align: center;
`;

export const Position = styled('div')`
  color: #343434;
  font-size: 14px;
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;


export const Content = styled('div')`
  color: #a2a3a8;
  text-align: center;
  padding: 10px;
  line-height: 1.4;
`;

export const Footer = styled('div')`
  color: #343434;
  font-size: 16px;
  padding: 5px;
  text-align: center;
`;

