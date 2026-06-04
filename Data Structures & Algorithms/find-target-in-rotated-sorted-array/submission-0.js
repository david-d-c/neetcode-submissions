class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1 
        while(l < r){
            let mid = Math.floor((l + r) / 2)
            if(nums[mid] > nums[r]){
                l = mid + 1
            }else{
                r = mid
            }
        }
        let minIdx = l

        if(minIdx === 0){
            l = 0
            r = nums.length - 1
        }else if(target >= nums[0] && target <= nums[minIdx - 1]){
            l = 0
            r = minIdx - 1
        }else{
            l = minIdx
            r = nums.length - 1
        }

        while(l <= r){
            let mid = Math.floor((l + r) / 2)
            if(nums[mid] > target){
                r = mid - 1
            }else if(nums[mid] < target){
                l = mid + 1
            }else return mid
        }
        return -1

    }
}
