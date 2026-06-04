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

    

    diameterOfBinaryTree(root) {
        let res = 0

        function dfs (node) {
            if(!node) {
                return 0
            }

            let l = dfs(node.left)
            let r = dfs(node.right)
            res = Math.max(res, l + r)
            return 1 + Math.max(l,r)
        }

        dfs(root)
        return res
    }
}
