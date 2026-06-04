class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let unqNums = new Set(nums), max = 1
    if(nums.length == 0) return 0
        // unqNums.forEach((num) => {
        //     if(unqNums.has(num + 1) || unqNums.has(num - 1)){
        //         max.push(num)
        //     }
        // })
        for(let i = 0; i < nums.length; i++){
            if(unqNums.has(nums[i] - 1)){
                continue;
            }
            

            let length = 1, start = nums[i]
            while(unqNums.has(start + 1)){
                length++
                start++
            }
            if (length > max) max = length
        }
        return max
    }
    
}
