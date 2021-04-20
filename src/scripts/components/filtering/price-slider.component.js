import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './filtering-styling.scss';

export function PriceRangeInput() {
  var place_holder_price = 4500 / 2;

  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={12}>
          <h6 className="font-weight-bold">
            Price: <span className="font-weight-light">R {place_holder_price}.00</span>
          </h6>
        </Form.Label>
        <Col sm={12}>
          <Form.Control
            type="range"
            name="price"
            min="0"
            max="4500"
          />
        </Col>
        <Col sm={12}>
          <Form.Label as="legend" column sm={12} className="w-100 px-0">
            <span className="float-left font-weight-light">
              R 0.00
            </span>
            <span className="float-right font-weight-light">
              R 4500.00
            </span>
          </Form.Label>
        </Col>
      </Form.Group>
    </Form>
  )
}