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
     * @return {TreeNode}
     */
    invertTree(root) {
        console.log(root)
        if(root === null) return root

        //let inverse = new TreeNode(root.val)

        const dfs = node => {
            if(node == null) return 

            let temp = node.right

            node.right = node.left
            node.left = temp 

            dfs(node.left)
            dfs(node.right)
        }
        dfs(root)
        return root
        
    }
}
