class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    /*
    p: we need to find the longest substring of only 1 char 
    after replacing k chars we want to 
    replace repeating chars and if they are inbetween the same char

    a: init obj for freq, left pointer, and max. 
        for each char add them into freq,
        check if currs freq > k, and if window size is > max
        return max

    ex:LYXYXYXLLLX map(x: [0,2,4,6],y: [1,3,5],l: [7,8,9])


    */
    characterReplacement(s, k) {
        let freq = {}, max = 0, left = 0, maxf = 0, ans = 0
        for(let right = 0; right < s.length; right++){
            freq[s[right]] = (freq[s[right]] || 0) + 1
            console.log(right - left + 1)

            maxf = Math.max(maxf, freq[s[right]])

            if((right - left + 1) - maxf > k){
                freq[s[left]]--
                left++
            }

            ans = Math.max(ans,(right - left + 1))
            //if len of window - most freq < k
            //
        }
        return ans        
    }
}
