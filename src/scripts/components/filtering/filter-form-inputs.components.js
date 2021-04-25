import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './filtering-styling.scss';
import { PriceRangeInput } from './price-slider.component';

export function FilterFormInputs(props) {
  const HandleFurtherProductFiltering = (event) => {
    var type_data = event.target.dataset.type;

    if (type_data) {
      props.onProductDataChange(type_data)
    } else {
      props.onProductDataChange(event.target.value);
    } 
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
            name="formRadios"
            id="all"
            data-type="all"
            onClick={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="chandelier"
            name="formRadios"
            id="chandelier"
            data-type="chandelier"
            onClick={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="lamp"
            name="formRadios"
            id="lamp"
            data-type="lamp"
            onClick={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="candle"
            name="formRadios"
            id="candle"
            data-type="candle"
            onClick={HandleFurtherProductFiltering}
          />
        </Col>
      </Form.Group>
      <PriceRangeInput 
        filteredDataUpdate={props.filteredDataUpdate} 
        onRangeSliderProductChange={HandleFurtherProductFiltering}
      />
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={12}>
          <h6 className="font-weight-bold">
            Categories
          </h6>
        </Form.Label>
        <Col sm={12}>
          <Form.Check
            type="radio"
            label="beaded"
            name="formRadios"
            id="beaded"
            data-type="beaded"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="crystals"
            name="formRadios"
            id="crystals"
            data-type="crystals"
            onChange={HandleFurtherProductFiltering}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={12}>
          <h6 className="font-weight-bold">
            Unit Availability
          </h6>
        </Form.Label>
        <Col sm={12}>
          <Form.Check
            type="radio"
            label="available for bulk"
            name="formRadios"
            id="afbulk"
            data-type="available for bulk"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="not available for bulk"
            name="formRadios"
            id="nafbulk"
            data-type="not available for bulk"
            onChange={HandleFurtherProductFiltering}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={12}>
          <h6 className="font-weight-bold">
            Fixture Fitting
          </h6>
        </Form.Label>
        <Col sm={12}>
          <Form.Check
            type="radio"
            label="1x E14 fitting"
            name="formRadios"
            id="1x"
            data-type="1x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="5x E14 fitting"
            name="formRadios"
            id="5x"
            data-type="5x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="6x E14 fitting"
            name="formRadios"
            id="6x"
            data-type="6x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="7x E14 fitting"
            name="formRadios"
            id="7x"
            data-type="7x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="8x E14 fitting"
            name="formRadios"
            id="8x"
            data-type="8x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="More than 8x"
            name="formRadios"
            id="morethan8x"
            data-type="more than 8x"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="Other fittings"
            name="formRadios"
            id="other-fittings"
            data-type="other fittings"
            onChange={HandleFurtherProductFiltering}
          />
        </Col>
      </Form.Group>
    </Form>
  )
}