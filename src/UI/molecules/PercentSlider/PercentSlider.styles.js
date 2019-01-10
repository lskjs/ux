import styled from 'react-emotion';

export const Value = styled('div')`
  padding: 10px;
  font-size: 20px;
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.primary};
`;

export const SliderWrapper = styled('div')`
  width: 100%;
  .ant-slider .ant-slider-track {
    background-color: ${p => p.theme.colors.primary};
  }
  .ant-slider .ant-slider-handle {
    border: solid 2px ${p => p.theme.colors.primary};
  }
`;

