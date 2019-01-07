import styled from 'react-emotion';

import BsButton from 'antd/lib/button';

export const Title = styled('h1')`
  line-height: 1.3;
  color: ${p => (p.theme.colors.darkGray)};
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  font-family: ${p => p.theme.fontFamily};
  font-size: 2.5rem;
`;

export const Lead = styled('p')`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-family: ${p => p.theme.fontFamily};
`;

export const Button = styled(BsButton)`
  height: auto;
  padding: .6em 3.5em;
  text-transform: uppercase;
  letter-spacing: .5px;
  line-height: 2;
  font-family: ${p => p.theme.fontFamily};
  font-size: .75rem;
`;

export const Muted = styled('div')`
  margin-top: .5rem;
  font-size: .75rem;
  font-family: ${p => p.theme.fontFamily};
  opacity: .7;
  font-style: italic;
`;

export const Wrapper = styled('section')`
  position: relative;
  padding: 5.375rem 0 5.6875rem;
  ${Title} {
    margin-bottom: 1.625rem;
  }
  ${Lead} {
    letter-spacing: .3px;
    opacity: .9;
  }
  text-align: center;
`;
