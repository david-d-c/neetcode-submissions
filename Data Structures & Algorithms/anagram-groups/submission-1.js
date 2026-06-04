class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * P: given an arr of string, group the word that have the same chars
     * 
     * obj = {
     *  act : [act, cat]
     *  pots : [pots, tops, stops]
     *  aht : [hat]
     * }
     * 
     * Input: strs = ["act","pots","tops","cat","stop","hat"]
     * tops sorted -> pots
     * cat sorted -> act
     * 
     * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]   
     * 
     * 
     * 
     * A: 
     * init obj -> key : sorted word, value : []
     * 
     * for each word 
     *  sort the word 
     *  check sorted word is in obj
     *      if it is   
     *          add word to the value arr
     *      else 
     *          create key(sorted word) value(list with the org word) pair 
     * 
     * return all the values 
     * 
     * 
     * Input: strs = ["act","cat","pots","tops","stop","hat"]
     */
    groupAnagrams(strs) {
        let obj = {
            //act : [act, cat]
        }
        for(let word of strs){ //word = cat

            //['c', 'a', 't'] -> [a, c, t] -> 'act'
            let key = word.split('').sort().join('') // act

            if(key in obj){
                obj[key].push(word)
            }else {
                obj[key] = [word]
            }

            // if(!key in obj){
            //     obj[key] = []
            // }

            // obj[key].push(word)
        
        }
        return Object.values(obj)
    }
}
