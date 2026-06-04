class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let ans = [], left = 0
        for(let right = k; right <= nums.length; right++){
            let max = Math.max(...nums.slice(left, right))
            ans.push(max)
            left++
        }
        return ans
    }
}
