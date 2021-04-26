import React from 'react';
import './page-indication.component.scss';
import { Row, Col, Container } from 'react-bootstrap';

const PageIndication = (props) => {
  return (
    <Container fluid id="c-3">
      <Row className="py-4 h-25 justify-content-center">
        <Col md={6} className="text-center">
          <h3 className="text-uppercase p-i-header mb-3">{ props.page }</h3>
          <p className="text-uppercase p-i-text text-small">{`Home / ` + props.page}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PageIndication;