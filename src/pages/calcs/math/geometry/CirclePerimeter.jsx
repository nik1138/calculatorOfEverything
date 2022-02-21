import React, { useState } from "react";
import { InputGroup, Tab, Tabs, Form, Container } from "react-bootstrap";

export default function CircePerimeter() {
  const [radiusState, setAreaRadius] = useState({ radius: "", areaRadius: "" });
  const [diameterState, setDiameter] = useState({
    diameter: "",
    areaDiameter: "",
  });
  function handleRadiusChangeRadius(value) {
    setAreaRadius({ areaRadius: value * Math.PI * 2, radius: value });
  }
  function handleRadiusChangeArea(value) {
    setAreaRadius({ radius: (value / Math.PI) * 2, areaRadius: value });
  }
  function handleChangeDiameter(value) {
    setDiameter({ areaDiameter: value * Math.PI, diameter: value });
  }
  function handleChangeDiameterArea(value) {
    setDiameter({ diameter: value / Math.PI, areaDiameter: value });
  }
  return (
    <Container fluid="sm">
      <h3>Периметр круга</h3>
      <Tabs
        defaultActiveKey="Radius"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Radius" title="Через радиус">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Радиус
            </InputGroup.Text>
            <Form.Control
              aria-label="Radius"
              aria-describedby="inputGroup-radius"
              type="number"
              value={radiusState.radius}
              onChange={(e) => handleRadiusChangeRadius(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Периметр
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Периметр"
              value={radiusState.areaRadius}
              onChange={(e) => handleRadiusChangeArea(e.target.value)}
            />
          </InputGroup>
        </Tab>
        <Tab eventKey="Diameter" title="Через диаметр">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Диаметр
            </InputGroup.Text>
            <Form.Control
              aria-label="Radius"
              aria-describedby="inputGroup-radius"
              type="number"
              value={diameterState.diameter}
              onChange={(e) => handleChangeDiameter(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Периметр
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Периметр"
              value={diameterState.areaDiameter}
              onChange={(e) => handleChangeDiameterArea(e.target.value)}
            />
          </InputGroup>
        </Tab>
      </Tabs>
    </Container>
  );
}
