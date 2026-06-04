class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for(let num of nums){
            if(num in map) return true
            map[num] = (map[num] || 0) + 1
        }
        return false
    }
}
