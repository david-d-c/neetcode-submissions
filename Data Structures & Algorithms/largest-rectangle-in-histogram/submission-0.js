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
     * for each height interate through the folowing finding the areas
     * the height = min(subarr[i:j+1]), width = j - i + 1
     * max = max(max, w*h)
     * return max
     * 
     * stack:
     * 
     */
    largestRectangleArea(heights) {
        let max = 0
        for(let i = 0; i < heights.length; i++){
            for(let j = i; j < heights.length; j++){
                let w = j - i + 1
                let h = Math.min(...heights.slice(i, j + 1))
                max = Math.max(max, w * h)
            }
        } 
        return max
    }
}
