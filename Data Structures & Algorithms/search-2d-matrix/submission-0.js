class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * 
     * a: 
     * brute force: 
     * double loop, if cur = target return true, 
     * return false if we never reach the target
     * 
     * binary search:
     * if we flatten the matrix, set l,r at start and end, 
     * while l <= r
     * find midpoint, -> since its a matrix 
     *      mid = l + (r - l / 2)
     *      i = mid / cols, 
     *      j = mid % cols 
     * compare if mid > target check left half, 
     * if mid < target check right half
     * else target is found return true
     * return false 
     * 
     * init m = rows, n = cols
     *        
     */
    searchMatrix(matrix, target) {
        /*

            [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ]
            total rows = 3, total cols = 3
            if matrix was flatten set l,r
            l = 0, r = rows * cols - 1 = 8

            while l <= r
                mid = floor r - l / 2 = 4
                i = floor mid / cols = 1
                j = mid % cols = 1
                midVal = matrix[i][j]
                conditionals 

        */
        let rows = matrix.length, cols = matrix[0].length
        let l = 0, r = rows * cols - 1
        while(l <= r){
            let mid = l + Math.floor((r - l) / 2)
            let i = Math.floor(mid / cols)
            let j = mid % cols
            let midVal = matrix[i][j]
            if(midVal > target){
                r = mid - 1
            }else if(midVal < target){
                l = mid + 1
            }else return true
        }
        return false
    }
}
