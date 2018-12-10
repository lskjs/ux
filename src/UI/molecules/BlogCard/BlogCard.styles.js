import styled from 'react-emotion';

export const Wrapper = styled('article')`
  border: 1px solid ${p => p.theme.ui.colors.border};
  background: ${p => p.theme.ui.colors.white};
  border-radius: ${p => p.theme.ui.borderRadius};
  overflow: hidden;
`;

export const Img = styled('img')`
  width: 100%;
  max-width: 100%;
`;

export const Body = styled('div')`
  border-radius: 0 0 
    ${p => p.theme.ui.borderRadius} ${p => p.theme.ui.borderRadius};
  padding: 1.625rem;
`;

export const Date = styled('span')`
  opacity: .7;
`;

export const Title = styled('h4')`
  line-height: 1.625rem;
  font-size: 1em;
  margin: 5px 0;
  font-weight: 500;
  color: ${p => p.theme.ui.colors.default};
`;


export const FlexContainer = styled('div')`
  @media screen and (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    align-items: stretch;
  }
`;

export const FlexItem = styled('div')`
   @media screen and (min-width: 992px) {
    flex: 0 1 calc(50% - 1em);
    margin-left: 1em;
    margin-right: 1em;

    &:nth-child(2n+1) {
      margin-left: 0;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
   }
   @media screen and (min-width: 1200px) {
    flex: 0 1 calc(33% - 2em);
    margin-left: 1.5em;
    margin-right: 1.5em;

    &:nth-child(2n+1) {
      margin-left: 1.5em;
    }
    &:nth-child(2n) {
      margin-right: 1.5em;
    }

    &:nth-child(3n+1) {
      margin-left: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
   }
`;
