import styled from 'react-emotion';
import { Row as BsRow, Col as BsCol } from 'reactstrap';
import { Form, Button } from 'antd';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

const FormItem = Form.Item;

export const RememberCheckbox = styled(FormItem)`
  margin-bottom: 1.25rem;
`;

export const FormButton = styled(Button)`
  height: auto;
  padding: .6em 3.5em;
  text-transform: uppercase;
  letter-spacing: .5px;
  line-height: 2;
  font-size: .875em;
  display: block;
  width: 100%;
`;


export const AdditionalInfo = styled('p')`
  font-size: 0.875rem;
  margin-bottom: 0;
  line-height: 1.5rem;
`;

export const WelcomeHeader = styled('p')`
  margin-bottom: 1.5rem;
  text-align: center;
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

`;

export const FormH2 = styled('h2')`
  text-align: center;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

export const FormA = styled(dynamicTag)`
  &:not(.btn) {
    color: rgba(0, 0, 0, 0.87);
    text-decoration: underline;
  }
  &:not(.btn):hover {
    color: ${p => p.theme.ui.colors.primary};
  }
`;

export const FormContainer = styled('section')`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${FormH2} + ${FormWrap},
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
  min-height: 300px;
`;

export const FormWrapper = styled('div')`
  padding: 3rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

