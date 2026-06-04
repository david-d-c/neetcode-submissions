class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let combined = s.replaceAll(/[^a-z0-9]/ig, '').toLowerCase()
        let i = 0, j = combined.length - 1 
        // s = s.toLowerCase()
        while(i <= j){
            if(combined[i] != combined[j]) return false
            i++
            j--
        }
        console.log(combined)
        // while(i <= j){
            
        //     if(/[^a-z]/ig.test(s[i])){
        //         i++
        //     }
        //     if(/[^a-z]/ig.test(s[j])){
        //         j--
        //     }
        //     console.log(s[i],s[j])
        //     if(s[i] != s[j]) return false 
        //     i++
        //     j--
        // }
        return true
    }
}
