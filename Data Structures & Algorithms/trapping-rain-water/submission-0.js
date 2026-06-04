class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let p1 = 0, p2 = height.length - 1
        let minL = height[p1], minR = height[p2]
        let ans = 0

        while(p1 <= p2){
            
            if(minL <= minR){
                let curr = height[p1]
                let math = minL - curr
                if(math > 0) ans += math
                if(curr > minL) minL = curr
                p1++
            }else{
                let curr = height[p2]
                let math = minR - curr
                if(math > 0) ans += math
                if(curr > minR) minR = curr
                p2--
            }
            
        }
        return ans
    }
}
