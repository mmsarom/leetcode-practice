/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const dfs = (node: TreeNode | null, sum: number, targetSum: number, final: number[]): void => {
    sum += node?.val;
    console.log(`visited ${node?.val} and now has sum ${sum}`);

    if (!node?.left && !node?.right) {
        console.log(`sum at a leaf ${sum}`);
        final.push(sum);
        return;
    } else {
        dfs(node.left, sum, targetSum, final);
        dfs(node.right, sum, targetSum, final);
    };
}

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
    const final: number[] = [];
    dfs(root, 0, targetSum, final);

    let result = false;
    final.forEach((value) => {
        if (value === targetSum) result = true;
    })
    return result;
};