/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
  let newArr = [];

  const one = arr1.filter((x) => !arr2.includes(x));
  const two = arr2.filter((x) => !arr1.includes(x));

  return (newArr = one.concat(two));
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
