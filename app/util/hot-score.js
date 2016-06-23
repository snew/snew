Math.log10 = Math.log10 || function(x) {
  return Math.log(x) / Math.LN10;
};

export default function(thing) {
  const score = thing.score;
  const seconds = thing.created_utc - 1134028003;
  const order = Math.log10(Math.max(Math.abs(score), 1));
  let sign = 0;
  if (score > 0) {
    sign = 1;
  } else if (score < 0) {
    sign = -1;
  }
  return (sign * order + seconds / 45000).toFixed(7);
}
