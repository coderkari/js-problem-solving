var findMedianSortedArrays = function (nums1, nums2) {
  let concateArray = nums1.concat(...nums2)
  let sortArray = concateArray.sort((a, b) => a - b)
  let length = sortArray.length
  let middle = length / 2
  let median = 0
  if (length % 2 !== 0) {
    median = sortArray[Math.floor(middle)]
  } else {
    median = (sortArray[middle - 1] + sortArray[middle]) / 2
  }
  console.log(median.toFixed(5))
  return median.toFixed(5)
}

findMedianSortedArrays([2], [])
