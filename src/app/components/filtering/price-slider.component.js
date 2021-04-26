import React, { useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import CONSTANTS from '../../modules/constants';
import './filtering-styling.scss';

export function PriceRangeInput(props) {
  const [maxPrice, setMaxPrice] = useState(0);
  const [rangeLabel, setRangeLabel] = useState(0);

  useEffect(() => {
    var get_products_from_storage = localStorage.getItem(CONSTANTS.storageKeys.all);
    var storage_data = JSON.parse(get_products_from_storage);
    var max_price = DetermineMaxPrice(storage_data.products);

    setMaxPrice(max_price);
  }, []);

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
  })

  const HandleOnSliderChange = (event) => {
    props.onRangeSliderProductChange(event);
  }

  const UpdatePriceLabelValue = (event) => {
    setRangeLabel(parseInt(event.target.value));
  }

  return (
    <Form.Group as={Row} className="border-bottom pb-3">
      <Form.Label as="legend" column sm={12}>
        <h6 className="font-weight-bold">
          Price: <span className="font-weight-light">{CurrencyFormatter.format(rangeLabel)}</span>
        </h6>
      </Form.Label>
      <Col sm={12}>
        <Form.Control
          type="range"
          name="price"
          min={0}
          max={maxPrice}
          step={100}
          onMouseUp={HandleOnSliderChange}
          onTouchEnd={HandleOnSliderChange}
          onMouseMove={UpdatePriceLabelValue}
          onTouchMove={UpdatePriceLabelValue}
        />
      </Col>
      <Col sm={12}>
        <Form.Label as="legend" column sm={12} className="w-100 px-0">
          <span className="float-left font-weight-light">
            R 0.00
          </span>
          <span className="float-right font-weight-light">
            {CurrencyFormatter.format(maxPrice)}
          </span>
        </Form.Label>
      </Col>
    </Form.Group>
  )
}