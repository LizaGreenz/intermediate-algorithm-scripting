// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    while (Array.isArray(arr[i])) {
      arr = [].concat(...arr);
    }
  }

  return arr;
}

steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
