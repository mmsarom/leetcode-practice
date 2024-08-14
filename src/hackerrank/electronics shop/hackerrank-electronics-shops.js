/*
 * Complete the getMoneySpent function below.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getMoneySpent(keyboards, drives, b) {
  const arr = [];
  let maxCombo = 0;
  keyboards.forEach((board) => {
    if (arr.includes(board)) return;
    arr.push(board);
    drives.forEach((drive) => {
      if (board + drive > b) return;
      if (board + drive > maxCombo) {
        maxCombo = board + drive;
      }
    });
  });
  return maxCombo === 0 ? -1 : maxCombo;
}
