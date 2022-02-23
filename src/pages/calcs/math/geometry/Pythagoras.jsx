import React, { useState } from "react";
import { InputGroup, Tab, Tabs, Form, Container } from "react-bootstrap";

export default function Pythagoras() {
  const [hypotenuseState, setHypotenuseState] = useState({
    hypotenuse: "",
    leg1: "",
    leg2: "",
  });

  const [legState, setLegState] = useState({
    hypotenuse: "",
    leg1: "",
    leg2: "",
  });

  function hypotenuseLeg1Change(value) {
    const leg2 = hypotenuseState.leg2;

    if (!(value > 0)) {
      setHypotenuseState({
        hypotenuse: "Катет 1 не число или меньше 0",
        leg1: "",
        leg2: leg2,
      });
      return;
    }

    const leg1 = value;

    if (!(leg2 > 0)) {
      setHypotenuseState({
        hypotenuse: "Катет 2 не число или меньше 0",
        leg1: leg1,
        leg2: "",
      });
      return;
    }

    setHypotenuseState({
      hypotenuse: Math.sqrt(leg1 * leg1 + leg2 * leg2),
      leg1: value,
      leg2: leg2,
    });
  }

  function hypotenuseLeg2Change(value) {
    const leg1 = hypotenuseState.leg1;

    if (!(value > 0)) {
      setHypotenuseState({
        hypotenuse: "Катет 2 не число или меньше 0",
        leg1: leg1,
        leg2: "",
      });
      return;
    }

    const leg2 = value;

    if (!(value > 0)) {
      setHypotenuseState({
        hypotenuse: "Катет 1 не число или меньше 0",
        leg1: "",
        leg2: leg2,
      });
      return;
    }
    setHypotenuseState({
      hypotenuse: Math.sqrt(leg1 * leg1 + leg2 * leg2),
      leg1: leg1,
      leg2: leg2,
    });
  }

  function legChange(value) {
    const hypotenuse = legState.hypotenuse;

    if (!(value > 0)) {
      setLegState({
        hypotenuse: hypotenuse,
        leg1: "",
        leg2: "Катет не число или меньше 0",
      });
      return;
    }

    const leg1 = value;

    if (!(hypotenuse > 0)) {
      setLegState({
        hypotenuse: "",
        leg1: leg1,
        leg2: "Гипотенуза не число или меньше 0",
      });
      return;
    }

    if (+leg1 > +hypotenuse) {
      setLegState({
        hypotenuse: hypotenuse,
        leg1: hypotenuse,
        leg2: "Катет не может быть больше гипотенузы",
      });
      return;
    }

    setLegState({
      hypotenuse: hypotenuse,
      leg1: leg1,
      leg2: Math.sqrt(hypotenuse * hypotenuse - leg1 * leg1),
    });
  }

  function hypotenuseChange(value) {
    const leg1 = legState.leg1;

    if (!(value > 0)) {
      setLegState({
        hypotenuse: "",
        leg1: leg1,
        leg2: "Гипотенуза не число или меньше 0",
      });
      return;
    }

    const hypotenuse = value;

    if (!(leg1 > 0)) {
      setLegState({
        hypotenuse: hypotenuse,
        leg1: "",
        leg2: "Катет не число или меньше 0",
      });
      return;
    }

    if (+leg1 > +hypotenuse) {
      setLegState({
        hypotenuse: hypotenuse,
        leg1: hypotenuse,
        leg2: "Катет не может быть больше гипотенузы",
      });
      return;
    }

    setLegState({
      hypotenuse: hypotenuse,
      leg1: leg1,
      leg2: Math.sqrt(hypotenuse * hypotenuse - leg1 * leg1),
    });
  }

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
              value={hypotenuseState.leg1}
              onChange={(e) => hypotenuseLeg1Change(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Катет 2</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Катет 2"
              value={hypotenuseState.leg2}
              onChange={(e) => hypotenuseLeg2Change(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Гипотенуза</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Гипотенуза"
              readOnly
              value={hypotenuseState.hypotenuse}
            />
          </InputGroup>
        </Tab>
        <Tab eventKey="Сathetus" title="Нахождение катета">
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Гипотенуза</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Гипотенуза"
              value={legState.hypotenuse}
              onChange={(e) => hypotenuseChange(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Известный Катет</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Катет"
              value={legState.leg1}
              onChange={(e) => legChange(e.target.value)}
            />
          </InputGroup>
          <InputGroup size="md" className="mb-3">
            <InputGroup.Text>Искомый Катет</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Катет"
              readOnly
              value={legState.leg2}
            />
          </InputGroup>
        </Tab>
      </Tabs>
    </Container>
  );
}
