/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    
    let nums1counter = 0;
    let nums2counter = 0;
    let numsMaxLen = nums1.length + nums2.length;
    let nums1complete = false;
    let nums2complete = false;

    let nums3 = [];

    for (let i = 0; i < numsMaxLen; i++) {
        
        nums1complete = nums1[nums1counter] === undefined ? true : false;
        nums2complete = nums2[nums2counter] === undefined ? true : false;
        
        if (nums1complete) {
            nums3[i] = nums2[nums2counter];
            nums2counter++;
            continue;
        } else if (nums2complete) {
            nums3[i] = nums1[nums1counter];
            nums1counter++;
            continue;
        } else {
            let firstArrayGreater = nums1[nums1counter] > nums2[nums2counter] ? true : false;
            nums3[i] = firstArrayGreater ? nums2[nums2counter] : nums1[nums1counter];

            if (firstArrayGreater) {
                nums2counter++;
            } else {
                nums1counter++;
            }
        }
    }
     
    if (numsMaxLen % 2 == 0) {
        return (nums3[(numsMaxLen / 2)] + nums3[((numsMaxLen / 2) - 1)]) / 2;
    } else {
        return nums3[Math.floor(numsMaxLen / 2)];
    }
};

// fastest solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArr = [...nums1, ...nums2].sort(function(a,b) {return a-b})
    const lengthA = nums1.length
    const lengthB = nums2.length
    const lengthMerged = mergedArr.length
    const isOdd = lengthMerged % 2 !== 0
    if (lengthMerged % 2 !== 0) {
        return mergedArr[(lengthMerged / 2) - 0.5]
    }
    return (mergedArr[lengthMerged / 2] + mergedArr[(lengthMerged / 2) -1]) / 2
};