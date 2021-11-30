import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "../HomePage/AppBar";
import about from "../../../media/images/about.jpg";
const AboutUs = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Row>
          <Col lg={6}>
            <div className="">
              <h2 className="fw-bold mt-5 text-custom">About us</h2>
              <p className="text-muted lh-lg mt-3">
                Welcome to Biker'S! Before buying a motorcycle, many people’s doesn’t have enough time to spent in the motorcycle showroom to gather detailed information and analyze about all the brands and models.
              </p>
              <p className="text-muted lh-lg">
                As a result most of the time buyers don’t know which brand or model is appropriate for them. Biker'S.net, makes it easy to simplify motorcycle buyer’s work. Here we mentioned almost all the motorcycle brands and their product details which is available in Bangladesh, we have presented details specifications and overview including price.
              </p>
              <p className="text-muted lh-lg">
                All the brands may have same category motorcycle but their motorcycle feature May more or less compare to the several brands. Now a buyer or a motorcycle lover can easily compare same types of motorcycle with different brands, it would be easy for them to take decision which model is appropriate.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={about}
              className="img-fluid rounded-3 mt-5"
              alt="aboutus"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
