class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1

        while(l <= r){
            let mid = l + Math.floor((r - l) / 2)
            let cur = nums[mid]
            if(cur === target) return mid

            if(cur < target){
                l = mid + 1
            }else{
                r = mid - 1
            }
        }
        return -1
    }
}
