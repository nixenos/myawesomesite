import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pl-lg-5">
              <p className="text-uppercase font-weight-medium f-14 mb-4">Wojciech Janota</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4"><span className="text-primary font-weight-medium">Welcome to my page!</span></h1>
              <p className="text-muted mb-4 pb-2">This is my personal website on which I post my work and experience for recruitment, my contact information and where I blog about my interests (DevOps, C++, kernel development and more!). If you are interested please check it out! </p>
              <a href="#blog" className="btn btn-warning">My awesome blog!<span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;