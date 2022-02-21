import React from "react";
import { Container } from "react-bootstrap";
import TitlesBlock from "../components/TitlesBlock";
import titles from "../data/titles";

export default function Home() {
  return (
    <>
      <Container>
        <TitlesBlock titles={titles} name="Выберите раздел" />
      </Container>
    </>
  );
}
