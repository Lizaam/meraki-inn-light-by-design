import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './services.component.scss';
import PageIndication from '../../components/page-indication/page-indication.component';

const ServicesComponent = () => {
  return (
    <React.Fragment>
      <PageIndication page="Services" />

      <Container className="py-4">
        <Row>
          <Col md={12} className="mb-4">
            <h5>DELIVERY</h5>
            <p>HELLO AND WELCOME TO THE SHIPPING AND DELIVERY INFORMATION PAGE! HERE YOU CAN GET ACQUAINTED WITH USEFUL INFORMATION ON TERMS AND CONDITIONS OF OUR GOODS DELIVERY
            </p>
            <small>
              You can purchase your items online and pick them up at our street store, or ship them directly to your doorstep. Shipping is free on some orders. We use the best carriers in the business to make sure your order gets to you on time. From the Secure Checkout page you'll see your item description, price and delivery timing. Where available, you can also choose a faster delivery method for each item on your order, for an additional fee. Delivery times vary according to your selected delivery address, availability of your items and the time of day you place your order.
            </small>
          </Col>
          <Col md={12} className="mb-4">
            <h5 className="mb-4">COST</h5>

            <Row className="px-3">
              <div className="table-block service-block">
                <div className="table-block_wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th className="border px-3">Services</th>
                        <th className="border px-3">Locations</th>
                        <th className="border px-3">Delivery Schedule</th>
                        <th className="border px-3">Cost Per Shipment</th>
                      </tr>
                    </thead>
                    <tbody className="border">
                      <tr className="border-right">
                        <td data-th="Services">Royal mail 1st Class Service (Order value $20 or less)</td>
                        <td data-th="Locations">All of UK &amp; some European Countries</td>
                        <td data-th="Delivery Schedule">1-3 days Monday - Saturday</td>
                        <td data-th="Cost Per Shipment">$5</td>
                      </tr>
                      <tr>
                        <td data-th="Services">Royal mail Tracker (Order value $50 or less)</td>
                        <td data-th="Locations">All of UK</td>
                        <td data-th="Delivery Schedule">1-3 days Delivery 7.30am - 5.30am Monday - Friday</td>
                        <td data-th="Cost Per Shipment">$45</td>
                      </tr>
                      <tr>
                        <td data-th="Services">Standard Courier Delivery</td>
                        <td data-th="Locations">UK mainland only</td>
                        <td data-th="Delivery Schedule">1-3 days Monday - Saturday</td>
                        <td data-th="Cost Per Shipment">$124</td>
                      </tr>
                      <tr>
                        <td data-th="Services">Standard Courier Delivery</td>
                        <td data-th="Locations">Northern Ireland, Eire, Scilly Isles</td>
                        <td data-th="Delivery Schedule">1-3 days Delivery 7.30am - 5.30am Monday - Friday</td>
                        <td data-th="Cost Per Shipment">$11</td>
                      </tr>
                      <tr>
                        <td data-th="Services">Royal mail 1st Class Service (Order value $20 or less)</td>
                        <td data-th="Locations">All of UK &amp; some European Countries</td>
                        <td data-th="Delivery Schedule">1-3 days Monday - Saturday</td>
                        <td data-th="Cost Per Shipment">$5</td>
                      </tr>
                      <tr>
                        <td data-th="Services">Priority courier pre 12pm Next Working Day</td>
                        <td data-th="Locations">UK mainland only</td>
                        <td data-th="Delivery Schedule">1-3 days Delivery 7.30am - 5.30am Monday - Friday</td>
                        <td data-th="Cost Per Shipment">$89</td>
                      </tr>
                      <tr>
                        <td data-th="Services">Royal mail 1st Class Service (Order value $20 or less)</td>
                        <td data-th="Locations">All of UK &amp; some European Countries</td>
                        <td data-th="Delivery Schedule">1-3 days Monday - Saturday</td>
                        <td data-th="Cost Per Shipment">$72</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Row>
          </Col>
          <Col md={12}>
            <h5>FREE DELIVERY</h5>
            <small>
              Free two-day shipping is available on in-stock items. You can see in your bag if your item is in stock. Free two-day shipping is not available on customized, engraved products, and for certain order types, including orders paid for with financing or by bank transfer. To get free two-day shipping, you will need to place your order by 5pm, Monday to Friday. For instance, if you order your goods before 5:00 pm, Monday to Friday we will deliver them in two business days.
            </small>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ServicesComponent;