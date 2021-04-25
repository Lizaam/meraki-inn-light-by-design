import React, { useState, useContext } from 'react';
import './navigation.component.scss';
import '../../../styles/_global.scss';
import { Container, Navbar, Row, Col, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import { ActiveNavItemContext } from '../../../App';
import HomeComponent from '../../pages/home/home.component';
import CatalogueComponent from '../../pages/catalogue/catalogue.component';
import FeaturesComponent from '../../pages/features/features.component';
import ServicesComponent from '../../pages/services/services.component';
import ContactComponent from '../../pages/contact/contact.component';
import SupportComponent from '../../pages/support/support.component';
import AboutComponent from '../../pages/about/about.component';
import FaqsComponent from '../../pages/faqs/faqs.component';
import Footer from '../footer/footer.component';
import PrivacyComponent from '../../pages/privacy/privacy.component';
import ReturnsComponent from '../../pages/returns/returns.component';
import TermsComponent from '../../pages/terms/terms.component';
import ProductInfoComponent from '../../pages/product-info/product-info.component';
import ResetScroll from '../reset-scroll/reset-scroll.component';
import ScrollToTop from '../scroll-to-top/scroll-to-top.component';

const NavigationComponent = () => {
  const [navItem, navItemState] = useContext(ActiveNavItemContext);
  const [sideNav, sideNavState] = useState(false);

  const ToggleSideNavState = () => {
    sideNavState(!sideNav);
  }

  const HandleNavItem = (event) => {
    navItemState(event.currentTarget.dataset.item);
  }

  $(window).on('scroll', (event) => {
    event.currentTarget.scrollY > 70 ? $('#c-2').addClass('main-nav-fixed') : $('#c-2').removeClass('main-nav-fixed');
  })

  return (
    <Router>
      <ResetScroll>
        <Container fluid id="c-1">
          <Row id="nav-header" className="c-w text-light align-items-center">
            <Col md={4} sm={12}>
              <div className="nav-header-left">
                <div className="nav-header-left-tel">
                  <i className="fa fa-phone mr-2" aria-hidden="true"></i>
                  <p className="nav-header-left-info">+27 (82) 467-5389</p>
                </div>
                <div className="nav-header-left-email">
                  <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
                  <p className="nav-header-left-info mb-0">info@merakiinnovations.co.za</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12} className="text-center nav-header-center">
              <div className="nav-header-center">
                All items available for hiring!
            </div>
            </Col>
            <Col md={4} sm={12}>
              <ul className="list-unstyled list-group list-group-horizontal nav-header-right-list-group justify-content-end">
                <li className="list-item mr-4">
                  <Link to="/support" onClick={HandleNavItem}>Support</Link>
                </li>
                <li className="list-item mr-4">
                  <Link to="/about" onClick={HandleNavItem}>About</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <Container fluid className="py-3" id="c-2">
          <Row className="c-2-row c-w align-items-center">
            <Col>
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={ToggleSideNavState}
              ></i>
              <Link to="/home" className="text-dark" data-item="nav-item-home" onClick={HandleNavItem}>
                <h2 className="logo-heading font-weight-light mb-0">Lights By Design</h2>
                <p className="logo-tagline">Meraki Innovations</p>
              </Link>
            </Col>
            <Col id="col-main-nav">
              <Navbar id="main-nav" className="justify-content-center">
                <Link
                  to="/home"
                  className={navItem === "nav-item-home" ? "nav-item nav-item-active" : "nav-item"}
                  data-item="nav-item-home"
                  onClick={HandleNavItem}>Home
                </Link>

                <Dropdown>
                  <Dropdown.Toggle variant="transparent" id="catalogue-dropdown">
                    Catalogue
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="light-mega-menu">
                      <div className="mega-menu-item">
                        <Dropdown.Header>Products</Dropdown.Header>
                        <Dropdown.Divider />

                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'all'
                            }
                          }}
                          onClick={HandleNavItem}>All Products
                        </Link>
                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'chandelier'
                            }
                          }}
                          onClick={HandleNavItem}>Chandeliers
                        </Link>
                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'lamp'
                            }
                          }}
                          onClick={HandleNavItem}>Lamps
                        </Link>
                      </div>
                      <div className="mega-menu-item">
                        <Dropdown.Header>Categories</Dropdown.Header>
                        <Dropdown.Divider />

                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'beaded'
                            }
                          }}
                          onClick={HandleNavItem}>Beaded
                        </Link>
                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'crystals'
                            }
                          }}
                          onClick={HandleNavItem}>Crystals
                        </Link>
                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'retro'
                            }
                          }}
                          onClick={HandleNavItem}>Retro
                        </Link>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                <Link
                  to="/services"
                  className={navItem === "nav-item-services" ? "nav-item nav-item-active" : "nav-item"}
                  data-item="nav-item-services"
                  onClick={HandleNavItem}> Services
                </Link>

                <Link
                  to="/contact"
                  className={navItem === "nav-item-contact" ? "nav-item nav-item-active" : "nav-item"}
                  data-item="nav-item-contact"
                  onClick={HandleNavItem}>Contact Us
                </Link>
              </Navbar>
            </Col>
            <Col className="col-search">
              <Form.Row className="main-nav-search">
                <Form.Group className="mb-0">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="search-input-group-text">
                        <i className="fa fa-search"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control className="custom-form-control-input" type="text" placeholder="Search here.." />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
        </Container>

        <div
          id="responsive-side-nav-container"
          className={sideNav ? `side-nav-container-show` : ``}>
          <div id="side-nav">
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={ToggleSideNavState}
            ></i>

            <Link to="/home" className="nav-item" onClick={HandleNavItem}>Home</Link>
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="catalogue-dropdown">Catalogue</Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="light-mega-menu">
                  <div className="mega-menu-item">
                    <Dropdown.Header>Categories</Dropdown.Header>
                    <Dropdown.Divider />

                    <Link
                      className="nav-item"
                      to={{
                        pathname: '/catalogue',
                        data: {        
                          products: 'all'
                        }
                      }}
                      onClick={HandleNavItem}>All Products
                        </Link>
                    <Link
                      className="nav-item"
                      to={{
                        pathname: '/catalogue',
                        data: {
                          products: 'chandelier'
                        }
                      }}
                      onClick={HandleNavItem}>Chandeliers
                    </Link>
                    <Link
                      className="nav-item"
                      to={{
                        pathname: '/catalogue',
                        data: {
                          products: 'lamp'
                        }
                      }}
                      onClick={HandleNavItem}>Lamps
                    </Link>
                  </div>
                  <div className="mega-menu-item">
                    <Dropdown.Header>Types</Dropdown.Header>
                    <Dropdown.Divider />

                    <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'beaded'
                            }
                          }}
                          onClick={HandleNavItem}>Beaded
                        </Link>
                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'crystals'
                            }
                          }}
                          onClick={HandleNavItem}>Crystals
                        </Link>
                        <Link
                          className="nav-item"
                          to={{
                            pathname: '/catalogue',
                            data: {
                              products: 'retro'
                            }
                          }}
                          onClick={HandleNavItem}>Retro
                        </Link>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <Link
              to="/services"
              className={navItem === "nav-item-services" ? "nav-item nav-item-active" : "nav-item"}
              data-item="nav-item-services"
              onClick={HandleNavItem}>Services
            </Link>
            <Link
              to="/contact"
              className={navItem === "nav-item-contact" ? "nav-item nav-item-active" : "nav-item"}
              data-item="nav-item-contact"
              onClick={HandleNavItem}>Contact Us
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <HomeComponent HandleNavItem={HandleNavItem} />
          </Route>
          <Route path="/catalogue" component={CatalogueComponent} />
          <Route path="/product-info" component={ProductInfoComponent} />
          <Route path="/features" component={FeaturesComponent} />
          <Route path="/services" component={ServicesComponent} />
          <Route path="/contact" component={ContactComponent} />
          <Route path="/support">
            <SupportComponent pageView={true} HandleNavItem={HandleNavItem} />
          </Route>
          <Route path="/about" component={AboutComponent} />
          <Route path="/faqs" component={FaqsComponent} />
          <Route path="/privacy" component={PrivacyComponent} />
          <Route path="/return-policy" component={ReturnsComponent} />
          <Route path="/terms-and-conditions" component={TermsComponent} />
          <Redirect to="/home" />
        </Switch>

        <Footer HandleNavItem={HandleNavItem} />
        <ScrollToTop />
      </ResetScroll>
    </Router>
  );
};

export default NavigationComponent;