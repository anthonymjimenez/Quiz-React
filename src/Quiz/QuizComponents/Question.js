import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Question = ({ question }) => {
  // he is a oddly named library that decodes html into string values

  var decode = he.decode(String(question));

  return (
    <div>
      <hr className="my-2" />
      <h1 className="display-5" lead>
        {decode}
      </h1>
      <hr className="my-2" />
      <br />
    </div>
  );
};
