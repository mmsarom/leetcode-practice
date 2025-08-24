/**
 Do not return anything, modify nums1 in-place instead.
 */
const merge = ((nums1: number[], m: number, nums2: number[], n: number): void => {
    let endPointer = nums1.length - 1;
    if (m > 0) m--;
    if (n > 0) n--;
    while (endPointer >= 0) {
        if (nums1[m] === undefined) {
            nums1[endPointer] = nums2[n];
            n--;
        } else if (nums2[n] === undefined) {
            nums1[endPointer] = nums1[m];
            m--;
        } else if (nums1[m] > nums2[n]) {
            nums1[endPointer] = nums1[m];
            m--;
        } else {
            nums1[endPointer] = nums2[n];
            n--;
        }
        
        endPointer--;
    }
});
