class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let ans = 0, min = prices[0], max = 0
        // for(let i = 0; i < prices.length - 1; i++){
        //     let curr = prices[i]
        //     if(curr < min) min = curr
        //     for(let j = i + 1; j < prices.length - 1; j++){
        //         let next = prices[j]
        //         if(next > max && next > min) max = next
                
        //     }
        // }
        // if(max == 0) return 0
        // ans = max - min
        // return ans
        //
        let p1 = 0, p2 = 1, max = 0
        while(p2 < prices.length){
            let dif = prices[p2] - prices[p1]
            if(dif > max){
                max = dif
            }
            if(prices[p2] < prices[p1]){
                p1 = p2
                p2 = p1 + 1
                continue
            }
            p2++

        } 
        return max

    }
}
