class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const combined = s.replaceAll(/[^a-z0-9]/ig, '').toLowerCase()
        let i = 0, j = combined.length - 1 
        
        while(i <= j){
            if(combined[i] != combined[j]) return false
            i++
            j--
        }
        
        return true
    }
}
