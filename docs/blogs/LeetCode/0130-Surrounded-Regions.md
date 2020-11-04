---
title: 130. Surrounded Regions
description: leetcode 130. Surrounded Regions
date: 2020-10-31
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DFS
  - BFS
categories:
  - LeetCode
---
[LeetCode 0130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

---
**Problem:** <br/>

Given a 2D board containing **'X'** and **'O'** (**the letter O**), capture all regions surrounded by 'X'.

A region is captured by flipping all **'O'** s into **'X'** s in that surrounded region.

#### Example 1:

    X X X X
    X O O X
    X X O X
    X O X X

After running your function, the board should be:

    X X X X
    X X X X
    X X X X
    X O X X


#### Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

---
**Solution:** <br/>
It's a typical question of DFS or BFS. Here I used DFS. All the 'O' will be flip to 'X' except the one on edge or beside another 'O'. So, we first find all the 'O' on the board's edge and add them to the queue. When the queue is not empty, we pop out the node one by one. If the node is inside the board and equal to 'O', we mark them as 'D', which will remain as 'O' in the future. Then, we add all the surrounding nodes in the queue. Finally, we iterate through the board to find the 'O's and flip them to 'X', while 'D' will be 'O'


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        queue = collections.deque([])
        #Find the 0 on four edge
        for r in range(len(board)):
            for c in range(len(board[0])):
                if (r in [0, len(board)-1] or c in [0, len(board[0])-1]) and board[r][c] == "O":
                    queue.append((r, c))
        while queue:
            r, c = queue.popleft()
            if 0<=r<len(board) and 0<=c<len(board[0]) and board[r][c] == "O":
                board[r][c] = "D"
                queue.append((r-1, c))
                queue.append((r+1, c))
                queue.append((r, c-1))
                queue.append((r, c+1))

        for r in range(len(board)):
            for c in range(len(board[0])):
                if board[r][c] == "O":
                    board[r][c] = "X"
                elif board[r][c] == "D":
                    board[r][c] = "O"
```

#### Java
```java
class Solution {
    class Coordinate{
        int y;
        int x;
        Coordinate(int i, int j){
            this.y = i;
            this.x = j;
        }
    }
    public void solve(char[][] board) {
        if (board == null || board.length == 0) return;
        Queue<Coordinate> q = new LinkedList<>();
        int m = board.length;
        int n = board[0].length;
        for (int i = 0 ; i < m; i ++) {
            for (int j = 0; j < n; j ++) {
                if ((i == 0 || i == m-1 || j == 0 || j == n-1) && board[i][j] == 'O') {
                    q.offer(new Coordinate(i, j));
                }
            }
        }
        while(!q.isEmpty()){
            Coordinate node = q.poll();
            int i = node.y;
            int j = node.x;
            if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] == 'O'){
                board[i][j] = 'D';
                q.offer(new Coordinate(i-1,j));
                q.offer(new Coordinate(i+1,j));
                q.offer(new Coordinate(i,j-1));
                q.offer(new Coordinate(i,j+1));
            }

        }
        for (int i = 0; i < m; i ++){
            for (int j = 0; j < n ; j ++){
                if (board[i][j] == 'D'){
                    board[i][j] = 'O';
                } else if (board[i][j] == 'O'){
                    board[i][j] = 'X';
                }
            }
        }

    }
}
```
<Disqus shortname="patricksudo" />