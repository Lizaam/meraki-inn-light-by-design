import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './filtering-styling.scss';

export function PriceRangeInput(props) {
  var place_holder_price = 4500 / 2;

  const DetermineMaxPrice = (data) => {
    var prices = data.map(obj => parseInt(obj.price.substring(1)));
    var prices_array_cleanup = prices.filter(element => { return !isNaN(element) })
    
    if (prices_array_cleanup.length > 0) {
      var maxPrice = prices_array_cleanup.reduce((a, b) => {
        return Math.max(a, b);
      })
  
      return maxPrice;
    } else {
      return 0;
    }
  }

  const CurrencyFormatter = new Intl.NumberFormat(
    'en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 2
    }
  )
  
  if (props.resetChildComponent != '') {
    return (
      <Form>
        <Form.Group as={Row} className="border-bottom pb-3">
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
  } else {
    return (
      <p>Please select a <span className="font-weight-bold">Type</span> for more filtering options.</p>
    )
  }
}