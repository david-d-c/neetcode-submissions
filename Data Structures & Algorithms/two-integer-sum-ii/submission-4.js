class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1, ans1 = 1, ans2 = numbers.length 
        while(i < j){
            let sum = numbers[i] + numbers[j]
            console.log(i , j, 'sum', sum)
            if(sum > target){
                console.log('>')
                numbers.splice(j, 1)
                ans2--
                j--
            }else if(sum < target){
                console.log('<')
                numbers.splice(i, 1)
                ans1++
                j--
            }else{
                console.log('=')
                numbers.splice(i + 1, numbers.length - 2)
                break
            }  
            console.log(numbers)
        }

        numbers.splice(0, 2, ans1, ans2)
        return numbers
    }
}