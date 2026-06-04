class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     * 
     * a:init ans as first el, use stack an insert num until an operand. 
     * pop from stack and do the operand to the answer
     * return ans
     */
    evalRPN(tokens) {
        let stack = []

        for(let i = 0; i < tokens.length; i++){
            let cur = tokens[i]
            
                    if(cur === '+'){
                        let a = stack.pop(), b = stack.pop()
                        stack.push(a + b)
                    }else if(cur === '-'){
                        let a = stack.pop(), b = stack.pop()
                        stack.push(b - a)
                    }else if(cur === '*'){
                        let a = stack.pop(), b = stack.pop()
                        stack.push(a * b)
                    }else if(cur === '/'){
                        let a = stack.pop(), b = stack.pop()
                        stack.push(Math.trunc(b / a))
                    }else stack.push(+cur)
        }
        console.log(stack)
        return stack.pop()
    }
}
