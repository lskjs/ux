import styled from 'react-emotion';

export default styled('div')`
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
`;
