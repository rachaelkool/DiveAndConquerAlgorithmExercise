// Constraints:

// Time Complexity: O(log(n))

function findRotationCount(arr, left = 0, right = arr.length - 1) {
    if (right < left) return 0;
    if (right === left) return left;
    let middle = Math.floor((left + right) / 2)
  
    if (middle < right && arr[middle + 1] < arr[middle])
      return middle + 1;
  
    if (middle > left && arr[middle] < arr[middle - 1]) {
      return middle;
    }
  
    if (arr[right] > arr[middle]) {
      return findRotationCount(arr, left, middle - 1);
    }
  
    return findRotationCount(arr, middle + 1, right);
  }

module.exports = findRotationCount