import Button from '@lskjs/button';
import ButtonGroup from '@lskjs/button/ButtonGroup';
import Button2 from '@lskjs/button2';
import { Col, Container, Row } from '@lskjs/grid';
import Image from '@lskjs/image';
import Link from '@lskjs/link';
import { GlobalStyles, Nav, Navbar, NavDropdown } from '@lskjs/navbar';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { H1, H2, P } from '@lskjs/typo';
import { ChipItem } from '@lskjs/ui2';
import { isDev } from '@lskjs/utils/env';
import React from 'react';

import Slide from '../components/Slide';

const user = {
  name: 'Igor Suvorov',
};

// video={isDev ? null : 'https://demo.syndicad.com/bg.webm'}
// image="https://syndicad.com/c82aa481daa4b9038342b922678e33dc.jpg"
// style={{color: 'white'}}
export const HomeIndexPage = ({ about = {} }) => (
  <Page layout={Page.HomeLayout}>
    <GlobalStyles />
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">LSK.js</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <>
              <Nav className="mr-auto" activeKey="/admin">
                <Nav.Link as={Link} href="/cabinet">
                  <T name="pages.cabinet.title" />
                </Nav.Link>
                <Nav.Link as={Link} href="/admin">
                  <T name="pages.admin.title" />
                </Nav.Link>
              </Nav>
              <NavDropdown title={<ChipItem size={24} item={user} />} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} href="/auth/logout">
                  <T name="pages.authLogout.title" />
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Nav.Link as={Link} href="/auth/login">
                <T name="pages.authLogin.title" />
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
      </Navbar.Collapse>
    </Navbar>

    {/* <Slide sty> */}
    {/* ?https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/landing-1.png */}
    <div style={{ background: '#5e72e4' }}>
      <Container>
        <Row>
          <Col md={6}>
            <H1 style={{ color: 'white' }}>Argon Dashboard PRO</H1>
            <H2 style={{ color: 'white' }}>A beautiful premium dashboard for Bootstrap 4.</H2>
            <P style={{ color: 'white' }}>
              Argon perfectly combines reusable HTML and modular CSS with a modern styling and beautiful markup
              throughout each HTML template in the pack.
            </P>
            <ButtonGroup>
              <Button paint="secondary">Explore Dashboard</Button>
              <Button paint="primary">Purchase now</Button>
            </ButtonGroup>
          </Col>
          <Col md={6}>
            <Image src="https://bothelp.io/wp-content/uploads/2020/04/glavnaya_kofejnya_new_eng-1-1.png" />
          </Col>
        </Row>
      </Container>
    </div>

    <div style={{ background: '#172b4d' }}>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <H1 style={{ color: 'white' }}>A complete HTML solution</H1>
            <P style={{ color: 'white' }}>
              Argon is a completly new product built on our newest re-built from scratch framework structure that is
              meant to make our products more intuitive, more adaptive and, needless to say, so much easier to
              customize. Let Argon amaze you with its cool features and build tools and get your project to a whole new
              level.
            </P>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ background: '#e9ecef' }}>
      <Container>
        <Row>
          <Col md={6}>
            <Image src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/landing-1.png" />
          </Col>
          <Col md={6}>
            <H2>A beautiful premium dashboard for Bootstrap 4.</H2>
            <P>
              A complete HTML solution Argon is a completly new product built on our newest re-built from scratch
              framework structure that is meant to make our products more intuitive, more adaptive and, needless to say,
              so much easier to customize. Let Argon amaze you with its cool features and build tools and get your
              project to a whole new level.
            </P>
            <ButtonGroup>
              <Button paint="secondary">Explore Dashboard</Button>
              <Button paint="primary">Purchase now</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ background: '#fff' }}>
      <Container>
        <Row>
          <Col md={6}>
            <H1>Argon Dashboard PRO</H1>
            <H2>A beautiful premium dashboard for Bootstrap 4.</H2>
            <P>
              Argon perfectly combines reusable HTML and modular CSS with a modern styling and beautiful markup
              throughout each HTML template in the pack.
            </P>
            <ButtonGroup>
              <Button paint="secondary">Explore Dashboard</Button>
              <Button paint="primary">Purchase now</Button>
            </ButtonGroup>
          </Col>
          <Col md={6}>
            <Image src="https://camo.githubusercontent.com/65eff6a766103188a84f45be313b12ea51e0fbcc3a82691aec2132094854d511/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f637265617469766574696d5f6275636b65742f70726f64756374732f39362f6f726967696e616c2f6f70745f61645f7468756d626e61696c2e6a7067" />
          </Col>
        </Row>
      </Container>
    </div>
    {/* </Slide> */}
    <Slide
      video={isDev ? null : 'https://demo.syndicad.com/bg.webm'}
      image="https://syndicad.com/c82aa481daa4b9038342b922678e33dc.jpg"
    >
      <div>
        <H1
          style={{
            color: '#fff',
          }}
        >
          {about.title}
          {about.v && <sup>{about.v}</sup>}
        </H1>
        <H2
          style={{
            color: '#fff',
          }}
        >
          {about.description}
        </H2>
        <br />
        <ButtonGroup padded style={{ marginTop: 30, width: 400 }}>
          <Button componentClass={Link} paint="primary" href="/cabinet">
            <T name="pages.cabinet.title" />
          </Button>
          {about.blog && (
            <Button componentClass={Link} href="/blog">
              Read Blog
            </Button>
          )}
          {about.github && (
            <Button componentClass={Link} href={about.github} target="_blank">
              GitHub
            </Button>
          )}
        </ButtonGroup>
      </div>
    </Slide>
  </Page>
);

HomeIndexPage.propTypes = {
  about: Object,
};

export default HomeIndexPage;
