import { pickingNumbers } from './picking-numbers';

describe('pickingNumbers', () => {
  it.skip('should return the max subarray lengths - case 1', async () => {
    expect(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])).toEqual(5);
  });
  it('should return the max subarray lengths - case 2', async () => {
    expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toEqual(3);
  });
  it.skip('should return the max subarray lengths - case 3', async () => {
    expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toEqual(5);
  });
});
