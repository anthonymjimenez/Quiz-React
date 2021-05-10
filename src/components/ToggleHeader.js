import React from "react";

export default function ToggleHeader() {
  return (
    <div>
      <h1 className="lead display-3" id="home-screen-title">
        A quiz with options.
      </h1>
      <p className="lead">
        Test your knowledge and take a quiz! <br />
        Created by{" "}
        <a href="https://github.com/anthonymjimenez">Anthony Jimenez</a>
      </p>
    </div>
  );
}
