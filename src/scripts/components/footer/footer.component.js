import React, { useContext } from 'react';

// Styles
import './footer.component.scss';
import '../../../styles/_global.scss';

// Libraries
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Context
import { ActiveNavItemContext } from '../../../App';

const Footer = (props) => {
	const [navItem] = useContext(ActiveNavItemContext);

	return (
		<Container fluid id="c-footer">
			<Row className="c-w py-3 text-light">
				<Col md={3} sm={3} xs={12} className="footer-col-1-details">
					<div className="footer-col-1-header mb-4">
						<h2 className="logo-heading font-weight-light mb-0">Lights By Design</h2>
						<p className="logo-tagline">Meraki Innovations</p>
					</div>

					<div className="footer-col-1-info mb-2">
						<i className="fa details fa-map-marker d-inline-block mr-3" aria-hidden="true"></i>
						<p>42 Kameeldoring Str, Bonteheuwel 7764</p>
					</div>

					<div className="footer-col-1-info mb-2">
						<i className="fa details fa-envelope d-inline-block mr-3" aria-hidden="true"></i>
						<p>info@merakiinnovations.co.za</p>
					</div>

					<div className="footer-col-1-info">
						<i className="fa details fa-phone d-inline-block mr-3" aria-hidden="true"></i>
						<p>+27 (82) 467-5389</p>
					</div>

					<div className="footer-col-1-info mt-4">
						<i className="fa social fa-facebook d-inline-block mr-3" aria-hidden="true"></i>
						<i className="fa social fa-instagram d-inline-block mr-3" aria-hidden="true"></i>
						<i className="fa social fa-twitter d-inline-block mr-3" aria-hidden="true"></i>
						<i className="fa social fa-linkedin d-inline-block mr-3" aria-hidden="true"></i>
					</div>
				</Col>
				<Col md={2} sm={3} xs={12} className="footer-col-2-categories">
					<h5 className="font-weight-light h5-footer-margin-bottom">Categories</h5>

					<div className="footer-col-2-info">
						<Link
							className="nav-item"
							to={{
								pathname: '/catalogue',
								data: {
									products: 'chandelier'
								}
							}}>Chandeliers
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to={{ 
								pathname: '/catalogue', 
								data: { 
									products: 'lamp' 
								} 
							}}>Lamps
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to={{ 
								pathname: '/catalogue', 
								data: { 
									products: 'candle' 
								} 
							}}>Candles
						</Link>
					</div>
				</Col>
				<Col md={2} sm={3} xs={12} className="footer-col-3-information">
					<h5 className="font-weight-light h5-footer-margin-bottom">Information</h5>

					<div className="footer-col-3-info">
						<Link
							to="/about"
							onClick={props.handleNavItem}>About Us
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to="/support"
							onClick={props.handleNavItem}>Support
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to="/faqs"
							onClick={props.handleNavItem}>FAQs
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to="/services"
							className={navItem === "nav-item-services" ? "nav-item nav-item-active" : "nav-item"}
							data-item="nav-item-services"
							onClick={props.handleNavItem}>Services
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to="/contact"
							className={navItem === "nav-item-contact" ? "nav-item nav-item-active" : "nav-item"}
							data-item="nav-item-contact"
							onClick={props.handleNavItem}>Contact Us
						</Link>
					</div>
				</Col>
				<Col md={2} sm={3} xs={12} className="footer-col-4-quick-links">
					<h5 className="font-weight-light h5-footer-margin-bottom">Quick Links</h5>

					<div className="footer-col-3-info">
						<Link
							to="/terms-and-conditions"
							onClick={props.handleNavItem}>Terms & Conditions
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to="/privacy"
							onClick={props.handleNavItem}>Privacy Policy
						</Link>
					</div>

					<div className="footer-col-2-info">
						<Link
							to="/return-policy"
							onClick={props.handleNavItem}>Return Policy
						</Link>
					</div>
				</Col>
				<Col md={3} sm={12} xs={12} className="footer-col-5-newsletter">
					<h5 className="font-weight-light h5-footer-margin-bottom">Newsletter</h5>

					<div className="footer-col-4-info">
						<div className="newsletter-form">
							<p>Subscribe to our newsletter to receive news on new and existing products</p>

							<Form>
								<Form.Group controlId="formNewsletter">
									<Form.Control type="email" placeholder="Email Address" className="mb-3 w-75" />
									<Button variant="warning" className="text-light" id="btn-newsletter">Submit</Button>
								</Form.Group>
							</Form>
						</div>
						<div className="newsletter-success d-none">
							<p>Thank you for subscribing to our newsletter!</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;