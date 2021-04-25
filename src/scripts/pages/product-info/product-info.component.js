import React, { useState, useContext, useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ProductsInfoContext } from '../../../App';
import PageIndication from '../../components/page-indication/page-indication.component';
import Bell from '../../../assets/images/icons/bell.png';
import Hand from '../../../assets/images/icons/hand.PNG';
import './product-info.component.scss';
import { ProductDictionary } from './additional-info';
import CardIcons from '../../components/card-icons/card-icons.component';
import ImageViewer from 'react-simple-image-viewer';
import { Link } from 'react-router-dom';

const tabs = ['Product Function', 'Additional Information'];

const ProductInfoComponent = (props) => {
  const [productInfo] = useContext(ProductsInfoContext);
  const [description, expandDescription] = useState(false);
  const [tab, tabState] = useState(tabs[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const UpdateTabState = (event) => {
    tabState(event.currentTarget.dataset.tab);
  }

  const ToggleAdditionalInformation = (tab) => {
    switch (tab.toLowerCase()) {
      case 'product function':
        return <div>{ProductDictionary[productInfo.info.type]}</div>
      case 'additional information':
        return <div>No Additional Information.</div>
      default:
        return <div>No Information To View.</div>
    }
  }

  const UpdateExpandState = () => {
    expandDescription(!description);
  }

  const images = [ productInfo.assets.imgSrc ]

  const OpenImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const CloseImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }

  return (
    <React.Fragment>
      <PageIndication page="Product Info" />

      <Container className="my-5">
        <Row>
          <Col md={8} sm={6} xs={12} className="h-fit-content">
            <div className="image-wrapper mb-5">
              <div className="product-info-nav-buttons">
                <Link to={props.location.data.urlHistory} className="text-dark">
                  <p>
                    <i className="fa fa-arrow-left"></i> Go Back
                  </p>
                </Link>
              </div>

              <img
                src={productInfo.assets.imgSrc}
                className="rounded d-block mx-auto" alt="..."
                onClick={() => OpenImageViewer(0)}
              />
            </div>

            <div className="product-page-extra-information">
              <p>More information about our products below.</p>

              <ul className="list-unstyled additional-information-tab-list">
                {
                  tabs.map((value, key) => {
                    return (
                      <li className={tab === value ? 'tab-active' : ''} key={key} data-tab={value} onClick={UpdateTabState}>
                        { value}
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="info-section">
              {ToggleAdditionalInformation(tab)}
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="product-header-details mb-3">
              <p className="mb-0">{productInfo.name}</p>
              <CardIcons product={productInfo} showAdditionalText={true} />
            </div>

            <div className="product-mail-details mb-3">
              <h3>{productInfo.colour} - {productInfo.globeType}</h3>
              <h3>{productInfo.price}</h3>
              <p className="my-3">{productInfo.bulk}</p>
              <Button variant={"warning"} id="btn-request-product" className="w-100 my-3 text-light">Send Product Request</Button>
            </div>

            <div className="product-extra-details mb-3">
              <ul className="list-unstyled">
                <li>
                  <span>
                    <img src={Bell} width="10%" alt="..." />
                    <div className="catch-phrase">
                      <span>Don't miss out. </span>
                      Limited stock available.
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                    <img src={Hand} width="10%" alt="..." />
                    <div className="catch-phrase">
                      <span>Handcrafted </span>
                      with metal and steel.
                    </div>
                  </span>
                </li>
              </ul>
            </div>

            <div className="product-description mb-3" aria-hidden={description}>
              <span className="d-block mb-2">Description</span>

              <ul className={description ? `description-expanded` : ``}>
                <li>Integrated led fixture: No</li>
                <li>Lamp base: {productInfo.globeType}</li>
                <li>Wattage: 40W</li>
                <li>Voltage: 220V</li>
                <li>Ip Rating: IP20</li>
                <li>Warranty: 1yr</li>
                <li>Colour: {productInfo.colour}</li>
                <li>Dimensions: H:{productInfo.height} X W:{productInfo.width}</li>
                <li>Lamp included: No</li>
                <li>Material: Metal and steel</li>
              </ul>

              <Button variant={"light"} id="btn-learn-more" className="d-block mx-auto" onClick={UpdateExpandState}>
                {description ? `See less` : `Learn more about this item`}
              </Button>
            </div>
          </Col>
        </Row>

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={CloseImageViewer}
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default ProductInfoComponent;