function strictEquals(a, b) {
  // We have to be strict, after all
  if (!Object.is( typeof(a), typeof(b) )) {
    return false;
  };

  // Special case #1: NaN
  if (Number.isNaN(a)) {
    return false;
  }

  // Special case #2: 0 and -0
  if (!!Math.pow(a, b)) {
    return true;
  }

  // Fallback to Object.is for everything else
  return Object.is(a,b);
}

export default strictEquals;
