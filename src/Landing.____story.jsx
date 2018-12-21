import React from 'react';
import { Row, Col } from 'reactstrap';
import Callout from './UI/molecules/Callout';
import CalloutRight from './UI/molecules/CalloutRight';
import Cover from './UI/molecules/Cover';
import Feature from './UI/molecules/Feature';
import TestImonialV2 from './UI/molecules/TestImonialV2';
import ThemeInjector from './ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('Landing', module)
    .add('Default', () => (
      <div>123</div>
    ))
    // .add('default', () => (
    //   <ThemeInjector>
    //     <div>
    //       <Cover
    //         image="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/covers/alexandre-perotto-75274-unsplash.jpg"
    //         color="white"
    //         align="center"
    //         full
    //         overlay
    //       >
    //         <Col md={7} lg={6} style={{ margin: 'auto' }}>
    //           <Cover.Title>100+ Components</Cover.Title>
    //           <Cover.SubTitle>
    //             Ant admin is a multi-purpose
    //             template which comes with a
    //             huge collection of components out of box.
    //           </Cover.SubTitle>
    //           <Cover.Divider />
    //           <Cover.Footer>
    //             <Cover.Button type="primary">try it now</Cover.Button>
    //           </Cover.Footer>
    //         </Col>
    //       </Cover>
    //       <h2>Key features</h2>
    //       <Row>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //         <Col md={4} mb={5}>
    //           <Feature
    //             icon="123"
    //             header="RESPONSIVE DESIGN"
    //             content1="mobile-ready design adopt to "
    //             content2="any device"
    //             center="true"
    //           />
    //         </Col>
    //       </Row>
    //       <Callout />
    //       <CalloutRight />
    //       <div>Why React</div>
    //       <div>
    //         <Row>
    //           <Col md={6}>
    //             qweqew
    //           </Col>
    //           <Col md={6}>
    //             qweqew
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col md={6}>
    //             qweqew
    //           </Col>
    //           <Col md={6}>
    //             qweqew
    //           </Col>
    //         </Row>
    //       </div>
    //       <TestImonialV2
    //         avatar="https://picsum.photos/200"
    //         content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat."
    //         name="Jason Bourne"
    //         title="Senior PM"
    //         paint="info"
    //       />
    //     </div>
    //   </ThemeInjector>
    // ))
);
