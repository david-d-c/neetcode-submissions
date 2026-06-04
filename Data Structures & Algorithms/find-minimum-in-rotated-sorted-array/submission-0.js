class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * a: binary search, init l,r
     * check if mid > nums[r], search right half, 
     * else mid is a possible min and search left including mid
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1
        while(l < r){
            let mid = Math.floor((l + r) / 2)
            let cur = nums[mid]
            if(cur > nums[r]){
                l = mid + 1
            }else{
                r = mid
            }
        }
        return nums[r]
    }
}
