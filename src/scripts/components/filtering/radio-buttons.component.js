import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './filtering-styling.scss';

export function RadioButtons(props) {
  const HandleProductTypeChange = (event) => {
    props.onProductDataChange(event.target.dataset.type);
  }

  return (
    <Form>
      <Form.Group as={Row} className="border-bottom pb-3">
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
            data-type="all"
            onClick={HandleProductTypeChange}
          />
          <Form.Check
            type="radio"
            label="chandelier"
            name="formProductTypeRadios"
            id="formProductTypeRadios2"
            data-type="chandelier"
            onClick={HandleProductTypeChange}
          />
          <Form.Check
            type="radio"
            label="lamp"
            name="formProductTypeRadios"
            id="formProductTypeRadios3"
            data-type="lamp"
            onClick={HandleProductTypeChange}
          />
          <Form.Check
            type="radio"
            label="candle"
            name="formProductTypeRadios"
            id="formProductTypeRadios4"
            data-type="candle"
            onClick={HandleProductTypeChange}
          />
        </Col>
      </Form.Group>
    </Form>
  )
}