import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './catalogue.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';
import ProgressComponent from '../../components/progress/progress.component';
import CONSTANTS from '../../modules/constants';
import { FilterFormInputs } from '../../components/filtering/filter-form-inputs.components';
import ProductCards from '../../components/product-cards/product-cards.component';

const CatalogueComponent = (props) => {
  var view_more_count = 12;
  var max_products_view_reached = false;
  var search_string = (props.location.data) ? props.location.data.products : 'all';

  const [productData, setProductData] = useState({ loading: true, data: null });
  const [productSize, setProductSize] = useState(view_more_count);
  const [currentFilter, setCurrentFilter] = useState('');

  useEffect(() => {
    SetProductsFromStorage(search_string);
  }, [props, search_string]);

  const SetProductsFromStorage = (filterString, filterElement) => {
    var get_products_from_storage = localStorage.getItem(CONSTANTS.storageKeys.all);
    var storage_data = JSON.parse(get_products_from_storage);
    var filtered_data = FilterProducts(filterString, storage_data.products, filterElement);

    setProductData({ loading: false, data: filtered_data });
  }

  const FilterProducts = (filter, data, elementType) => {
    var filter_products = data.filter(obj => {
      if (elementType === 'range') {
        var obj_price = parseInt(obj.price.substring(1));
        var filter_price = parseInt(filter);

        return obj_price === filter_price;
      } else {
        switch (filter.toLowerCase()) {
          case CONSTANTS.searchTerms.all:
            return obj;
          case CONSTANTS.searchTerms.chandelier:
          case CONSTANTS.searchTerms.lamp:
          case CONSTANTS.searchTerms.candle:
            return obj.info.type.includes(filter);
          case CONSTANTS.searchTerms.beaded:
          case CONSTANTS.searchTerms.crystals:
          case CONSTANTS.searchTerms.retro:
            return obj.info.style.includes(filter);
          case CONSTANTS.searchTerms.availableForBulk:
          case CONSTANTS.searchTerms.notAvailableForBulk:
            return filter === obj.bulk.toLowerCase();
          case CONSTANTS.searchTerms.fitting1x:
          case CONSTANTS.searchTerms.fitting5x:
          case CONSTANTS.searchTerms.fitting6x:
          case CONSTANTS.searchTerms.fitting7x:
          case CONSTANTS.searchTerms.fitting8x:
            return filter === obj.globeType;
          case CONSTANTS.searchTerms.moreThan8x:
            var fixture_figure = parseInt(obj.globeType.split(" ")[0].slice(0, -1));
            return fixture_figure > 8;
          case CONSTANTS.searchTerms.otherFittings:
            return obj.globeType.includes('+');
          default:
            return obj;
        }
      }
    })

    return filter_products;
  }

  const LoadMoreProducts = () => {
    setProductSize(productSize + view_more_count);
  }

  const ViewMoreProducts = () => {
    max_products_view_reached = productSize > productData.data.length - 1;

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

  const HandleProductFiltering = (value, element) => {
    SetProductsFromStorage(value, element);
    setCurrentFilter(value)
  }

  if (productData.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ProgressComponent />
      </div>
    )
  } else {
    var slicedProductsList = productData.data.slice(0, productSize);

    return (
      <React.Fragment>
        <PageIndication page="Catalogue" />
        <Container className="py-4 c-w">
          <Row>
            <Col md={3}>
              <div id="light-left-s-1">
                <h5>Filtering By: 
                  <span className="d-block my-2 filtered-by-text">{currentFilter}</span>
                </h5>
              </div>
              <hr />
              <div id="light-left-s-2">
                <FilterFormInputs 
                  onProductDataChange={HandleProductFiltering} 
                  filteredDataUpdate={productData.data}
                />
              </div>
            </Col>
            <Col md={9}>
              <Row>
                {
                  slicedProductsList.length > 0 ?
                  slicedProductsList.map((value, key) => {
                    return (
                      <Col md={3} sm={4} xs={12} className="mb-4" key={key}>
                        <ProductCards 
                          productData={value} 
                          urlHistory="/catalogue" 
                          filterString={currentFilter !== '' ? currentFilter : 'all'}
                          relatedProducts={productData}
                        />
                      </Col>
                    );
                  }) :
                  <h4 className="font-weight-light mb-0">No products to display.</h4>
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