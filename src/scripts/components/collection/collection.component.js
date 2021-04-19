import React, { useState, useEffect, useContext } from 'react';

// Styles
import './collection.component.scss';
import '../../../styles/_global.scss';

// Libraries
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';

// Components
import ProgressComponent from '../../components/progress/progress.component';
import CardIcons from '../card-icons/card-icons.component';

// Context
import { ProductsInfoContext } from '../../../App';

// Modules
import CONSTANTS from '../../modules/constants';

// Providers
import { GetAllProducts } from '../../providers/products.provider';

const Collection = (props) => {
  // local variables
  const CollectionIteration = 4;
  const CollectionLimit = CollectionIteration * 2;

  // state and context
  const [product, setProduct] = useState({ loading: true, data: null });
  const [productSize, setProductSize] = useState(CollectionIteration);
  const [productInfo, productInfoState] = useContext(ProductsInfoContext);

  // info logging
  if (productInfo.length > 0) {
    console.log(productInfo);
  }

  useEffect(() => {
    const IsProductStorageKeySet = localStorage.getItem(CONSTANTS.storageKeys.all);

    if (!IsProductStorageKeySet) {
      GetAllProducts().then(data => {
        setProduct({
          loading: false,
          data: data.products
        });

        localStorage.setItem(CONSTANTS.storageKeys.all, JSON.stringify(data));
      })
    } else {
      const storageData = JSON.parse(IsProductStorageKeySet);

      setProduct({
        loading: false,
        data: storageData.products
      });
    }
  }, []);

  const loadMoreItems = () => {
    if (productSize < CollectionLimit) {
      setProductSize(productSize + CollectionIteration);
    }
  }

  const titleUpdate = (title) => {
    return title.split('-').join(' ');
  }

  const redirectToCatalogue = () => {
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

  const seeMoreItems = () => {
    return (
      <Button type="button" variant="dark" className="text-light font-weight-bold mt-4 mb-2" onClick={loadMoreItems}>
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
                        <h6>{titleUpdate(value.name)}</h6>
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
          }
        </Row>

        <Row>
          <Col className="text-center">
            {productSize < CollectionLimit ? seeMoreItems() : redirectToCatalogue()}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
};

export default Collection;