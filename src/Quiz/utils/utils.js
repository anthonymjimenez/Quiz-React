export function scoreFormatted(score) {
  if (score === 1) {
    return 100;
  } else if (score === 0) {
    return 0;
  } else {
    return score.toFixed(2) * 100;
  }
}
