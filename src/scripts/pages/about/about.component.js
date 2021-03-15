import React from 'react';

// Libraries
import { Container, Row, Col } from 'react-bootstrap';

// Styles
import './about.component.scss';

// Component
import PageIndication from '../../components/page-indication/page-indication.component';
import AboutImg from '../../../assets/images/about-bg.jpg';

const AboutComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="About Us" />

      <Container className="py-4">
        <Row>
          <Col md={6} xs={12} className="about-details-left">
            <h5 className="text-uppercase">About Meraki Innovations</h5>
              <p className="my-4">At Meraki Innovations, we have a passion for unique and creative lighting designing. We are determined to bring you the best in custom lighting designed chandeliers, so you’ll always be able to find something you adore.
              <br /><br />
              Our designs is truly a sight for discovering unique lighting. Browse through our site now and see all that we have to offer.
            </p>

            <ul className="list-unstyled about-list">
              <li><i className="fa fa-chevron-right mr-2"></i> Quality Grade Materials</li>
              <li><i className="fa fa-chevron-right mr-2"></i> Industry Standard Designs</li>
              <li><i className="fa fa-chevron-right mr-2"></i> Friendly Services</li>
              <li><i className="fa fa-chevron-right mr-2"></i> Fast/Reliable Delivery</li>
            </ul>
          </Col>
          <Col md={6} xs={12}>
            <img src={AboutImg} width="100%" alt="about-preview" />
          </Col>
        </Row>
        <Row className="text-center about-figures px-5 py-3">
          <Col md={3} xs={6}>
            <h2>50</h2>
            <hr className="w-25 mx-auto" />
            <small className="text-uppercase">Hours per week</small>
          </Col>
          <Col md={3} xs={6}>
            <h2>2019</h2>
            <hr className="w-25 mx-auto" />
            <small className="text-uppercase">Established</small>
          </Col>
          <Col md={3} xs={6}>
            <h2>18</h2>
            <hr className="w-25 mx-auto" />
            <small className="text-uppercase">Designs Completed</small>
          </Col>
          <Col md={3} xs={6}>
            <h2>30</h2>
            <hr className="w-25 mx-auto" />
            <small className="text-uppercase">Daily Requests</small>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AboutComponent;