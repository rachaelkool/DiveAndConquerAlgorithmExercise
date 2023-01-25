// Constraints:

// Time Complexity: O(log(n))

function binarySearch(arr, val, leftIdx, rightIdx) {
    if (arr.length === 0) {
        return -1;
    }
    if (val < arr[leftIdx] || val > arr[rightIdx]) {
        return -1;
    }
  
    while (leftIdx <= rightIdx) {
      let middle = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middle];

      if(middleVal < val) {
        leftIdx = middle + 1;
    } else if (middleVal > val) {
        rightIdx = middle - 1;
    } else {
        return middle;
    }
    }

    return -1;
  }


//   function binarySearch(arr, val) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     while(leftIdx <= rightIdx) {
//         let middleIdx = Math.floor((leftIdx + rightIdx)/2)
//         let middleVal = arr[middleIdx];
//         if(middleVal < val) {
//             leftIdx = middleIdx + 1;
//         } else if (middleVal > val) {
//             rightIdx = middleIdx - 1;
//         } else {
//             return middleIdx;
//         }
//     }
//     return -1;
// }
  
  function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

    let leftIdx = 0
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
      let middle = Math.floor((leftIdx + rightIdx) / 2);

      if (arr[middle] > arr[middle + 1]) {
        return middle + 1
      } else if (arr[leftIdx] <= arr[middle]) {
        leftIdx = middle + 1
      } else {
        rightIdx = middle - 1
      }
    }
  }

function findRotatedIndex(arr, val) {
    let pivot = findPivot(arr)
    
    if (pivot > 0 && val >= arr[0] && val <= arr[pivot - 1]) {
      return binarySearch(arr, val, 0, pivot - 1);
    } else {
      return binarySearch(arr, val, pivot, arr.length - 1);
    }
}

module.exports = findRotatedIndex