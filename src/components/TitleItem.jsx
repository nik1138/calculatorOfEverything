import React from "react";
import { Button } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function TitleBlock({ title, path }) {
  return (
    <>
      <LinkContainer to={path}>
        <Button className="mx-2 my-1" variant="primary">
          {title}
        </Button>
      </LinkContainer>
    </>
  );
}

export default TitleBlock;
