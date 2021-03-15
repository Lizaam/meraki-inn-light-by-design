import React, { useState, useEffect, useContext } from 'react';

// Styles
import './collection.component.scss';
import '../../../styles/_global.scss';

// Libraries
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';

// Components
import ProgressComponent from '../../components/progress/progress.component';
import CardIcons from '../card-icons/card-icons.component';

// Context
import { ProductsInfoContext } from '../../../App';

const Collection = (props) => {
  const url = `https://meraki-products.herokuapp.com/meraki-products`;
  const collectionIteration = 4;
  const [product, setProduct] = useState({ loading: true, data: null });
  const [productSize, setProductSize] = useState(collectionIteration);
  const [productInfo, productInfoState] = useContext(ProductsInfoContext);
  var itemsLimit = 12;

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
    if (productSize < itemsLimit) {
      setProductSize(productSize + collectionIteration);
    }
  };

  const titleUpdate = (title) => {
    return title.split('-').join(' ');
  };

  const redirectToCatalogue = () => {
    return (
      <Link to="/catalogue">
        <Button type="button" variant="warning" className="text-light font-weight-bold">
          View Catalogue
        </Button>
      </Link>
    );
  };

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
        </Row>

        <Row>
          <Col className="text-center">
            {productSize < itemsLimit ? seeMoreItems() : redirectToCatalogue()}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
};

export default Collection;