class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     * 
     * brute force way:
     * init ans = arr
     * for each temp looking at following, folowinf temp > curr,
     * push idx temp - cur else push 0
     * return ans
     * O(n^2)
     * 
     * stack:
     * when to push(as dec), pop (as inc)or 
     * until when(cur temp > top temp)?
     * does sorting help? does order matter?
     * when do we want check the top of the stack?
     * 
     * keep track idx of max temps
     * 
     * 
     * ex:
     * correct output: [1,4,1,2,1,0,0]
     *              X
     * output: [1,4,1,2,1,0,0]
     *          0  1  2  3  4  5  6
     * input : [30,38,30,36,35,40,28] 0
     *                             i
     * push when we've reach a greater num
     * cur = 36, i: 3
     * stack: [[38,1],[]]
     * poped: [30,2]
     * 
     * if arr[j] > arr[i]: ans push(len - i - 1)
     * 
     * ans: [0,0,]
     */
    dailyTemperatures(temperatures) {
        let output = new Array(temperatures.length).fill(0)
        let stack = [] //[temp,idx]

        for(let i = 0; i < temperatures.length; i++){
            let temp = temperatures[i]
            while(stack.length > 0 && 
                temp > stack[stack.length - 1][0]){
                    let [prevTemp, prevIdx] = stack.pop()
                    output[prevIdx] = i - prevIdx
                }
            stack.push([temp,i])
        }


        return output
    }
}
