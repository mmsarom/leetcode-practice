/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// @ts-ignore - per code, we can assume there's always a valid 
export function twoSum(nums: number[], target: number): number[] {
    let secondIndex: number
    for (let firstIndex: number = 0; firstIndex < nums.length; firstIndex++) {
        secondIndex = nums.slice(firstIndex + 1).indexOf(target-nums[firstIndex]) + firstIndex + 1;
        if (secondIndex !== -1 && firstIndex !== secondIndex) {
            return [firstIndex,secondIndex];
        }
    }
};
