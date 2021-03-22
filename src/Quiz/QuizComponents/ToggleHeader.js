import React from "react";
import { Jumbotron, Container } from "reactstrap";

export default function ToggleHeader() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="lead display-3">A quiz with options.</h1>
        <p className="lead">
          test your knowledge and take a quiz! <br />
          Created by{" "}
          <a href="https://github.com/anthonymjimenez">Anthony Jimenez</a>
        </p>
      </Container>
    </Jumbotron>
  );
}
