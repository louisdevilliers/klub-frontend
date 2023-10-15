import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand>
        <LinkContainer to="/">
          <Nav.Link>Klub</Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/admin">
            <Nav.Link>Admin</Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="/orders">
            <Nav.Link>Order</Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="/events">
            <Nav.Link>Events</Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          {/* ... other navlinks ... */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
