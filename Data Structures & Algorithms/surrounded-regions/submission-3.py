class Solution:
    def solve(self, board: List[List[str]]) -> None:
        ROWS, COLS = len(board), len(board[0])
        dirs = [[1,0], [-1,0], [0,1], [0,-1]]
        def dfs(r,c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS or board[r][c] == 'X' or board[r][c] == 'S':
                return 

            board[r][c] = 'S'

            for rOff, cOff in dirs:
                dfs(r + rOff, c + cOff)

        for r in range(ROWS):
            for c in range(COLS):
                if (r == 0 or r == ROWS - 1 or c == 0 or c == COLS - 1) and board[r][c] == 'O':
                    dfs(r,c)
        print(board)
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] == 'O':
                    board[r][c] = 'X'
                elif board[r][c] == 'S':
                    board[r][c] = 'O'
                

        