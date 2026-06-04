class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0, p1 = 0, p2 = heights.length - 1
        while(p2 > p1){
            console.log(p1,p2)
            let prod = (p2 - p1) * Math.min(heights[p1], heights[p2])
            console.log(prod)
            max = Math.max(max, prod)
            heights[p1] < heights[p2] ? p1++ : p2--
        }
        return max
    }
}
