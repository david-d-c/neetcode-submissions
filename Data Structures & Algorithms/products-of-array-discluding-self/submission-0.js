class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = [1], right = [1], ans = []
        for(let i = 0; i < nums.length; i++){
            right.push(nums[i] * right[i])
            console.log(right)
        }
        let j = 0
        for(let i = nums.length - 1; i > 0; i--){
            left.push(nums[i] * left[j])
            j++
            console.log(left)
        }
        j = 0
        for(let i = left.length - 1; i >= 0; i--){
            ans.push(right[j] * left[i])
            j++
        }
        return ans
    }
}
