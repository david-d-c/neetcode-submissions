class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let i = 0, objH = {}, objV = {}
        const centers = new Set([1, 4, 7])
        
        const check3x3 = (x, y, board) => {
            //center = board[x][y] == board[i][j] ex: board[1][1]
            let obj = {}
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    
                    let tile
                    if(i == 2 && j == 2){
                        tile = board[x + 1][y + 1]
                    } 
                    else if(i == 2){
                        tile = board[x + 1][y - j] 
                    }
                    else if(j == 2){
                        tile = board[x - i][y + 1]
                    }else{
                        tile = board[x - i][y - j]
                    } 
                    if(tile in obj) return false
                    else if (tile != '.') obj[tile] = 1
                }
            }
            return true
        }

        while(i < board.length){
            for(let j = 0; j < board[i].length; j++){
                if(centers.has(i) && centers.has(j) && !check3x3(i,j,board)){
                    return false
                }
                if(board[i][j] in objH || board[j][i] in objV) {
                    return false
                }
                if(board[i][j] !== '.') objH[board[i][j]] = 1
                if(board[j][i] !== '.') objV[board[j][i]] = 1
            }
            objH = {}
            objV = {}
            i++
        }
        return true
    }
}
