function fibs(n) {
  const arr = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    arr.push(a);
    let c = a + b;
    a = b;
    b = c;
  }

  return arr;
}

function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let arr = fibsRec(n - 1);
  let sum = arr.at(-1) + arr.at(-2);
  return [...arr, sum];
}

console.log("Iterative solution: ");
console.log(fibs(10));
console.log("Recursive solution: ");
console.log(fibsRec(10));
