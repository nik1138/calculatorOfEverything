import React from "react";
import { Container } from "react-bootstrap";
import TitlesBlock from "../components/TitelsBlock";
import titles from "../data/physics/physics";

export default function Physics() {
  return (
    <>
      <TitlesBlock titles={titles} name="Физика" />
    </>
  );
}
