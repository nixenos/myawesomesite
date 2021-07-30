import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/" className="text-primary">NIXENOS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="work">WORK</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="contact">CONTACT/SUPPORT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="blog">BLOG</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;