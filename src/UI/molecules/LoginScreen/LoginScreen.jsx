import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {
  FormContainer,
  WelcomeHeader,
  FormWrap,
  RememberCheckbox,
  Row,
  Col,
  FormWrapper,
  ImageContainer,
} from './LoginsScreen.styles';

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
              <p className="additional-info">Don't have an account yet? <a href="">Sign up</a></p>
              <p className="additional-info">Forgot your username or password? <a href="" >Reset password</a></p>
            </FormContainer>
          </FormWrapper>
        </Col>
      </Row>
    );
  }
}

export default LoginScreen;
