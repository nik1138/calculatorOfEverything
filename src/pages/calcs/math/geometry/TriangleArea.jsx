import React, { useState } from "react";
import { InputGroup, Tab, Tabs, Form, Container } from "react-bootstrap";

export default function TriangleArea() {
  const [heightState, setHeightArea] = useState({
    height: 0,
    base: 0,
    area: "",
  });

  const [sideState, setSideState] = useState({
    sideA: 0,
    sideB: 0,
    sideC: 0,
    area: "",
  });

  const [angleState, setAngleState] = useState({
    side1: 0,
    side2: 0,
    angle: 0,
    area: "",
    unit: "deg",
  });

  function heightAreaChange(value) {
    setHeightArea({
      area: value * heightState.base * 0.5,
      height: value,
      base: heightState.base,
    });
  }

  function heightBaseChange(value) {
    setHeightArea({
      area: value * heightState.height * 0.5,
      base: value,
      height: heightState.height,
    });
  }

  function sideAchange(value) {
    const a = Number(value);
    const b = Number(sideState.sideB);
    const c = Number(sideState.sideC);
    const p = (a + b + c) / 2;
    setSideState({
      sideA: a,
      sideB: b,
      sideC: c,
      area: Math.sqrt(p * (p - value) * (p - b) * (p - c)),
    });
  }

  function sideBchange(value) {
    const b = Number(value);
    const a = Number(sideState.sideA);
    const c = Number(sideState.sideC);
    const p = (a + b + c) / 2;
    setSideState({
      sideA: a,
      sideB: b,
      sideC: c,
      area: Math.sqrt(p * (p - value) * (p - b) * (p - c)),
    });
  }

  function sideCchange(value) {
    const c = Number(value);
    const b = Number(sideState.sideB);
    const a = Number(sideState.sideA);
    const p = (a + b + c) / 2;
    setSideState({
      sideA: a,
      sideB: b,
      sideC: c,
      area: Math.sqrt(p * (p - value) * (p - b) * (p - c)),
    });
  }

  function side1Change(value) {
    const unit = angleState.unit;
    const side2 = angleState.side2;
    const angle = angleState.angle;
    if (!(value > 0)) {
      setAngleState({
        side1: "",
        side2: side2,
        angle: angle,
        area: "Сторона 1 не число или меньше 0",
        unit: unit,
      });
      return;
    }

    const side1 = value;

    if (!(side2 > 0)) {
      setAngleState({
        side1: side1,
        side2: "",
        angle: angle,
        unit: unit,
        area: "Сторона 2 не число или меньше 0",
      });
      return;
    }

    if (angle % angle !== 0) {
      setAngleState({
        side1: side1,
        side2: side2,
        angle: angle,
        unit: unit,
        area: "Угол должен быть числом",
      });
      return;
    }

    const radAngle = unit === "rad" ? angle : angle * (Math.PI / 180);

    setAngleState({
      side1: side1,
      side2: side2,
      unit: unit,
      angle: angle,
      area: Math.abs(side1 * side2 * 0.5 * Math.sin(radAngle)),
    });
  }

  function side2Change(value) {
    const unit = angleState.unit;
    const side1 = angleState.side1;
    const angle = angleState.angle;
    if (!(value > 0)) {
      setAngleState({
        side1: side1,
        side2: "",
        angle: angle,
        unit: unit,
        area: "Сторона 2 не число или меньше 0",
      });
      return;
    }

    const side2 = value;

    if (!(side1 > 0)) {
      setAngleState({
        side1: "",
        side2: side2,
        unit: unit,
        angle: angle,
        area: "Сторона 1 не число или меньше 0",
      });
      return;
    }

    if (angle % angle !== 0) {
      setAngleState({
        side1: side1,
        unit: unit,
        side2: side2,
        angle: "",
        area: "Угол должен быть числом",
      });
      return;
    }
    const radAngle = unit === "rad" ? angle : angle * (Math.PI / 180);

    setAngleState({
      side1: side1,
      unit: unit,
      side2: side2,
      angle: angle,
      area: Math.abs(side1 * side2 * 0.5 * Math.sin(radAngle)),
    });
  }

  function angleChange(value) {
    const unit = angleState.unit;
    const side1 = angleState.side1;
    const side2 = angleState.side2;

    if (value % value !== 0) {
      setAngleState({
        side1: side1,
        unit: unit,
        side2: side2,
        angle: "",
        area: "Угол должен быть числом",
      });
      return;
    }
    const angle = value;

    if (!(side2 > 0)) {
      setAngleState({
        side1: side1,
        unit: unit,
        side2: "",
        angle: angle,
        area: "Сторона 2 не число или меньше 0",
      });
      return;
    }

    if (!(side1 > 0)) {
      setAngleState({
        side1: "",
        unit: unit,
        side2: side2,
        angle: angle,
        area: "Сторона 1 не число или меньше 0",
      });
      return;
    }

    const radAngle = unit === "rad" ? angle : angle * (Math.PI / 180);

    setAngleState({
      side1: side1,
      side2: side2,
      unit: unit,
      angle: angle,
      area: Math.abs(side1 * side2 * 0.5 * Math.sin(radAngle)),
    });
  }

  function handleUnitChange(value) {
    const unit = value;
    const side1 = angleState.side1;
    const side2 = angleState.side2;
    const angle = angleState.angle;

    if (!(side2 > 0)) {
      setAngleState({
        side1: side1,
        unit: unit,
        side2: "",
        angle: angle,
        area: "Сторона 2 не число или меньше 0",
      });
      return;
    }

    if (!(side1 > 0)) {
      setAngleState({
        side1: "",
        unit: unit,
        side2: side2,
        angle: angle,
        area: "Сторона 1 не число или меньше 0",
      });
      return;
    }

    if (angle % angle !== 0) {
      setAngleState({
        side1: side1,
        unit: unit,
        side2: side2,
        angle: "",
        area: "Угол должен быть числом",
      });
      return;
    }

    const radAngle = unit === "rad" ? angle : angle * (Math.PI / 180);

    setAngleState({
      side1: side1,
      side2: side2,
      unit: unit,
      angle: angle,
      area: Math.abs(+side1 * +side2 * 0.5 * Math.sin(+radAngle)),
    });
  }

  return (
    <Container fluid="sm">
      <h3>Площадь треугольника</h3>
      <Tabs
        defaultActiveKey="height"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="height" title="По основанию и высоте">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Основание
            </InputGroup.Text>
            <Form.Control
              aria-label="base"
              aria-describedby="inputGroup-radius"
              type="number"
              placeholder="Основание"
              value={heightState.base}
              onChange={(e) => heightBaseChange(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Высота
            </InputGroup.Text>
            <Form.Control
              aria-label="Radius"
              aria-describedby="inputGroup-radius"
              type="number"
              placeholder="Высота"
              value={heightState.height}
              onChange={(e) => heightAreaChange(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Площадь
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Площадь"
              readOnly
              value={heightState.area}
            />
          </InputGroup>
        </Tab>
        <Tab eventKey="sides" title="По трём сторонам">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Сторона A
            </InputGroup.Text>
            <Form.Control
              aria-label="Radius"
              aria-describedby="inputGroup-radius"
              placeholder="Сторона A"
              type="number"
              value={sideState.sideA}
              onChange={(e) => sideAchange(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Сторона B
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Сторона B"
              value={sideState.sideB}
              onChange={(e) => sideBchange(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Сторона С
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Сторона B"
              value={sideState.sideC}
              onChange={(e) => sideCchange(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Площадь
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Площадь"
              readOnly
              value={sideState.area}
            />
          </InputGroup>
        </Tab>
        <Tab eventKey="angle" title="По двум сторонам и углу между ними">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Сторона A
            </InputGroup.Text>
            <Form.Control
              aria-label="Radius"
              aria-describedby="inputGroup-radius"
              placeholder="Сторона A"
              type="number"
              value={angleState.side1}
              onChange={(e) => side1Change(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Сторона B
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Сторона B"
              value={angleState.side2}
              onChange={(e) => side2Change(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Угол
            </InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Угол между сторонами"
              value={angleState.angle}
              onChange={(e) => angleChange(e.target.value)}
            />
            <Form.Select
              value={angleState.unit}
              onChange={(e) => handleUnitChange(e.target.value)}
            >
              <option disabled>Единицы измерения</option>
              <option value="rad">Радианы</option>
              <option value="deg">Градусы</option>
            </Form.Select>
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Площадь
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Площадь"
              readOnly
              value={angleState.area}
            />
          </InputGroup>
        </Tab>
      </Tabs>
    </Container>
  );
}
