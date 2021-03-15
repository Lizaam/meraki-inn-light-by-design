import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './terms.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';
import SupportComponent from '../support/support.component';
import PDF from '../../../assets/files/terms.pdf';

const TermsComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="Terms & Conditions" />

      <Container className="pt-4">
        <Row>
          <Col md={12} xs={12}>
            <p>To view our Terms & Conditions, click 
              <a href={PDF} target="blank" className="mx-2 text-dark"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a>
              to view all required information.
            </p>

            <hr className="w-100" />
          </Col>
        </Row>
      </Container>

      <SupportComponent pageView={false} />
    </React.Fragment>
  );
};

export default TermsComponent;