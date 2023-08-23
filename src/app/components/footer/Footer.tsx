import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Card className="text-center mt-4">
        <Card.Header className="fs-5">Coding Resources</Card.Header>
        <Card.Body className="lh-lg py-4">
          <h5>Made with ❤ By:</h5>
          <h4>Ray (Epicasino)</h4>
        </Card.Body>
        <Card.Footer>
          <a
            className="mx-1 text-body-tertiary"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/epicasino"
          >
            GitHub
          </a>
          <a
            className="mx-1 text-body-tertiary"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ray-badua/"
          >
            LinkedIn
          </a>
          <a
            className="mx-1 text-body-tertiary"
            target="_blank"
            rel="noreferrer"
            href="https://raybadua.netlify.app/"
          >
            Portfolio
          </a>
        </Card.Footer>
      </Card>
    </footer>
  );
}
