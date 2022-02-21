import React from "react";
import { InputGroup, Tab, Tabs, Form, Container } from "react-bootstrap";

export default function Pythagoras() {
  return (
    <Container fluid="sm">
      <h3>Теорема пифагора</h3>
      <Tabs defaultActiveKey="Hypotenuse" className="mb-3">
        <Tab eventKey="Hypotenuse" title="Нахождение гипотенузы">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Катет 1</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Катет 1"
              // value={radiusState.radius}
              // onChange={(e) => handleRadiusChangeRadius(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Катет 2</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Катет 2"
              // value={radiusState.radius}
              // onChange={(e) => handleRadiusChangeRadius(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Гипотенуза</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Гипотенуза"
              readOnly
              // value={radiusState.areaRadius}
              // onChange={(e) => handleRadiusChangeArea(e.target.value)}
            />
          </InputGroup>
        </Tab>
        <Tab eventKey="Сathetus" title="Нахождение катета">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Гипотенуза</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Гипотенуза"
              // value={diameterState.diameter}
              // onChange={(e) => handleChangeDiameter(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Известный Катет</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Катет"
              // value={diameterState.areaDiameter}
              // onChange={(e) => handleChangeDiameterArea(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Искомый Катет</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Катет"
              readOnly
              // value={diameterState.areaDiameter}
              // onChange={(e) => handleChangeDiameterArea(e.target.value)}
            />
          </InputGroup>
        </Tab>
      </Tabs>
    </Container>
  );
}
