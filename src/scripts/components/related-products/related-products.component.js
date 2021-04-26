import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './related-products.component.scss';

const RelatedProductsComponent = (props) => {
  const TitleUpdate = (title) => {
    return title.split('-').join(' ');
  }

  const HandleProductInfoView = (event) => {
    props.onHandleProductInfoView(event);
  }

  return (
    <Card>
      <Card.Header>
        <img
          src={props.productData.assets.imgSrc}
          className="card-img-top card-img-home"
          alt="..."
        />
      </Card.Header>

      <Card.Body className="small-text">
        <h6>{TitleUpdate(props.productData.name)}</h6>
        <Card.Text className="mb-0">{props.productData.bulk}</Card.Text>
        <Card.Text className="product-price-home">Price: {props.productData.price}</Card.Text>
        <Button 
          type="button" 
          variant="warning" 
          className="text-light font-weight-bold mt-4 d-block"
          data-key={props.productKey} 
          onClick={HandleProductInfoView}
        >
          View Info
        </Button>
      </Card.Body>
    </Card>
  )
}

export default RelatedProductsComponent;