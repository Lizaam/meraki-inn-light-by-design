import React, { useState, useContext, useEffect } from 'react';

// Libraries
import { Container, Row, Col, Button, Accordion, Card, Form } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// Styles
import './catalogue.component.scss';

// Components
import PageIndication from '../../components/page-indication/page-indication.component';
import ProgressComponent from '../../components/progress/progress.component';
import CardIcons from '../../components/card-icons/card-icons.component';

// Context
import { ProductsInfoContext } from '../../../App';

const CatalogueComponent = (data) => {
  const url = `https://meraki-products.herokuapp.com/meraki-products`;
  const collectionIteration = 12;
  const [product, setProduct] = useState({ loading: true, data: null });
  const [productSize, setProductSize] = useState(collectionIteration);
  const [productInfo, productInfoState] = useContext(ProductsInfoContext);
  const products = (data.location.data) ? data.location.data.products : 'all';

  const firstLetterCapitalize = (string) => {
    if (typeof string !== 'string') {
      return ''
    } else {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  useEffect(() => {
    async function getProducts() {
      const response = await Axios(url);

      setProduct({
        loading: false,
        data: response.data.products
      });

      if (response.data) {
        localStorage.setItem('products', JSON.stringify(response.data));
      }
    }

    getProducts();
  }, []);

  const loadMoreItems = () => {
    setProductSize(productSize + collectionIteration);
  }

  const titleUpdate = (title) => {
    return title.split("-").join(" ");
  }

  const seeMoreItems = () => {
    return (
      <Button type="button" variant="warning" className="text-light font-weight-bold" onClick={loadMoreItems}>
        See More
      </Button>
    );
  };

  if (product.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ProgressComponent />
      </div>
    );
  }

  if (product.data) {
    var productsSlice = product.data.slice(0, productSize);
  }

  return (
    <React.Fragment>
      <PageIndication page="Catalogue" />

      <Container className="py-4">
        <Row>
          <Col md={3}>
            <div id="light-left-s-1">
              <div className="light-left-search-links">Home / Catalogue {` / ` + firstLetterCapitalize(products)}</div>
              <h5>Shop By</h5>
            </div>

            <hr />

            <div id="light-left-s-2">
              <Accordion>
                <Accordion.Toggle as={Card.Header} className="border-0 bg-transparent px-0 s-2-toggle-container" eventKey="0">
                  <p className="s2-sort-header">
                    Categories
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="p-0">
                    <Form>
                      <Form.Group id="s-2-checkboxes">
                        <Form.Check type="checkbox" label="Chandeliers" className="checkbox-text" />
                        <Form.Check type="checkbox" label="Lamps" className="checkbox-text" />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} className="border-0 bg-transparent px-0 s-2-toggle-container" eventKey="1">
                  <p className="s2-sort-header">
                    Price
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="p-0">
                    <Form>
                      <Form.Group controlId="formBasicRange">
                        <Form.Label>Range</Form.Label>
                        <Form.Control type="range" />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} className="border-0 bg-transparent px-0 s-2-toggle-container" eventKey="2">
                  <p className="s2-sort-header">
                    Type
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="p-0">
                    <Form>
                      <Form.Group controlId="formBasicRange">
                        <Form.Check type="checkbox" label="Beaded" className="checkbox-text" />
                        <Form.Check type="checkbox" label="Crystals" className="checkbox-text" />
                        <Form.Check type="checkbox" label="Retro" className="checkbox-text" />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              {
                productsSlice.map((value, key) => {
                  return (
                    <Col md={4} sm={4} xs={12} className="mb-4" key={key}>
                      <Link
                        to={'/product-info'}
                        className="text-dark"
                      >
                        <Card onClick={() => productInfoState(value)}>
                          <img src={value.assets.imgSrc} className="card-img-top card-img-home" alt="..." />

                          <Card.Body className="small-text">
                            <h6>{titleUpdate(value.name)}</h6>
                            <Card.Text className="mb-0">Style: {value.info.style}</Card.Text>
                            <Card.Text className="mb-0">Type: {value.info.type}</Card.Text>
                            <Card.Text className="product-price-home">Price: {value.price}</Card.Text>
                            <CardIcons product={value} showAdditionalText={false} />
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  );
                })
              }

              <Col md={12} className="text-center">
                {seeMoreItems()}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CatalogueComponent;