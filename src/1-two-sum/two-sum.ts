/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* JS version to refaactor to TS
var twoSum = function(nums, target) {
    for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
        secondIndex = nums.indexOf(target-nums[firstIndex]);
        if (secondIndex !== -1 && firstIndex !== secondIndex) {
            return [firstIndex,secondIndex];
        }
    }
};
*/