import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import './contact.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';
import { SendContactForm } from '../../providers/emails.provider';
import CONSTANTS from '../../modules/constants';

const ContactComponent = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [formValid, setFormValid] = useState(false);

  const HandleFormSubmit = () => {
    const formData = {
      name: name,
      surname: surname,
      email: email,
      number: number,
      message: message
    }

    SendContactForm(formData).then((res) => {
      console.log(res);
    });
  }

  return (
    <React.Fragment>
      <PageIndication page="Contact Us" />

      <Container className="py-4">
        <Row className="mb-3">
          <Col>
            <div>
              <iframe
                src={CONSTANTS.googleSrc.src}
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

            {
              !formValid 
              ?
              <Form>
                <Form.Row>
                  <Col md={6} xs={12}>
                    <Form.Control
                      type="text"
                      id="name"
                      onChange={event => setName(event.target.value)}
                      placeholder="Name" />
                  </Col>
                  <Col md={6} xs={12}>
                    <Form.Control
                      type="text"
                      id="surname"
                      onChange={event => setSurname(event.target.value)}
                      placeholder="Surname" />
                  </Col>
                  <Col md={6} xs={12}>
                    <Form.Control
                      type="email"
                      id="email"
                      onChange={event => setEmail(event.target.value)}
                      placeholder="Email Address" />
                  </Col>
                  <Col md={6} xs={12}>
                    <Form.Control
                      type="number"
                      id="contact-number"
                      onChange={event => setNumber(event.target.value)}
                      placeholder="Contact Number" />
                  </Col>
                  <Col md={12} xs={12}>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      placeholder="Message"
                      className="mb-2"
                      id="message"
                      onChange={event => setMessage(event.target.value)}
                    />
                  </Col>
                  <Col md={12} xs={12}>
                    <Button type="submit" variant={"warning"} className="text-light" onClick={HandleFormSubmit}>
                      Submit
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
              :
              <React.Fragment>
                <h5 className="text-uppercase">Form details sent successfully.</h5>
              </React.Fragment>
            }
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
