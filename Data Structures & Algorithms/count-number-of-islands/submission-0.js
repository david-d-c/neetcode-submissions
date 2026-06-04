class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    numIslands(grid) {
    let ROWS = grid.length, COLS = grid[0].length
    let counter = 0
    let dir = [[1,0], [-1,0], [0,1], [0,-1]]
    
    function check(r,c) {
        let stack = [[r,c]]
        
        while(stack.length > 0){
            let [row, col] = stack.pop()
            grid[row][col] = '0'
            for(let [offR, offC] of dir){
                let newR = row + offR
                let newC = col + offC
                
                if(newR >= 0 && newR < ROWS && 
                    newC >= 0 && newC < COLS && 
                    grid[newR][newC] == '1') {
                        
                    stack.push([newR, newC])
                    
                } 
                
            }
        }
    }
    
    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            let el = grid[r][c]
            if(el == '1'){
                counter++
                //check adj elements for land and convert all lands to water 
                check(r,c)
            }
        }
    }
    return counter
}
}
