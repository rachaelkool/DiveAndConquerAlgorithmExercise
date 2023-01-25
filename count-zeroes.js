// Constraints:

// Time Complexity: O(log(n))

function findFirst(arr, left = 0, right = arr.length-1) {

  if (right >= left) {
    let middle = left + Math.floor((right - left) / 2)

    if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
      return middle;
    } else if (arr[middle] === 1) {
      return findFirst(arr, middle + 1, right);
    } else {
      return findFirst(arr, left, middle - 1);
    }
  }
  
  return -1;
}

function countZeroes(arr) {
  let firstZero = findFirst(arr)

  if (firstZero === -1) {
    return 0;
  }

  return arr.length - firstZero
}

module.exports = countZeroes