outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    if (i == 2) break outer;
  }
}
// we can give labels to loops, and this helps us decide which loop we want to break out of.

outer: for (let i = 0; i < 2; i++) {
  for (let j = 0; i < 3; j++) {
    if (j == 1) continue outer;
  }
}
