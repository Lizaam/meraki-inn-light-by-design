import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './support.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';
import PropTypes from 'prop-types';

const SupportComponent = (props) => {
  return (
    <React.Fragment>
      {props.pageView ? <PageIndication page="Support" /> : '' }

      <Container className="py-4 support-container">
        <div className="d-block">
          <i className="fa fa-check-circle float-left" aria-hidden="true"></i>
          <h5 className="text-uppercase">24/7 Customer Support</h5>
        </div>

        <p>Our customer support department is ready to come to your aid in a 24/7 manner, be your request in a form on email ticket or a phone call... We have a team of professional managers who will consult you regarding any technical, in-stock or billing question you might have. Also, should there be any problems with the delivery or if you would want to file a return, we will help you as well!</p>

        <hr className="w-100" />

        <h5 className="mb-4 font-weight-light">Have Any Questions?</h5>

        <Row className="text-center">
          <Col md={6}>
            <Link 
              to="/contact" 
              className="text-decoration-none text-dark"
              data-item="nav-item-contact"
              onClick={props.handleNavItem}>
              <div className="border w-100 p-5">
                <i className="fa fa-phone support-icon" aria-hidden="true"></i>
                <h3>Call Us</h3>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <Link 
              to="/contact" 
              className="text-decoration-none text-dark"
              data-item="nav-item-contact"
              onClick={props.handleNavItem}>
              <div className="border w-100 p-5">
                <i className="fa fa-envelope support-icon" aria-hidden="true"></i>
                <h3>Email Us</h3>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

SupportComponent.propTypes = {
  pageView: PropTypes.bool.isRequired
};

export default SupportComponent;