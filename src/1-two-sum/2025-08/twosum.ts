function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        let targetPair = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === targetPair) {
                return [i,j];
            }
        }
    }
};


// map version
function twoSum(nums: number[], target: number): number[] {
    const pairsMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let targetPair = target - nums[i];

        if (pairsMap.has(targetPair)) return [pairsMap.get(targetPair), i];
        pairsMap.set(nums[i], i);
    }
    throw new Error('Invalid input array');
};

