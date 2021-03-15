import React from 'react';

// Libraries
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

// Styles
import './contact.component.scss';

// Components
import PageIndication from '../../components/page-indication/page-indication.component';

const ContactComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="Contact Us" />

      <Container className="py-4">
        <Row className="mb-3">
          <Col>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.7948409665373!2d18.551015214781184!3d-33.94640443052128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b3bcce3cfa5%3A0x6c7dae69f66ecf7!2s42%20Kameeldoring%20Street%2C%20Bonteheuwel%2C%20Cape%20Town%2C%207764!5e0!3m2!1sen!2sza!4v1591617549743!5m2!1sen!2sza"
                width="100%"
                height="300px"
                frameBorder="none"
                title="map"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} className="contact-form-left">
            <h5 className="text-uppercase">Contact Us</h5>
            <p className="my-3">
              Get in touch with us for inquiries or business proposals, and
              we'll get back to you!
            </p>

            <Form>
              <Form.Row>
                <Col md={6} xs={12}>
                  <Form.Control placeholder="Name & Surname" />
                </Col>
                <Col md={6} xs={12}>
                  <Form.Control placeholder="Email Address" />
                </Col>
                <Col md={6} xs={12}>
                  <Form.Control placeholder="Contact Number" />
                </Col>
                <Col md={6} xs={12}>
                  <Form.Control placeholder="Subject" />
                </Col>
                <Col md={12} xs={12}>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    placeholder="Message"
                    className="mb-2"
                  />
                </Col>
                <Col md={12} xs={12}>
                  <Button variant={"warning"} className="text-light">
                    Submit
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
          <Col md={6} xs={12}>
            <p className="font-weight-bold text-uppercase">All About Designs</p>
            <p className="mb-4">
              We are an experienced company specializing in custom designing
              such as chandeliers, lamps, and candle holders. With proven
              expertise in these categories, we can work together to create a
              beautiful decor element for your home, business, or showroom.
            </p>

            <ListGroup>
              <ListGroup.Item className="p-0 contact-list-group-line-height">
                <i
                  className="fa fa-map-marker list-group-fa-icon"
                  aria-hidden="true"
                ></i>
                <small className="font-weight-bold">Address:</small>
                <br />
                <small className="mb-0">
                  42 Kameeldoring Street, Bonteheuwel, 7764
                </small>
              </ListGroup.Item>
              <ListGroup.Item className="p-0 contact-list-group-line-height">
                <i
                  className="fa fa-phone list-group-fa-icon"
                  aria-hidden="true"
                ></i>
                <small className="font-weight-bold">Contact:</small>
                <br />
                <small className="mb-0">+27 (82) 467-5389</small>
              </ListGroup.Item>
              <ListGroup.Item className="p-0 contact-list-group-line-height">
                <i
                  className="fa fa-envelope list-group-fa-icon"
                  aria-hidden="true"
                ></i>
                <small className="font-weight-bold">Email Address:</small>
                <br />
                <a href="info@merakiinnovations.co.za">
                  info@merakiinnovations.co.za
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ContactComponent;
