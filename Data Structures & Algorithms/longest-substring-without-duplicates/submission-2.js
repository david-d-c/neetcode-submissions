class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
     * 
     * 
     * 
     */
    lengthOfLongestSubstring(s) {
        let obj = new Set(s[0]), p1 = 0, p2 = 1, max = 1
        if(s.length == 0)return 0
        while(p2 < s.length){
            obj.add(s[p2])
            if(obj.size > max) max = obj.size
            if(obj.size < (p2 - p1 + 1)){
                p1++
                p2 = p1 + 1
                obj.clear()
                obj.add(s[p1])
                continue
            }          
            p2++
        }
        return max
        //console.log(obj)
    }
}
