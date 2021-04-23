import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './filtering-styling.scss';
import { PriceRangeInput } from './price-slider.component';

export function FilterFormInputs(props) {
  const HandleFurtherProductFiltering = (event) => {
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
            name="formRadios"
            id="formProductTypeRadios1"
            data-type="all"
            onClick={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="chandelier"
            name="formRadios"
            id="formProductTypeRadios2"
            data-type="chandelier"
            onClick={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="lamp"
            name="formRadios"
            id="formProductTypeRadios3"
            data-type="lamp"
            onClick={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="candle"
            name="formRadios"
            id="formProductTypeRadios4"
            data-type="candle"
            onClick={HandleFurtherProductFiltering}
          />
        </Col>
      </Form.Group>
      <PriceRangeInput />
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
            id="formCategoryRadios1"
            data-type="beaded"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="crystals"
            name="formRadios"
            id="formCategoryRadios2"
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
            id="formUnitRadios1"
            data-type="available for bulk"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="not available for bulk"
            name="formRadios"
            id="formUnitRadios2"
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
            label="5x E14 fitting"
            name="formRadios"
            id="formFixtureRadios1"
            data-type="5x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="6x E14 fitting"
            name="formRadios"
            id="formFixtureRadios2"
            data-type="6x E14 fitting"
          />
          <Form.Check
            type="radio"
            label="7x E14 fitting"
            name="formRadios"
            id="formFixtureRadios3"
            data-type="7x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="8x E14 fitting"
            name="formRadios"
            id="formFixtureRadios4"
            data-type="8x E14 fitting"
            onChange={HandleFurtherProductFiltering}
          />
          <Form.Check
            type="radio"
            label="more than 8x"
            name="formRadios"
            id="formFixtureRadios5"
            data-type="more than 8x"
            onChange={HandleFurtherProductFiltering}
          />
        </Col>
      </Form.Group>
    </Form>
  )
}