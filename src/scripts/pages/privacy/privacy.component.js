import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./privacy.component.scss";
import PageIndication from "../../components/page-indication/page-indication.component";

const PrivacyComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="Privacy Policy" />

      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={12}>
            <h5>Personal Information</h5>
            <small>Welcome to our privacy policy, where we help you to understand that your privacy is our number 1 priority. We realize that sharing something as simple as an email address can be a risky thing to do, here at Light By Design, we have put in extra measures of security to allow that not to happen. Using modern web security standards and features, you can rest assure that your personal information will not be leaked.</small>

            <h5 className="mt-4">Why We Request Personal Information</h5>
            <small>To better understand why we request personal information from our uses is relatively straight forward, we want to provide a better experience for our customers. We update our inventory regularly, and in doing so, would love our customers to see the products as soon as they are complete, this also helps build a personal relationship, and provides the potential for an all around, very smooth business transactions.</small>

            <h5 className="mt-4">Sharing Personal Information</h5>
            <small>Sharing personal information is solely up to the customers themselves, we do make use of third party beneficiaries, with whom our customers can liase, but only at the client's request. Our third party beneficiaries are industry leading companies, they provide exceptional support and professionalism. We do share our customers personal information within our organization, as we have different departments that handle different requests.</small>

            <h5 className="mt-4">Editing/Removing Personal Information</h5>
            <small>For the editing or removal of personal information, get in touch with us via call or email, we will be here to assist any request that our customers might have.</small>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PrivacyComponent;
