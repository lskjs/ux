import { injectGlobal, css } from 'react-emotion';

export const highlightedStyle = css`
  background-color: #e6f7ff;
  border-radius: 2px;
  outline: 5px solid #e6f7ff;
  &:not(:focus) {
    color: black;
  }
`;

export const calendarStyles = () => injectGlobal`
  .react-calendar__tile--active {
    background: #006edc;
    color: white !important;
  }
`;
