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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        //if(p === null && q === null) return true

        function dfs(node, vals = []){
            if(node === null) {
                vals.push('n')
                return vals
            }

            
            vals.push(node.val)
            dfs(node.left, vals)
            dfs(node.right, vals)
            
            return vals
        }

        let tree1 = dfs(p).join('')
        let tree2 = dfs(q).join('')
        
        return tree1 === tree2
    }
}
