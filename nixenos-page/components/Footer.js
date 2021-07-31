import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 1, title : "Socials",
      child : [
          { title : "Facebook", link : "#" },
          { title : "Twitter", link : "#" },
          { title : "LinkedIn", link : "#" },
          { title : "GitHub", link : "#" }
      ]
    },
    { id : 2, title : "Interesting links",
      child : [
          { title : "FSF webpage", link : "/" },
          { title : "Linux kernel mailing list", link : "/" },
          { title : "Terraform webpage", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <h6 className="text-dark mb-3">E-mail</h6>
              <div className="mb-4">
                <a href="mailto:wojciech.janota@nixenos.ovh" className="text-muted mt-4 mb-2">wojciech.janota@nixenos.ovh</a>
                <br />
                <a href="mailto:janota241@gmail.com" className="text-muted font-weight-normal">janota241@gmail.com</a>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Crypto</h6>
                <ul className="list-unstyled company-sub-menu">
                    <li>Monero wallet: </li>
                    <li>Bitcoin wallet: </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">Wojciech Janota @ 2021</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;