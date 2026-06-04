class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * 
     * ans with comments
    let l = 0, r = nums.length - 1
    //find k(where its rotated/min val)
    while(l < r){
        let mid = Math.floor((l + r) / 2)
        //if el at mid > el at r k is in right half
        if(nums[mid] > nums[r]) l = mid + 1
        else r = mid //k is in left half including mid
    }
    let minIdx = r // save k in var
    
    if(minIdx === 0){ //if k is at the start do reg bi search
        l = 0
        r = nums.length-1
    }
    //target is in right half of k so bi search that half only
    else if(target >= nums[minIdx] && target <= nums.at(-1)){ 
        l = minIdx
        r = nums.length - 1
    }
    //target is in left half of k so bi search that half only
    else{ //target >= nums[0] && target <= nums[minIdx - 1]
        l = 0
        r = minIdx - 1 //START AT GREATEST WHICH IS 1 LESS THAN MIN IDX
    }
    //reg bi search with respective start and end
    while(l <= r){
        let mid = Math.floor((l + r) / 2)
        
        if(nums[mid] > target){
            r = mid - 1
        }else if(nums[mid] < target){
            l = mid + 1
        }else{
            return mid
        }
    }
    
    return -1
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
