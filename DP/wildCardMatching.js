function compare(s, p, i, j, memo) {
  if (i < 0 && j < 0) return true; 
  if (j < 0) return false;        

  if (i < 0) {
    for (let k = 0; k <= j; k++) {
      if (p[k] !== '*') return false;
    }
    return true;
  }

  if (memo[i][j] !== null) return memo[i][j];

  if (p[j] === s[i] || p[j] === '?') {
    memo[i][j] = compare(s, p, i - 1, j - 1, memo);
  } else if (p[j] === '*') {
    memo[i][j] =
      compare(s, p, i - 1, j, memo) || compare(s, p, i, j - 1, memo);
  } else {
    memo[i][j] = false;
  }

  return memo[i][j];
}

var isMatch = function (s, p) {
  const memo = Array.from({ length: s.length }, () =>
    new Array(p.length).fill(null)
  );
  return compare(s, p, s.length - 1, p.length - 1, memo);
};
