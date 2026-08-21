class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /*
            given an array return true if theres dupes, false otherwise

            loop through nums, add to obj, if in obj return T, after loop return false

        */
        let numsObj = {}

        for(let i = 0; i <= nums.length; i++){
            if(numsObj[nums[i]]) return true
            numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1 
        }
        return false
    }


}
