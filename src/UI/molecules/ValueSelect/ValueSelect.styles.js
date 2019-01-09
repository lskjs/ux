import styled from 'react-emotion';


export const Option = styled('div')`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border: none;
  position: absolute;
  padding: 8px;
  padding-top: ${p => (p.image ? '2px' : '8px')};

  font-family: ${p => p.theme.fontFamily};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  height: 80px;
  letter-spacing: -0.1px;
  color: #4a4a4a;
`;

export const Image = styled('img')`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const Title = styled('div')`
  margin-left: ${p => (p.image ? '8px' : '0px')};
`;
