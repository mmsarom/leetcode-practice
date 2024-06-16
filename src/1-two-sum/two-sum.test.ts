import { twoSum } from "./two-sum";

describe('twoSum', () => {
    it('should return a [0,1] given [2,7,11,15] & target 9', async () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
    });

    it('should return a [1,2] given [3,2,4] & target 6', async () => {
        expect(twoSum([3,2,4], 6)).toEqual([1,2]);
    });

    it('should return a [0,1] given [3,3] & target 6', async () => {
        expect(twoSum([3,3], 6)).toEqual([0,1]);
    });
});