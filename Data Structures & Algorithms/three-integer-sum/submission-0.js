class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // let i = 0, ans = [] 
        // console.log(nums)
        // while(i < nums.length - 2){
        //     let j = i + 1
        //     while(j < nums.length - 1){
        //         let k = j + 1
        //         while(k < nums.length){
        //             if(nums[i] + nums[j] + nums[k] == 0){
        //                 ans.push(nums[i], nums[j], nums[k])
        //             }
        //             k++
        //         }
        //         j++
        //     }
        //     i++
        // }
        // return ans
         const checkForDups = (triple, allTriples) => {
        let dup = false, trips = Object.keys(triple), i = 0, j = 1, k = 2, is3Zeros = false
        //console.log('trips', trips, 'alltriples', allTriples)

        if(trips.length == 2){
            triple[trips[i]] == 2 ? k = 0 : k = 1
        }
        else if(trips.length == 1){
            is3Zeros = true
        }


        for (let obj of allTriples) {
            if((Object.keys(obj).length == 1 && is3Zeros) || (trips[i] in obj && trips[j] in obj && trips[k] in obj)) {
                dup = true
                break
            }
        }
        return dup
    }

    let i = 0, ans = [], map = {}, n = 0
    //console.log(nums)
    while (i < nums.length - 2) {
        let j = i + 1
        while (j < nums.length - 1) {
            let k = j + 1
            while (k < nums.length) {
                //console.log(nums[i], nums[j], nums[k])
                //check for valid triple, if it isnt skip this iteration
                if (nums[i] + nums[j] + nums[k] != 0) {
                    k++
                    continue
                }
                //console.log('valid')
                //creating our all triples array to check for dups, triple arr and obj 
                let allTriples = Object.values(map),
                    tripleObj = {},
                    tripleArr = [nums[i], nums[j], nums[k]]
                //inserting into tripleObj
                for(let x = 0; x < 3; x++){
                    tripleArr[x] in tripleObj ? tripleObj[tripleArr[x]]++ : tripleObj[tripleArr[x]] = 1
                }

                //console.log(allTriples, tripleObj)
                //checking for dups fuctions, returns true or false
                let dup = checkForDups(tripleObj, allTriples)
                //console.log(dup)
                
                //edge cases: first triple or three zeros and not a dup
                if (allTriples.length == 0 || (nums[i] == 0 && nums[j] == 0 && nums[k] == 0 && !dup)) {
                    //console.log('empty')
                    map[n] = tripleObj
                    ans.push(tripleArr)
                    //console.log(map)
                    k++
                    n++
                    continue
                }
                //insert into ans and map
                if (!dup) {
                    map[n] = tripleObj
                    ans.push(tripleArr)
                    n++
                }
                k++
            }
            j++
        }
        i++
    }
    return ans
    }
}
