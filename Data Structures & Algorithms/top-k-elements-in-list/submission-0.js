class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}, ans = [];

    for (let i = 0; i < nums.length; i++) {
        nums[i] in obj ? obj[nums[i]]++ : obj[nums[i]] = 1
    }

    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1])

    for (let i = 0; i < k; i++) ans.push(arr[i][0])

    return ans
    }
}
