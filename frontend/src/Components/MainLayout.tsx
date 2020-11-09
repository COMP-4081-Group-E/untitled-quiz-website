import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

const MainLayout: React.FunctionComponent = ({ children }) => {
  return (<>
    <Header />
    <Container fluid>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  </>);
};

export default MainLayout;