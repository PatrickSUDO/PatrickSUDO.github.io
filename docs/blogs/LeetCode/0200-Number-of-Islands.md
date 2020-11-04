---
title: 200. Number of Islands
description: leetcode 200. Number of Islands
date: 2020-09-12
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
[LeetCode 0200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

---
**Problem:** <br/>

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [</br>
["1","1","1","1","0"],</br>
["1","1","0","1","0"],</br>
["1","1","0","0","0"],</br>
["0","0","0","0","0"]</br>
]</br>
Output: 1
</br>
Example 2:

Input: grid = [</br>
  ["1","1","0","0","0"],</br>
  ["1","1","0","0","0"],</br>
  ["0","0","1","0","0"],</br>
  ["0","0","0","1","1"]</br>
]</br>
Output: 3

---
**Solution:** <br/>
Typical DFS questions! The only thing to be careful is that "1" and "0" are string not int.
First find the starting point of the land, then enter the dfs recursion, and then turn the land entered into water first, marking the position has been found, check the upper, lower, left, and right blocks are land, if so, enter the next level recursively.

Time complexity: $O(mn)$ </br>
Space complexity: $O(mn)$


```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m = len(grid)
        if m <= 0: return 0
        n = len(grid[0])
        ans = 0
        def dfs(grid, row, col):
            grid[row][col] = "0"
            if row - 1 >= 0 and grid[row-1][col] == "1":
                dfs(grid, row-1, col)
            if row + 1 < m and grid[row+1][col] == "1":
                dfs(grid, row+1, col)
            if col - 1 >= 0 and grid[row][col-1] == "1":
                dfs(grid, row, col-1)
            if col + 1 < n and grid[row][col+1] == "1":
                dfs(grid, row, col+1)        
                
        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1":
                    ans += 1
                    dfs(grid, i, j)
        return ans
```
<Disqus shortname="patricksudo" />
