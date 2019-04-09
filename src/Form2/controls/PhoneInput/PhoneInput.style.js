import styled from 'react-emotion';

const Container = styled.div`
  .react-tel-input {
    font-family: ${props => props.theme.fontFamily};;
    }
  .react-tel-input .flag-dropdown:hover .selected-flag{ 
    background: none; 
  }
  .react-tel-input .flag-dropdown:hover .selected-flag{ 
    background: none; 
  }
  .react-tel-input .flag-dropdown.open-dropdown .selected-flag{
    background: none; 
  }
  .react-tel-input .country-list .country {
    padding: 0px 10px;
    font-weight: normal;
  }
  .country-name {
    font-weight: normal;
  }
  .react-tel-input .country-list {
    margin: 0px;
  }
`;

export default Container;
