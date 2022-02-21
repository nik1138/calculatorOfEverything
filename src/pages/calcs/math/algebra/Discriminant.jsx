import React, { useState } from "react";
import { Container, InputGroup, Form } from "react-bootstrap";

export default function Discriminant() {
  const [state, setState] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  function discriminant(a, b, c) {
    const d = b * b - 4 * a * c;
    console.log(d);
    setState({
      a: a,
      b: b,
      c: c,
      d: d,
    });
  }

  function handleAChange(value) {
    const realA = Number(value);
    const realB = Number(state.b);
    const realC = Number(state.c);
    discriminant(realA, realB, realC);
  }

  function handleBChange(value) {
    const realA = Number(state.a);
    const realB = Number(value);
    const realC = Number(state.c);
    discriminant(realA, realB, realC);
  }

  function handleCChange(value) {
    const realA = Number(state.a);
    const realB = Number(state.b);
    const realC = Number(value);
    discriminant(realA, realB, realC);
  }

  return (
    <Container fluid="sm">
      <h3>Нахождение дискриминанта квадратного уравнения</h3>

      <InputGroup size="md" className="mb-3">
        <Form.Control
          type="number"
          placeholder="A"
          value={state.a}
          onChange={(e) => handleAChange(e.target.value)}
        />
        <InputGroup.Text>x^2 +</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder="B"
          value={state.b}
          onChange={(e) => handleBChange(e.target.value)}
        />
        <InputGroup.Text>x +</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder="C"
          value={state.c}
          onChange={(e) => handleCChange(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Дискриминант</InputGroup.Text>
        <Form.Control type="text" disabled readOnly value={state.d} />
      </InputGroup>
    </Container>
  );
}
