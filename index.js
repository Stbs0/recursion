function fibs(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

function fib(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fib(n - 1);
  return arr;
}

console.log(fib(8));
