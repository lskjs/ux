import React from 'react';
import { Row, Col } from 'reactstrap';
import AccountIcon from 'react-icons2/mdi/account';
import Slide from './Slide';
import Button from './Button';
import Callout from './UI/molecules/Callout';
import CalloutRight from './UI/molecules/CalloutRight';
import Cover from './UI/molecules/Cover';
import Feature from './UI/molecules/Feature';
import TestImonialV2 from './UI/molecules/TestImonialV2';
import CTAInline from './UI/molecules/CTAInline';
import ThemeInjector from './ThemeInjector';
import Input from './UI/atoms/Input';
import InputContainer from './UI/atoms/InputContainer';
import Container from './UI/atoms/Container';


module.exports = ({ storiesOf }) => (
  storiesOf('Landing', module)
    .add('Default', () => (
      <ThemeInjector>
        <div>
          <Cover
            image="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/covers/alexandre-perotto-75274-unsplash.jpg"
            color="white"
            align="center"
            full
            overlay
          >
            <Col md={7} lg={6} style={{ margin: 'auto' }}>
              <Cover.Title>100+ Components</Cover.Title>
              <Cover.SubTitle>
                Ant admin is a multi-purpose
                template which comes with a
                huge collection of components out of box.
              </Cover.SubTitle>
              <Cover.Divider />
              <Cover.Footer>
                <Cover.Button type="primary">try it now</Cover.Button>
              </Cover.Footer>
            </Col>
          </Cover>
          <Slide center color="#f5f5f5">
            <Container>
              <section style={{
                marginBottom: '4rem',
                fontSize: '2rem',
                textAlign: 'center',
                fontWeight: 400,
                color: 'black',
                }}
              >
                Key features
              </section>
              <Row>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
                <Col md={4} style={{ marginBottom: '3rem' }}>
                  <Feature
                    icon={<AccountIcon />}
                    header="RESPONSIVE DESIGN"
                    content1="mobile-ready design adopt to "
                    content2="any device"
                    center="true"
                  />
                </Col>
              </Row>
            </Container>
          </Slide>
          <Callout />
          <CalloutRight />
          <Slide center color="#f5f5f5">
            <Container>
              <section style={{
                marginBottom: '4rem',
                fontSize: '2rem',
                textAlign: 'center',
                fontWeight: 400,
                color: 'black',
                }}
              >
                Why React
              </section>
              <Row>
                <Col md={6} style={{ padding: '1rem 3rem' }}>
                  <h4
                    style={{
                      marginBottom: '.6em',
                      fontSize: '21px',
                      lineHeight: '1.6em',
                      fontWeight: 400,
                      textAlign: 'left',
                    }}
                  >
                    Develop Across All Platforms
                  </h4>
                  <p style={{ fontSize: '1rem', opacity: '.8', textAlign: 'left' }} >
                    Learn one way to build applications with
                    React and reuse your code and abilities to build apps for any
                    deployment target. For web, mobile web, native mobile and native desktop.
                    Declarative views make your code more predictable and easier to debug.
                  </p>
                </Col>
                <Col md={6} style={{ padding: '1rem 3rem' }}>
                  <h4
                    style={{
                      marginBottom: '.6em',
                      fontSize: '21px',
                      lineHeight: '1.6em',
                      fontWeight: 400,
                      textAlign: 'left',
                    }}
                  >
                    Develop Across All Platforms
                  </h4>
                  <p style={{ fontSize: '1rem', opacity: '.8', textAlign: 'left' }} >
                    Learn one way to build applications with
                    React and reuse your code and abilities to build apps for any
                    deployment target. For web, mobile web, native mobile and native desktop.
                    Declarative views make your code more predictable and easier to debug.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6} style={{ padding: '1rem 3rem' }}>
                  <h4
                    style={{
                      marginBottom: '.6em',
                      fontSize: '21px',
                      lineHeight: '1.6em',
                      fontWeight: 400,
                      textAlign: 'left',
                    }}
                  >
                    Develop Across All Platforms
                  </h4>
                  <p style={{ fontSize: '1rem', opacity: '.8', textAlign: 'left' }} >
                    Learn one way to build applications with
                    React and reuse your code and abilities to build apps for any
                    deployment target. For web, mobile web, native mobile and native desktop.
                    Declarative views make your code more predictable and easier to debug.
                  </p>
                </Col>
                <Col md={6} style={{ padding: '1rem 3rem' }}>
                  <h4
                    style={{
                      marginBottom: '.6em',
                      fontSize: '21px',
                      lineHeight: '1.6em',
                      fontWeight: 400,
                      textAlign: 'left',
                    }}
                  >
                    Develop Across All Platforms
                  </h4>
                  <p style={{ fontSize: '1rem', opacity: '.8', textAlign: 'left' }} >
                    Learn one way to build applications with
                    React and reuse your code and abilities to build apps for any
                    deployment target. For web, mobile web, native mobile and native desktop.
                    Declarative views make your code more predictable and easier to debug.
                  </p>
                </Col>
              </Row>
            </Container>
          </Slide>
          <Slide center color="#343a40">
            <Row style={{ padding: '45px 0' }}>
              <Col md={{ size: 6, offset: 3 }}>
                <TestImonialV2
                  avatar="https://picsum.photos/200"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat."
                  name="Jason Bourne"
                  title="Senior PM"
                  paint="info"
                />
              </Col>
            </Row>
          </Slide>
          <Slide center image="http://iarouse.com/dist-react-ant-design/landing/images/covers/bench-accounting-49909-unsplash-lg.jpg">
            <section style={{
                padding: '45px 0',
              }}
            >
              <h2
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  fontSize: '2rem',
                  fontWeight: 200,
                  colot: 'black',
                }}
              >
                Get Notified When We Update!
              </h2>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Email"
                />
              </InputContainer>
              <div style={{ marginTop: '20px' }}>
                <Button type="primary">Subscribe</Button>
              </div>
            </section>
          </Slide>
          <Slide center color="#1890ff">
            <div style={{ padding: '30px 4em' }}>
              <Col
                lg={8}
                style={{
                  color: 'white',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  maxWidth: '54%',
                }}
              >
                <CTAInline title="Try it now, get up and running in minutes." buttonText="Download Ant" />
              </Col>
            </div>
          </Slide>
          <Slide center color="#263237">
            <div style={{ position: 'relative', padding: '30px 0', fontSize: '12px' }}>
              <p style={{ color: '#7a859e', margin: 0 }} >
                Copyright
              </p>
            </div>
          </Slide>
        </div>
      </ThemeInjector>
    ))
);
