// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let count = arr[0] - 1;
  while (count < arr[arr.length - 1]) {
    count++;
    sum += count;
  }
  return sum;
}

sumAll([1, 4]);

sumAll([5, 10]);
