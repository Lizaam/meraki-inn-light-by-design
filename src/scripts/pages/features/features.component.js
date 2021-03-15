import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './features.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';

const FeaturesComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="Features" />

      <Container>
        <Row className="justify-content-center">
          <Col md={6} xs={12} className="text-center">
            <p>Features!</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FeaturesComponent;