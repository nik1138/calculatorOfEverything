import { Outlet } from "react-router-dom";

import React from "react";
import { Col, Container, Navbar, Row, Nav, Card, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import corgi from "../images/corgi.jpg";

export default function Layout() {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="md">
          <Nav>
            <LinkContainer to="/">
              <Navbar.Brand>Калькулятор всего</Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Все разделы</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>О сайте</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Row>
          <Col xs={0}></Col>
          <Col md={8}>
            <Outlet />
          </Col>
          <Col md={2}>
            <br />
            <Card>
              <Image src={corgi} />
              <Card.Body>
                <Card.Title>Это корги</Card.Title>
                <Card.Text>А могла быть ваша реклама.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
