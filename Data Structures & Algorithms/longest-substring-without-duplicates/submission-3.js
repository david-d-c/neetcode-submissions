class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
     * let obj = new Set(s[0]), p1 = 0, p2 = 1, max = 1
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
     * 
     * 
     */
    lengthOfLongestSubstring(s) {
        let dups = {}, left = 0, max = 0
        for(let right = 0; right < s.length; right++){
            
            while(s[right] in dups){
                console.log('dup')
                delete dups[s[left]]
                left++
            }

            if((right - left + 1) > max) max = right - left + 1
            
            dups[s[right]] = (dups[s[right]] || 0) + 1
            console.log(dups)
        }

        return max
        
    }
}
