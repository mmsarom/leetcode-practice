export const pickingNumbers = (numbers: number[]): number => {
  const traversedNumbers: number[] = [];
  let maxSubArrayLength = 0;

  numbers.forEach((num, index, arr) => {
    if (traversedNumbers.includes(num)) return;
    const subArrPos: number[] = [num];
    const subArrNeg: number[] = [num];
    for (let i = index + 1; i <= arr.length; i++) {
      if (num - arr[i] <= 1 && num >= arr[i]) subArrPos.push(arr[i]);
      if (arr[i] - num <= 1 && num <= arr[i]) subArrNeg.push(arr[i]);
    }
    traversedNumbers.push(num);
    const biggerSubArrLen =
      subArrPos.length > subArrNeg.length ? subArrPos.length : subArrNeg.length;
    maxSubArrayLength =
      biggerSubArrLen > maxSubArrayLength ? biggerSubArrLen : maxSubArrayLength;
  });
  return maxSubArrayLength;
};
