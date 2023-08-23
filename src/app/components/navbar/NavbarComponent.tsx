import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary p-3 justify-content-between align-items-center fixed-top"
      >
        <Navbar.Brand>
          <a href="/" className='text-decoration-none text-light fs-3'>Coding Resources</a>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Sections" className='fs-4'>
              {/* Add map function for different sections */}
              <NavDropdown.Item>Hi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* Searchbar: Add functionality later */}
        <Form>
          <Row>
            <Col xs="auto" className="p-0">
              <Form.Control type="text" placeholder="Search" />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="outline-success">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
}
