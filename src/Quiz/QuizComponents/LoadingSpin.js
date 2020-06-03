import React from "react";
import { Spinner } from "reactstrap";
export default function LoadingSpin() {
  return (
    <>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
    </>
  );
}
