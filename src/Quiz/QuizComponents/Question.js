import React from "react";
import he from "he";
export const Question = ({ questionData: { questions, index } }) => {
  // he is a oddly named library that decodes html into string values

  var decode = he.decode(String(questions[index]?.question));

  return (
    <div>
      <hr className="my-2" />
      <h1 className="display-5 lead">
        {console.log(questions[index])}
        {decode}
      </h1>
      <hr className="my-2" />
      <br />
    </div>
  );
};
