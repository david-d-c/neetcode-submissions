class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let pointer1 = 0, pointer2 = numbers.length - 1
    while(true){
        let sum = numbers[pointer1] + numbers[pointer2]
        if(sum == target) return [pointer1 + 1, pointer2 + 1]
        target < sum ? pointer2-- : pointer1++
    }
    //     let i = 0, j = numbers.length - 1, ans1 = 1, ans2 = numbers.length 
    //     while(i < j){
    //         let sum = numbers[i] + numbers[j]
            
    //         if(sum > target){
    //             numbers.splice(j, 1)
    //             ans2--
    //             j--
    //         }else if(sum < target){
    //             numbers.splice(i, 1)
    //             ans1++
    //             j--
    //         }else{
    //             numbers.splice(i + 1, numbers.length - 2)
    //             break
    //         }  
    //     }

    //     numbers.splice(0, 2, ans1, ans2)
    //     return numbers
    }
}