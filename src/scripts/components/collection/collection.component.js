import React, { useState, useEffect, useContext } from 'react';
import './collection.component.scss';
import '../../../styles/_global.scss';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import ProgressComponent from '../../components/progress/progress.component';
import CardIcons from '../card-icons/card-icons.component';
import { ProductsInfoContext } from '../../../App';
import CONSTANTS from '../../modules/constants';
import { GetAllProducts } from '../../providers/products.provider';

const Collection = (props) => {
  const collection_iteration = 4;
  const collection_limit = collection_iteration * 2;

  const [product, setProduct] = useState({ loading: true, data: null });
  const [productSize, setProductSize] = useState(collection_iteration);
  const [, productInfoState] = useContext(ProductsInfoContext);

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

  const TitleUpdate = (title) => {
    return title.split('-').join(' ');
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
                  <Link
                    to={'/product-info'}
                    className="text-dark"
                    onClick={props.handleNavItem}
                  >
                    <Card>
                      <img src={value.assets.imgSrc} className="card-img-top card-img-home" alt="..." />

                      <Card.Body className="small-text">
                        <h6>{TitleUpdate(value.name)}</h6>
                        <Card.Text className="mb-0">Style: {value.info.style}</Card.Text>
                        <Card.Text className="mb-0">Type: {value.info.type}</Card.Text>
                        <Card.Text className="product-price-home">Price: {value.price}</Card.Text>
                        <CardIcons product={value} showAdditionalText={false} />
                        <Button type="button" variant="warning" className="text-light font-weight-bold mt-4 d-block" onClick={() => productInfoState(value)}>
                          View Info
                        </Button>
                      </Card.Body>
                    </Card>
                  </Link>
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