class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = [], stack = []

        position.forEach((num, i) => {
            pairs.push([num, speed[i]])
        })

        pairs.sort((a,b) => a[0] - b[0])
        
        for(let i = pairs.length - 1; i >= 0; i--){
            let [pos,v] = pairs[i]
            let curTime = (target - pos) / v

            stack.push(curTime)
            
            if(stack.length >= 2 && 
            stack.at(-1) <= stack.at(-2)){
                stack.pop()
            }
        }
        return stack.length
    }
}
