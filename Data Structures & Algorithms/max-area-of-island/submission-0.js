class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let ROWS = grid.length, COLS = grid[0].length
        let WATER = '0', LAND = '1'
        let max = 0
        let dir = [[1,0], [-1,0], [0,1], [0,-1]]

        function dfs(r,c){
            let stack = [[r,c]], size = 1
            grid[r][c] = WATER
            console.log(stack.length)
            while(stack.length > 0){
                let [pr,pc] = stack.pop()
                for(let [rOff, cOff] of dir){
                    let nr = pr + rOff
                    let nc = pc + cOff
                    if(!grid[nr] || !grid[nr][nc] || grid[nr][nc] === WATER){
                        continue
                    }
                    grid[nr][nc] = WATER
                    stack.push([nr,nc])
                    size += 1
                }
            }
            return size
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] == LAND){
                    max = Math.max(max, dfs(r,c))
                }
            }
        }
        return max
    }
}
