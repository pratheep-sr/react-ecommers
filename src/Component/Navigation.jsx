import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.jpg";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";

function Navigation() {
  let [store, setstore] = useState(false);

  // cart popup function
  function cartpopup(){
    
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo}   />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "center" }}>
          <Nav
            style={{ maxHeight: "200px", justifyContent: "center" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About{" "}
            </Nav.Link>

            <NavDropdown
              title="Ourproducts"
              id="navbarScrollingDropdown"
              show={store}
              onMouseOver={() => {
                return setstore(true);
              }}
              onMouseLeave={() => {
                return setstore(false);
              }}
            >
              <NavDropdown.Item as={Link} to="/Karasev">
                Karasev
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Cornmixture">
                Corn Mixture
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Combo">
              Combo
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CgProfile className="profile" />
        <div className="cart-button" onClick={cartpopup()}>
          <Button variant="secondary" className="button">
            {" "}
            <FaCartArrowDown className="cart" />{" "}
            <span className="cart-cound">0</span>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
