export function scoreFormatted(rightAnswer, quizLength) {
  return (100 * rightAnswer) / quizLength;
}

export function findCorrectAnswerAmount(report) {
  return report.reduce((acc, curr) => {
    console.log(acc, curr.correctAnswer, curr.userAnswer);
    if (curr.correctAnswer === curr.userAnswer) return acc + 1;
    else return acc;
  }, 0);
}
