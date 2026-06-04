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
     * 
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function dfs(node1,node2){
            console.log(node1,node2)
            console.log(node1 !== null && node2 === null)
            if(node1 === null && node2 === null)return true
            if(node1 !== null && node2 === null)return false
            if(node1 === null && node2 !== null)return false
            
            if(node1.val !== node2.val) return false

            if(
            !dfs(node1.left, node2.left) ||
            !dfs(node1.right, node2.right)
            ){
                return false
            }
            return true
        }
        return dfs(p,q)
    }
}
