/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root === null) return 0

        let max = 0

        const dfs = (node, count = 0) => {
            if(node === null) return 

            count++
            dfs(node.left, count)
            dfs(node.right, count)

            if(count > max) {
                max = count
                count = 1
            }

        }
        dfs(root)
        return max
    }
}
