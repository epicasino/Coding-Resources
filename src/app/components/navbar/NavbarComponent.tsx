import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Row,
  Col,
  Button,
  ListGroup,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { pureLinksArray, allLinks } from '@/app/resourceLinks/allLinks';

import styles from './navbarComponent.module.css';

interface iLinks {
  title: string;
}

interface iSubSectionLinkArray {
  title: string;
  url: string;
}

export default function NavbarComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<iSubSectionLinkArray> | null>(
    null
  );

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const handleSearch = (query: string) => {
    const result = pureLinksArray.filter((link: iSubSectionLinkArray) => {
      if (query === '') {
        return '';
      } else if (link.title.toLowerCase().includes(query.toLowerCase())) {
        return link;
      }
    });

    // console.log(result);
    setResults(result);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary p-3 justify-content-between align-items-center"
      >
        <Navbar.Brand>
          <a href="/" className="text-decoration-none text-light fs-3">
            Coding Resources
          </a>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Sections" className="fs-4">
              {/* Add map function for different sections */}
              {allLinks.map((link: iLinks) => (
                <NavDropdown.Item
                  key={link.title}
                  href={`#${link.title.split(' ').join('')}`}
                >
                  {link.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* Searchbar: Add functionality later */}
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Col xs="auto" className="p-0">
              <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="outline-success">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      <ListGroup className={`col-lg-2 offset-lg-10 ${styles.listGroup}`}>
        {results?.map((result) => (
          <ListGroup.Item key={result.title}>
            <a
              href={result.url}
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              {result.title}
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
