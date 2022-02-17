import React, { useState } from "react";
import { InputGroup, Tab, Tabs, Form, Container } from "react-bootstrap";

export default function CircleArea() {
  const [radiusState, setAreaRadius] = useState({ radius: "", areaRadius: "" });
  const [diameterState, setDiameter] = useState({
    diameter: "",
    areaDiameter: "",
  });
  function handleRadiusChangeRadius(value) {
    const radius = Number(value);
    setAreaRadius({ areaRadius: radius * radius * Math.PI, radius: radius });
  }
  function handleRadiusChangeArea(value) {
    const area = Number(value);
    setAreaRadius({ radius: Math.sqrt(area / Math.PI), areaRadius: area });
  }
  function handleChangeDiameter(value) {
    const diameter = Number(value);
    setDiameter({
      areaDiameter: (diameter * diameter * Math.PI) / 4,
      diameter: diameter,
    });
  }
  function handleChangeDiameterArea(value) {
    const area = Number(value.replace(/[^0-9]/g, ""));
    console.log("был ввод ", value);
    setDiameter({
      diameter: Math.sqrt(area * 4),
      areaDiameter: value.replace(/[^0-9]/g, ""),
    });
  }
  return (
    <Container fluid="sm">
      <h2>Площадь круга</h2>
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
              Площадь
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Площадь"
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
              Площадь
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Площадь"
              value={diameterState.areaDiameter}
              onChange={(e) => handleChangeDiameterArea(e.target.value)}
            />
          </InputGroup>
        </Tab>
      </Tabs>
    </Container>
  );
}
