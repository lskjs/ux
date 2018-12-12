import styled from 'react-emotion';
import { Row as BsRow, Col as BsCol } from 'reactstrap';
import { Form, Icon, Button } from 'antd';

const FormItem = Form.Item;

export const RememberCheckbox = styled(FormItem)`

`;

export const FormButton = styled(Button)`
 
`;

export const Lock = styled(Icon)`

`;

export const User = styled(Icon)`

`;

export const AdditionalInfo = styled('p')`
  
`;

export const WelcomeHeader = styled('p')`
  
`;

export const InputItem = styled(FormItem)`
  padding-left: 30px;
  min-height: 100%;
  position: static;
  padding: 6px 11px;
  height: 40px;
  font-size: 16px;
`;

export const FormWrap = styled(Form)`
  ${RememberCheckbox} {
    margin-bottom: 1.25rem;
  }
`;

export const FormContainer = styled('section')`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2, p {
    text-align: center;
  }

  h2 {
    font-weight: 300;
    margin-bottom: 1.5rem;
  }
  ${WelcomeHeader} {
    margin-bottom: 1.5rem;
  }
  a:not(.btn) {
    color: rgba(0, 0, 0, 0.87);
    text-decoration: underline;
  }
  a:not(.btn):hover {
    color: ${p => p.theme.ui.colors.primary};
  }
  ${AdditionalInfo} {
    font-size: 0.875rem;
    margin-bottom: 0;
    line-height: 1.5rem;
  }
  h2 + ${FormWrap},
  ${WelcomeHeader} + ${FormWrap} {
    margin-top: 2.5rem;
  }
`;

export const Row = styled(BsRow)`
  height: 100vh;
  margin-left: 0;
  margin-right: 0;
`;

export const Col = styled(BsCol)`
  padding-left: 0;
  padding-right: 0;
`;

export const ImageContainer = styled('div')`
  background-image: ${p => `url(${p.image})`};
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

export const FormWrapper = styled('div')`
  padding: 3rem 8rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

