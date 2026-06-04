class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [], valid = {"(" : ')', '{' : '}', '[' : ']'}

        for(let i = 0; i < s.length; i++){
            let char = s[i]

            if(char in valid){
                stack.push(char)
            }else{
                if(char === valid[stack.at(-1)]){
                    stack.pop()
                }else{
                    return false
                }
            }
        }
        
        return stack.length == 0
    }
}
