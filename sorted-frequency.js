// Constraints:

// Time Complexity: O(log N)

function findFirst(arr, num, left = 0, right = arr.length - 1) {
    if (right >= left) {

      let middle = Math.floor((left+ right) / 2)

      if ((middle === 0 || num > arr[middle - 1]) && arr[middle] === num) {
        return middle;
      } else if (num > arr[middle]) {
        return findFirst(arr, num, middle + 1, right)
      } else {
        return findFirst(arr, num, left, middle - 1)
      }
    }

    return -1
  }
  
  function findLast(arr, num, left = 0, right = arr.length - 1) {
    if (right >= left) {

      let middle = Math.floor((left + right) / 2)

      if ((middle === arr.length - 1 || num < arr[middle + 1]) && arr[middle] === num) {
        return middle;
      } else if (num < arr[middle]) {
        return findLast(arr, num, left, middle- 1)
      } else {
        return findLast(arr, num, middle + 1, right)
      }
    }

    return -1
  }

  function sortedFrequency(arr, num) {
    let first = findFirst(arr, num);

    if (first == -1) {
        return first;
    }

    let last = findLast(arr, num);

    return last - first + 1;
  }

module.exports = sortedFrequency