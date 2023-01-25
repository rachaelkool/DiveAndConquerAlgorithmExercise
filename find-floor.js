// Constraints:

// Time Complexity: O(log(n))

function findFloor(arr, num, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    if (num >= arr[right]) {
        return arr[right];
    }
  
    let middle = Math.floor((left + right) / 2)
  
    if (arr[middle] === num) {
        return arr[middle];
    }
  
    if (middle > 0 && arr[middle - 1] <= num && num < arr[middle]) {
      return arr[middle - 1];
    }
  
    if (num < arr[middle]) {
      return findFloor(arr, num, left, middle - 1);
    }
  
    return findFloor(arr, num, middle + 1, right)
  }

module.exports = findFloor