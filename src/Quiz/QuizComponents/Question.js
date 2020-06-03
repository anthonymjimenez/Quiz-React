import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Question = ({ question }) => {
  // he is a oddly named library that decodes html into string values

  var decode = he.decode(String(question));

  return (
    <div>
      <hr className="my-2" />
      <h2 className="lead">{decode}</h2>
      <hr className="my-2" />
    </div>
  );
};
