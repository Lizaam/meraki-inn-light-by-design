import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './filtering-styling.scss';

export function RadioButtons() {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={12}>
          <h6 className="font-weight-bold">
            Type
          </h6>
        </Form.Label>
        <Col sm={12}>
          <Form.Check
            type="radio"
            label="all"
            name="formProductTypeRadios"
            id="formProductTypeRadios1"
          />
          <Form.Check
            type="radio"
            label="chandelier"
            name="formProductTypeRadios"
            id="formProductTypeRadios2"
          />
          <Form.Check
            type="radio"
            label="lamp"
            name="formProductTypeRadios"
            id="formProductTypeRadios3"
          />
          <Form.Check
            type="radio"
            label="candle"
            name="formProductTypeRadios"
            id="formProductTypeRadios4"
          />
        </Col>
      </Form.Group>
    </Form>
  )
}