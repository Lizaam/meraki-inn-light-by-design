import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CardIcons from '../card-icons/card-icons.component';
import { ProductsInfoContext } from '../../../App';
import './product-cards.component.scss';
import { Link } from 'react-router-dom';

const ProductCards = (props) => {
  const [, productInfoState] = useContext(ProductsInfoContext);

  const TitleUpdate = (title) => {
    return title.split('-').join(' ');
  }

  return (
    <Link to={{
        pathname: '/product-info',
        data: {
          urlHistory: props.urlHistory,
          productType: props.productData,
          filterString: props.filterString,
          relatedProducts: props.relatedProducts
        }
      }}
      className="text-dark">
      <Card onClick={() => productInfoState(props.productData)}>
        <Card.Header>
          <img
            src={props.productData.assets.imgSrc}
            className="card-img-top card-img-home"
            alt="..."
          />
        </Card.Header>

        <Card.Body className="small-text">
          <h6>{TitleUpdate(props.productData.name)}</h6>
          <Card.Text className="mb-0">Style: {props.productData.info.style}</Card.Text>
          <Card.Text className="mb-0">Type: {props.productData.info.type}</Card.Text>
          <Card.Text className="product-price-home">Price: {props.productData.price}</Card.Text>
          <CardIcons product={props.productData} showAdditionalText={false} />
          <Button type="button" variant="warning" className="text-light font-weight-bold mt-4 d-block">
            View Info
          </Button>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default ProductCards;