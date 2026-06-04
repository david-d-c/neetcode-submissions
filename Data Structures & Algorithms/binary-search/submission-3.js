class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1

        while(l <= r){
            //midpoint starting at l
            let mid = l + Math.floor((r - l) / 2)
            let cur = nums[mid]
            if(cur < target){
                l = mid + 1
            }else if(cur > target){
                r = mid - 1
            }else{
                return mid
            }
        }
        return -1
    }
}
