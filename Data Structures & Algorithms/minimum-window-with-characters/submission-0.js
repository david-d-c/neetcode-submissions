class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     * 
     * a:init min, start window at 0, move r until we reached 
     * t chars required to make a substring,
     * move l until < t chars in substring
     * set min = min(len of window, min) 
     * return min
     * 
     */
    minWindow(s, t) {
        if(t === '') return ''

        let mapT = {}, windowMap = {}
        for(let i = 0; i < t.length; i++){
            mapT[t[i]] = (mapT[t[i]] || 0) + 1
        }
        
        let left = 0
        let have = 0, need = Object.keys(mapT).length 
        let ansIdx = [-1,-1], minLen = Infinity

        for(let right = 0; right < s.length; right++){
            windowMap[s[right]] = (windowMap[s[right]] || 0) + 1

            if(s[right] in windowMap && 
                windowMap[s[right]] === mapT[s[right]]){
                
                have++
            }
            while(have === need){
                console.log(ansIdx)
                if(right - left + 1 < minLen){
                    ansIdx[0] = left
                    ansIdx[1] = right
                    minLen = right - left + 1
                    
                }
                windowMap[s[left]]--
                if(s[left] in mapT && 
                    windowMap[s[left]] < mapT[s[left]]){
                        have--
                }
                left++
            }
        }
        let [start, end] = ansIdx
        
        if(minLen < Infinity) return s.slice(start, end + 1)
        else return ''
    }
}
