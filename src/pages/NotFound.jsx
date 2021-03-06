import React from "react";
import { Button } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

export default function NotFound() {
  return (
    <>
      <h1>Страница отсутствует или находится в разработке</h1>
      <LinkContainer to="/">
        <Button className="mx-2 my-1" variant="primary">
          Вернуться к разделам
        </Button>
      </LinkContainer>
    </>
  );
}
