import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './catalogue.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';
import ProgressComponent from '../../components/progress/progress.component';
import CardIcons from '../../components/card-icons/card-icons.component';
import { ProductsInfoContext } from '../../../App';
import CONSTANTS from '../../modules/constants';
import { RadioButtons } from '../../components/filtering/radio-buttons.component';
import { CheckboxInputs } from '../../components/filtering/checkbox-inputs.components';
import { PriceRangeInput } from '../../components/filtering/price-slider.component';

const CatalogueComponent = (data) => {
  var view_more_count = 12;
  var max_products_view_reached = false;
  var search_string = (data.location.data) ? data.location.data.products : 'all';

  const [product, setProduct] = useState({ loading: true, data: null });
  const [productSize, setProductSize] = useState(view_more_count);
  const [productInfo, productInfoState] = useContext(ProductsInfoContext);
  const [productType, setProductType] = useState('');

  useEffect(() => {
    var get_products_from_storage = localStorage.getItem(CONSTANTS.storageKeys.all);
    var storage_data = JSON.parse(get_products_from_storage);
    var filtered_data = FilterProducts(search_string, storage_data.products);

    setProduct({ loading: false, data: filtered_data });
  }, [data, search_string]);

  const FilterProducts = (filter, data) => {
    var filter_products = data.filter(product => {
      switch (filter.toLowerCase()) {
        case CONSTANTS.searchTerms.all:
          return product;
        case CONSTANTS.searchTerms.chandelier:
        case CONSTANTS.searchTerms.lamp:
        case CONSTANTS.searchTerms.candle:
          return product.info.type.includes(filter);
        case CONSTANTS.searchTerms.beaded:
        case CONSTANTS.searchTerms.crystals:
        case CONSTANTS.searchTerms.retro:
          return product.info.style.includes(filter);
        case CONSTANTS.searchTerms.availableForBulk:
        case CONSTANTS.searchTerms.notAvailableForBulk:
          return filter === product.bulk.toLowerCase();
        case CONSTANTS.searchTerms.fitting5x:
        case CONSTANTS.searchTerms.fitting6x:
        case CONSTANTS.searchTerms.fitting7x:
        case CONSTANTS.searchTerms.fitting8x:
        case CONSTANTS.searchTerms.moreThan8x:
          return filter === product.globeType;
        default:
          return product;
      }
    })

    return filter_products;
  }

  const CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const FormatProductTitle = (title) => {
    return title.split('-').join(' ');
  }

  const LoadMoreProducts = () => {
    setProductSize(productSize + view_more_count);
  }

  const ViewMoreProducts = () => {
    max_products_view_reached = productSize > product.data.length - 1;

    if (max_products_view_reached) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <Button
          type="button"
          variant="dark"
          className="text-light font-weight-bold mt-4 mb-2"
          onClick={LoadMoreProducts}>
          See More
        </Button>
      );
    }
  }

  const HandleProductTypeFiltering = (value) => {
    setProductType(value);
  }

  if (product.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ProgressComponent />
      </div>
    )
  } else {
    var slicedProductsList = product.data.slice(0, productSize);
    var dataForChildComponentReset = productType;

    return (
      <React.Fragment>
        <PageIndication page="Catalogue" />
        <Container className="py-4">
          <Row>
            <Col md={3}>
              <div id="light-left-s-1">
                <div className="light-left-search-links">
                  Home / Catalogue {` / ` + CapitalizeFirstLetter(search_string)}
                </div>
                <h5>Shop By</h5>
              </div>
              <hr />
              <div id="light-left-s-2">
                <RadioButtons onProductDataChange={HandleProductTypeFiltering} />
                <PriceRangeInput resetChildComponent={dataForChildComponentReset} />
                <CheckboxInputs resetChildComponent={dataForChildComponentReset} />
              </div>
            </Col>
            <Col md={9}>
              <Row>
                {
                  slicedProductsList.length > 0 
                  ?
                  slicedProductsList.map((value, key) => {
                    return (
                      <Col md={3} sm={6} xs={12} className="mb-4" key={key}>
                        <Link
                          to={'/product-info'}
                          className="text-dark">
                          <Card>
                            <img src={value.assets.imgSrc} className="card-img-top card-img-home" alt="..." />

                            <Card.Body className="small-text">
                              <h6>{FormatProductTitle(value.name)}</h6>
                              <Card.Text className="mb-0">Style: {value.info.style}</Card.Text>
                              <Card.Text className="mb-0">Type: {value.info.type}</Card.Text>
                              <Card.Text className="product-price-home">Price: {value.price}</Card.Text>
                              <CardIcons product={value} showAdditionalText={false} />
                              <Button type="button" variant="warning" className="text-light font-weight-bold mt-4" onClick={() => productInfoState(value)}>
                                View Info
                              </Button>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    );
                  })
                  :
                  <React.Fragment>
                    <h4 className="font-weight-light mb-0">No products to display.</h4>
                  </React.Fragment>
                }

                <Col md={12} className="text-center">
                  {ViewMoreProducts()}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
};

export default CatalogueComponent;