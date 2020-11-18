---
title: 37. Sudoku Solver
description: leetcode 37. Sudoku Solver
date: 2020-11-17
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - Backtracking
categories:
  - LeetCode
---
[LeetCode 0037. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)

---
### Problem: <br/>

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules:**

1. Each of the digits 1-9 must occur exactly once in each row.
2. Each of the digits 1-9 must occur exactly once in each column.
3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The **'.'** character indicates empty cells.

#### Example 1:
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px">

    Input: board = [["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]
    Output: [["5","3","4","6","7","8","9","1","2"],
    ["6","7","2","1","9","5","3","4","8"],
    ["1","9","8","3","4","2","5","6","7"],
    ["8","5","9","7","6","1","4","2","3"],
    ["4","2","6","8","5","3","7","9","1"],
    ["7","1","3","9","2","4","8","5","6"],
    ["9","6","1","5","3","7","2","8","4"],
    ["2","8","7","4","1","9","6","3","5"],
    ["3","4","5","2","8","6","1","7","9"]]
    Explanation: The input board is shown above and the only valid solution is shown below:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png" style="height:250px; width:250px">


#### Constraints:

- board.length == 9
- board[i].length == 9
- board[i][j] is a digit or '.'.
- It is guaranteed that the input board has only one solution.

---
### Solution: <br/>

We fill the board from the left-top to right-bottom. We need to record the existing number on the board with rows, columns, boxes. Then , we can start to use dfs and backtracking to fill all the cells. We define a helper function to do it. First, the termination condition need to be defined. When y is out of bound, the function should return true. Next, if the cell is already been filled, we return true. We check from number 1 to 9 has been in teh same row, column and box or not. If the recursion cannot proceed, then we back to the previous state, and recover the visited row, col and box. The number should be recovered to "." , too. 

We should notice that the number here is a char not an integer.

Time complexity: $O((9!)^9)$, The board size is fixed and each time we fill a number the searching space is narrowing down.</br>
Space complexity: $O(81 * 3)$ 
</br>
</br>

#### Java
```java
class Solution {
    boolean[][] rowVisted = new boolean[9][10];
    boolean[][] colVistied = new boolean[9][10];
    boolean[][] boxVisited = new boolean[9][10];

    public void solveSudoku(char[][] board) {
        // record all the existing number
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') continue;
                int n = c - '0';
                int bx = j / 3;
                int by = i / 3;
                int boxKey = 3 * by + bx;
                rowVisted[i][n] = true;
                colVistied[j][n] = true;
                boxVisited[boxKey][n] = true;
            }
        }
        fill(board, 0, 0);
    }

    private boolean fill(char[][] board, int x, int y) {
        if (y == 9) return true;
        int nx = (x + 1) % 9;
        int ny = (nx == 0) ? y + 1 : y; 

        if (board[y][x] != '.') return fill(board, nx, ny);
        //Try 1 -9
        for (int i = 1; i <= 9; i++) {
            int bx = x / 3;
            int by = y / 3;
            int boxKey = 3 * by + bx;
            if (rowVisted[y][i] || colVistied[x][i] || boxVisited[boxKey][i]) continue;
            rowVisted[y][i] = true; //n in i row gas been visited
            colVistied[x][i] = true; //n in i col gas been visited
            boxVisited[boxKey][i] = true;//n in i box gas been visited
            board[y][x] = (char) (i + '0');
            if (fill(board, nx, ny)) return true;
            //backtracking
            board[y][x] = '.';
            boxVisited[boxKey][i] = false;
            colVistied[x][i] = false;
            rowVisted[y][i] = false;
        }
        return false;
    }
}
```
#### Python
```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:    
        def fill(board, x, y):
            if y == 9: return True
            nx = (x + 1) % 9 #next x
            if nx == 0 :
                ny = y + 1   #next y if in the same row
            else: 
                ny = y       #next y go to next row
                
            if board[y][x] != '.': return fill(board, nx, ny)
            //Try 1 -9
            for i in range(1, 9+1):
                bx = x // 3
                by = y // 3
                box_key = by * 3 + bx
                if (not rows[y][i]) and (not cols[x][i]) and (not boxes[box_key][i]) :
                    rows[y][i] = 1
                    cols[x][i] = 1
                    boxes[box_key][i] = 1
                    board[y][x] = str(i)
                    if fill(board, nx, ny): return True
                    #backtrack 
                    board[y][x] = '.'
                    boxes[box_key][i] = 0
                    cols[x][i] = 0
                    rows[y][i] = 0
            return False
        
        rows = [[0 for i in range(10)] for j in range(9)]
        cols = [[0 for i in range(10)] for j in range(9)]
        boxes = [[0 for i in range(10)] for j in range(9)]
        
        #record all the existing number
        for i in range(9):
            for j in range(9):
                c = board[i][j]
                if c != '.' :
                    n = int(c)
                    bx = j // 3 
                    by = i // 3
                    rows[i][n] = 1 #n in i row gas been visited
                    cols[j][n] = 1 #n in i col gas been visited
                    boxes[by * 3 + bx][n] = 1 #n in i box gas been visited

        fill(board, 0, 0)
```
<Disqus shortname="patricksudo" />