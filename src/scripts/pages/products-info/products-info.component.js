import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './products-info.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';

const ProductsComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="Products Information" />

      <Container>
        <Row className="justify-content-center">
          <Col md={6} xs={12} className="text-center">
            <p>Products Information!</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ProductsComponent;