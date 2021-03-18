import React, { useEffect, useState } from "react";

export default function GameOver({
  setRight,
  questionData: { questions=[], index},
  result
}) {
//questionData to generate report 


  useEffect(() => {
    if (result === true) { // change result to user Answer and then compare from here, will make generating report easier 
      setRight((right) => right + 1);
    } 

   
    console.log(questions[index])
  }, [index]);

  return <div></div>;
}
