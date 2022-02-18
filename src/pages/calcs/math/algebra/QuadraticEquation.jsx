import React, { useState } from "react";
import { Container, InputGroup, Form } from "react-bootstrap";

export default function QuadraticEquation() {
  const [state, setState] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    x1: "",
    x2: "",
  });

  function discriminant(a, b, c) {
    if (a === 0) return -1;
    const d = b * b - 4 * a * c;
    console.log(d);
    return d;
  }

  function handleAChange(value) {
    const realA = Number(value);
    const realB = Number(state.b);
    const realC = Number(state.c);
    const realD = discriminant(realA, realB, realC);
    quadratic(realA, realB, realC, realD);
  }

  function handleBChange(value) {
    const realA = Number(state.a);
    const realB = Number(value);
    const realC = Number(state.c);
    const realD = discriminant(realA, realB, realC);
    quadratic(realA, realB, realC, realD);
  }

  function handleCChange(value) {
    const realA = Number(state.a);
    const realB = Number(state.b);
    const realC = Number(value);
    const realD = discriminant(realA, realB, realC);
    quadratic(realA, realB, realC, realD);
  }

  function quadratic(a, b, c, d) {
    if (d < 0) {
      setState({
        a: a,
        b: b,
        c: c,
        d: d,
        x1: "нет корней",
        x2: "нет корней",
      });
    }

    if (d >= 0) {
      setState({
        a: a,
        b: b,
        c: c,
        d: d,
        x1: (-b + Math.sqrt(d)) / (2 * a),
        x2: (-b - Math.sqrt(d)) / (2 * a),
      });
    }
    console.log(state);
  }

  return (
    <Container fluid="sm">
      <h3>Нахождение корней квадратного уравнения</h3>

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
        <InputGroup.Text>X1</InputGroup.Text>
        <Form.Control type="text" disabled readOnly value={state.x1} />
        <InputGroup.Text>X2</InputGroup.Text>
        <Form.Control type="text" disabled readOnly value={state.x2} />
      </InputGroup>
    </Container>
  );
}
