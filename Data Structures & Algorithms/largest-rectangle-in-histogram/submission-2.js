class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * 
     * A: brute force:
     * for every possible start and end , 
     * find area, 
     * keep track of max
     * 
     * init max, 
     * 
     * for i loop - 
     *  for j loop 
     *      init w , h 
     *          w -> j - i, dif of idx
     *          h -> min h of subarr from i to j
     *      area = w * h
     *      set max if new max area is found
     * 
     * return max
     * 
     * 
     * 
     * 
     * 
     * for each height interate through the folowing finding the areas
     * 
     *  the height = min(subarr[i:j+1]), width = j - i + 1
     * 
     *  max = max(max, w*h)
     * 
     * return max
     * 
     * stack:
     *          0.1.2           .3.4.5
     * input = [1,2,1] + [0] -> output: 3
     *                    ^
     * stack= [] //[h,i]
     * cur = [0,3]
     * pop = [1,0]
     * w = cur i - top i - 1 || i -> 3
     * h = pop height -> 1
     * 
     * max = max(max,w*h) -> 0,2 = 2 -> 2,3 = 3
     */
    largestRectangleArea(heights) {
    
        let max = 0
     
        for(let i = 0; i < heights.length; i++){
            for(let j = i; j < heights.length; j++){
                let w = 0, h = 0
                w = j - i + 1
                h = Math.min(...heights.slice(i, j + 1))
                let area = w*h
                if(area > max) max = area
            }
        }
        return max

        // let max = 0, stack = []
        // heights.push(0)
        // for(let i = 0; i < heights.length; i++){
        //     let height = heights[i]
        //     while(stack.length > 0 && stack.at(-1)[0] > height){
        //         let [h,idx] = stack.pop()
        //         let w = 0
        //         if(stack.length === 0){
        //             w = i
        //         }else{
        //         //using the next top idx not the one we popped
        //             w = i - stack.at(-1)[1] - 1
        //         }
        //         max = Math.max(max,w*h)
        //     }
        //     stack.push([height, i])
        // }
        // return max
    }
}
