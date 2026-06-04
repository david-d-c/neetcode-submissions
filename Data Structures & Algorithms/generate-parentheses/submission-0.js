class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let ans = []
        function dfs(open, closed, str){
            if(open === closed && open === n){
                ans.push(str)
                return 
            }
            if(open < n){
                dfs(open + 1, closed, str + '(')
            }
            if(closed < open){
                dfs(open, closed + 1, str + ')')
            }
        }
        dfs(0,0,'')

        return ans
    }
}
