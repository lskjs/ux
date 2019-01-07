import React, { PureComponent } from 'react';
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import {
  FormContainer,
  WelcomeHeader,
  FormWrap,
  RememberCheckbox,
  Row,
  Col,
  FormWrapper,
  ImageContainer,
  AdditionalInfo,
} from './LoginScreen.styles';

const FormItem = Form.Item;

class LoginScreen extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <Row>
        <Col lg={6}>
          <ImageContainer image="https://picsum.photos/800?random" />
        </Col>
        <Col lg={6}>
          <FormWrapper>
            <FormContainer>
              <h2>Login to Continue</h2>
              <WelcomeHeader>Welcome back, sign in with your brand account</WelcomeHeader>
              <FormWrap onSubmit={this.handleSubmit}>
                <FormItem>
                  <Input size="large" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                  <Input size="large" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                </FormItem>
                <RememberCheckbox>
                  <Checkbox>Remember me</Checkbox>
                </RememberCheckbox>
                <FormItem>
                  <Button type="primary" htmlType="submit" className="btn-cta btn-block">
                    Log in
                  </Button>
                </FormItem>
              </FormWrap>
              <AdditionalInfo>Don't have an account yet? <a href=''>Sign up</a></AdditionalInfo>
              <AdditionalInfo>Forgot your username or password? <a href="" >Reset password</a></AdditionalInfo>
            </FormContainer>
          </FormWrapper>
        </Col>
      </Row>
    );
  }
}

export default LoginScreen;
