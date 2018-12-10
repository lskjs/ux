import styled from 'react-emotion';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

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

export const RightSide = styled('div')`
  max-width: 50%;
  text-align: right;
`;

export const LeftSide = styled('div')`
  max-width: 50%;
  text-align: left;
`;
