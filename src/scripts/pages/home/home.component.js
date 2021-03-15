import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.component.scss';
import HomeSliderComponent from '../../components/home-slider/home-slider.component';
import Collection from '../../components/collection/collection.component';

const HomeComponent = (props) => {
  return (
    <React.Fragment>
      <HomeSliderComponent />

      <Container id="c-showcase-items" className="py-5">
        <Row>
          <Col md={6} className="p-0">
            <div className="showcase-container" id="bg-showcase-1">
              <div className="overlay">
                <div className="overlay-bg"></div>
              </div>

              <h1 className="showcase-title">Lighting</h1>
            </div>
            <Link 
              to="/contact" 
              className="text-decoration-none"
              data-item="nav-item-contact"
              onClick={props.handleNavItem}
            >
              <div className="showcase-container p-5">
                <div className="overlay">
                  <div className="overlay-bg"></div>
                </div>

                <h3 className="showcase-title-info">See a design you like, we will build it for you.</h3>
                <p className="showcase-mini-info">Innovation is our passion.</p>
                <span className="showcase-text-underline">Contact us</span>
              </div>
            </Link>
          </Col>
          <Col md={6} className="p-0">
            <Link 
              to="/catalogue" 
              className="text-decoration-none"
              onClick={props.handleNavItem}
            >
              <div className="showcase-container p-5">
                <div className="overlay">
                  <div className="overlay-bg"></div>
                </div>

                <h3 className="showcase-title-info">We provide discounted offers to suit your needs and wants.</h3>
                <p className="showcase-mini-info">Find your perfect lighting fixture.</p>
                <span className="showcase-text-underline">View catalogue</span>
              </div>
            </Link>
            <div className="showcase-container" id="bg-showcase-2">
              <div className="overlay">
                <div className="overlay-bg"></div>
              </div>

              <h1 className="showcase-title">Lamps</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" id="c-home-catalogue">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h2 className="text-uppercase mb-5">Our Collection</h2>
          </Col>
        </Row>
        <Collection handleNavItem={props.handleNavItem} />
      </Container>
    </React.Fragment>
  );
};

export default HomeComponent;