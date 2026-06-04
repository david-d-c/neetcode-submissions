class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     * 
     * 
     * a: window of size of s1, check window if the same chars are in s1 set, 
     *  move window by 1 for every check. 
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false

        let map1 = new Array(26).fill(0), map2 = new Array(26).fill(0)
        for(let i = 0; i < s1.length; i++){
            map1[s1.charCodeAt(i) - 97]++
            map2[s2.charCodeAt(i) - 97]++
        }
        console.log(map1)
        console.log(map2)
        

        let matches = 0
        for(let i = 0; i < 26; i++){
            if(map1[i] === map2[i]) matches++
        }

        //console.log(matches)

        let left = 0
        for(let right = s1.length; right < s2.length; right++){
            if(matches === 26) return true

            let idx = s2.charCodeAt(right) - 97
            map2[idx]++

            if(map1[idx] === map2[idx]){
                matches++
            }else if(map1[idx] + 1 === map2[idx]){
                matches--
            }

            idx = s2.charCodeAt(left) - 97
            map2[idx]--

            if(map1[idx] === map2[idx]){
                matches++
            }else if(map1[idx] - 1 === map2[idx]){
                matches--
            }
            left++
        }
        return matches === 26
    }
}
