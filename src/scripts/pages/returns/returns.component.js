import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./returns.component.scss";
import PageIndication from "../../components/page-indication/page-indication.component";

const ReturnsComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="Returns Policy" />

      <Container className="py-4">
        <Row>
          <Col md={12}>
            <h5 className="text-uppercase">Returns Policy</h5>
            <ol id="returns-list">
              <li>
                Refund requests must be made within 14 days of delivery date.
                After 14 days from delivery date you must contact Spracht
                Customer Service to determine the best course of action. Spracht
                will not issue refunds for products purchased through other
                entities, such as distributors or retail partners. Defective
                units are covered under Spracht’s oneyear limited warranty
                policy will be replaced at Spracht’s cost. See “Returning
                Products Under Warranty,” below, for information on warranty
                returns.
              </li>
              <li>
                A copy of the Spracht credit card purchase receipt, and a copy
                of the original Spracht invoice may be requested prior to
                Spracht Customer Service issuing a Return Authorization.
              </li>
              <li>
                Unit must be in like-new condition and returned in original
                packaging with all original accessories, literature and other
                components. Spracht reserves the right to reject any refund
                request if the product is received damaged or if any
                accessories, literature or other original components are
                missing.
              </li>
              <li>
                A Return Authorization (RA) number must be obtained prior to
                returning the product; to request an RA number, please email or
                call 1-650-318-8050 x208, and provide the following information:
                <br />
                Name Address
                <br />
                Phone
                <br />
                Reason for Refund Date of Purchase Unit
                <br />
                Serial Number
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ReturnsComponent;
