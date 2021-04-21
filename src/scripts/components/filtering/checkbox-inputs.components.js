import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './filtering-styling.scss';

export function CheckboxInputs(props) {
  if (props.resetChildComponent != '') {
    return (
      <Form>
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
              name="formCategoryRadios"
              id="formCategoryRadios1"
            />
            <Form.Check
              type="radio"
              label="crystals"
              name="formCategoryRadios"
              id="formCategoryRadios2"
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
              name="formUnitRadios"
              id="formUnitRadios1"
            />
            <Form.Check
              type="radio"
              label="not available for bulk"
              name="formUnitRadios"
              id="formUnitRadios2"
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
              name="formFixtureRadios"
              id="formFixtureRadios1"
            />
            <Form.Check
              type="radio"
              label="6x E14 fitting"
              name="formFixtureRadios"
              id="formFixtureRadios2"
            />
            <Form.Check
              type="radio"
              label="7x E14 fitting"
              name="formFixtureRadios"
              id="formFixtureRadios3"
            />
            <Form.Check
              type="radio"
              label="8x E14 fitting"
              name="formFixtureRadios"
              id="formFixtureRadios4"
            />
            <Form.Check
              type="radio"
              label="more than 8x"
              name="formFixtureRadios"
              id="formFixtureRadios5"
            />
          </Col>
        </Form.Group>
      </Form>
    )
  } else {
    return <React.Fragment></React.Fragment>
  }
}