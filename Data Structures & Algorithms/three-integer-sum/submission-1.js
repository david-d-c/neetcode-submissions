class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
let sortedNums = [...nums].sort((a,b) => a - b), ans = []
    console.log(sortedNums)
    for(let i = 0; i < nums.length; i++){
        let curr = sortedNums[i], j = i + 1, k = nums.length - 1
        if(curr > 0) return ans
        else if(curr == sortedNums[i - 1]) continue;
        
        while(j < k){
            //console.log(sortedNums[i], sortedNums[j], sortedNums[k])
            if(sortedNums[j] == sortedNums[j - 1] && j != i + 1){
                j++
                continue
            }else if(sortedNums[k] == sortedNums[k + 1]){
                k--
                continue
            }

            if(curr + sortedNums[j] + sortedNums[k] > 0){
                k--
            }else if(curr + sortedNums[j] + sortedNums[k] < 0){
                j++
            }else{
                ans.push([curr, sortedNums[j], sortedNums[k]])
                k--
                j++
                continue
            }
        }
    }
    return ans
        
    }
}
