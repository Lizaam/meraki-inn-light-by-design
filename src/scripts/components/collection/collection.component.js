import React, { useState, useEffect } from 'react';
import './collection.component.scss';
import '../../../styles/_global.scss';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import ProgressComponent from '../../components/progress/progress.component';
import CONSTANTS from '../../modules/constants';
import { GetAllProducts } from '../../providers/products.provider';
import ProductCards from '../product-cards/product-cards.component';

const Collection = () => {
  const collection_iteration = 4;
  const collection_limit = collection_iteration * 2;

  const [product, setProduct] = useState({ loading: true, data: null });
  const [productSize, setProductSize] = useState(collection_iteration);

  useEffect(() => {
    const get_products_from_storage = localStorage.getItem(CONSTANTS.storageKeys.all);

    if (!get_products_from_storage) {
      GetAllProducts().then(data => {
        setProduct({
          loading: false,
          data: data.products
        });

        localStorage.setItem(CONSTANTS.storageKeys.all, JSON.stringify(data));
      })
    } else {
      const storage_data = JSON.parse(get_products_from_storage);

      setProduct({
        loading: false,
        data: storage_data.products
      });
    }
  }, []);

  const LoadMoreProducts = () => {
    if (productSize < collection_limit) {
      setProductSize(productSize + collection_iteration);
    }
  }

  const RedirectToCatalogue = () => {
    return (
      <Link
        to={{
          pathname: '/catalogue',
          data: {
            type: 'product',
            products: 'all'
          }
        }}>
        <Button type="button" variant="dark" className="text-light font-weight-bold mt-4 mb-2">
          View Catalogue
        </Button>
      </Link>
    );
  }

  const ViewMoreProducts = () => {
    return (
      <Button type="button" variant="dark" className="text-light font-weight-bold mt-4 mb-2" onClick={LoadMoreProducts}>
        See More
      </Button>
    );
  }

  if (product.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ProgressComponent />
      </div>
    );
  } else {
    var productsSlice = product.data.slice(0, productSize);

    return (
      <React.Fragment>
        <Row>
          {
            productsSlice.map((value, key) => {
              return (
                <Col md={3} sm={4} xs={12} className="mb-4" key={key}>
                  <ProductCards productData={value} urlHistory="/home" />
                </Col>
              );
            })
          }
        </Row>

        <Row>
          <Col className="text-center">
            {productSize < collection_limit ? ViewMoreProducts() : RedirectToCatalogue()}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
};

export default Collection;