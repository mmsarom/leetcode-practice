import { getMoneySpent } from './hackerrank-electronics-shops';

describe('twoSum', () => {
  it('should return a legitimate combo', async () => {
    const keyboards = [3, 1];
    const drives = [5, 2, 8];
    const budget = 10;
    expect(getMoneySpent(keyboards, drives, budget)).toEqual(9);
  });

  it('should handle a combo that is out of budget', async () => {
    const keyboards = [4];
    const drives = [5];
    const budget = 5;
    expect(getMoneySpent(keyboards, drives, budget)).toEqual(-1);
  });
});
