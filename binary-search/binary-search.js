'use strict';

// Complete this algo
// eslint-disable-next-line complexity
const binarySearch = (array, target) => {
  debugger;
  if (target === null || target === undefined || array === []) {
    return false;
  }
  let midpoint = Math.floor(array.length / 2);
  if (array[midpoint] === target) {
    return true;
  } else {
    let left = array.slice(0, midpoint);
    let right = array.slice(midpoint);
    if (left[left.length - 1] === target) {
      return true;
    }
    if (left[left.length - 1] > target) {
      if (left.length < 2) {
        return false;
      }
      return binarySearch(left, target);
    } else {
      if (right[0] === target) {
        return true;
      }
      if (right[0] < target) {
        if (right.length < 2) {
          return false;
        }
        return binarySearch(right, target);
      }
    }
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
