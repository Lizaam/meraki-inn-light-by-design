import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import './faqs.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';

const frequently_asked_questions = [
  {
    q: 'Is it necessary for me to register an account in order to buy an item?',
    a: 'Yes and this is made with your own convenience in mind. By creating (or using) an account during the purchasing process.'
  },
  {
    q: 'Which shipping providers do you use?',
    a: 'Yes and this is made with your own convenience in mind. By creating (or using) an account during the purchasing process.'
  },
  {
    q: 'How long it will take to receive the furniture?',
    a: 'Yes and this is made with your own convenience in mind. By creating (or using) an account during the purchasing process.'
  },
  {
    q: 'How long it will take to receive the furniture?',
    a: 'Yes and this is made with your own convenience in mind. By creating (or using) an account during the purchasing process.'
  },
  {
    q: 'Do you offer any kind of discounts?',
    a: 'Yes and this is made with your own convenience in mind. By creating (or using) an account during the purchasing process.'
  }
];

const FaqsComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="FAQs" />

      <Container className="py-4">
        <Row>
          <Col md={12}>
            <Accordion>
              {
                frequently_asked_questions.map((obj, key) => {
                  return (
                    <Card className="border-0" eventKey={key} key={key}>
                      <Accordion.Toggle as={Card.Header} eventKey={key} className="border-0 bg-transparent cursor-pointer">
                        <p className="question">
                          <span className="question-symbol">Q</span>
                          <span className="question-text">{obj.q}</span>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </p>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={key}>
                        <Card.Body>
                          <p className="answer">
                            <span className="answer-symbol">A</span>
                            <span className="answer-text">{obj.a}</span>
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  )
                })
              }
            </Accordion>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FaqsComponent;