class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        for(let str of strs){
            let key = str.split('').sort().join('')
            if(key in obj){
                obj[key].push(str)
            }else{
                obj[key] = [str]
            }
        }
        return Object.values(obj)
    }
}

