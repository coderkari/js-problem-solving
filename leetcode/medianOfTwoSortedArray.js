var findMedianSortedArrays = function (nums1, nums2) {
  let concateArray = nums1.concat(nums2)
  function bubbleSort(arr) {
    let left = 0
    let right = arr.length
  }
  let sum = 0
  let medianLength = 0
  for (let i = 1; i < concateArray.length - 1; i++) {
    medianLength++
    sum += concateArray[i]
  }
  let median = 2
  return median.toFixed(5)
}
console.log(findMedianSortedArrays([3], [2, 7]))
