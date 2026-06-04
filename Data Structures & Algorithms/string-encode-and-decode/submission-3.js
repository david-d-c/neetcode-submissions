class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = ''
        for(let word of strs){
            newStr = newStr + word.length + '-' + word
        }
        return newStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [], i = 0
        while(i < str.length){
            let j = i
            while(str[j] != '-'){
                j++
            }
            let len = Number(str.slice(i,j))
            arr.push(str.slice(j+1, j+1+len))
            i = j + 1 +len
        }
        return arr
    }
}
