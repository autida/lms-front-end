import {Container , Navbar, Nav, NavDropdown } from 'react-bootstrap';
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Learning Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#link">Assignments</Nav.Link> */}
            {/* <NavDropdown title="Assignments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Views Assignments</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Submit Assignments
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
  )
}

export default Header