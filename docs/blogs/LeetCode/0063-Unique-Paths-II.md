---
title: 0063. Unique Paths II
date: 2020-10-27
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Array
  - DP
categories:
  - LeetCode
---
[LeetCode 0063. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)

---
**Problem:** <br/>

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

<img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" style="width: 400px; height: 183px;">

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

**Note:** m and n will be at most 100.

#### Example 1:

    Input:
    [
    [0,0,0],
    [0,1,0],
    [0,0,0]
    ]
    Output: 2
    Explanation:
    There is one obstacle in the middle of the 3x3 grid above.
    There are two ways to reach the bottom-right corner:
    1. Right -> Right -> Down -> Down
    2. Down -> Down -> Right -> Right


---
**Solution:** <br/>

It is the variation of **Unique Path**. To deal with the obstacle, we need to set a different condition. When we step on the barrier, we skip the state transfer process, and the method count remains 0. On the other hand, we need to check if there is any obstacle in the current cell's left or upper. There is no possibility that it comes from the cell with an obstacle.


Time complexity: $O(mn)$ </br>
Space complexity: $O(mn)$
</br>
</br>

#### Python
```python
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if not obstacleGrid or obstacleGrid[0][0] == 1:
            return 0
        m, n = len(obstacleGrid), len(obstacleGrid[0])
        dp = [[0 for i in range(n)] for j in range(m)]
        dp[0][0]=1
        for i in range(m):
            for j in range(n):
                if obstacleGrid[i][j] != 1:
                    if i-1 >= 0:
                        dp[i][j] += dp[i-1][j]
                    if j-1>=0:
                        dp[i][j] += dp[i][j-1]
                        
        return dp[-1][-1]
```


#### Java
```java
class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        if (obstacleGrid.length < 1 || obstacleGrid[0][0] == 1){
            return 0;
        }
        
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;

        int[][] dp = new int[m][n];
        dp[0][0] = 1;

        for (int i = 0; i < m; i ++ ){
            for (int j = 0; j < n; j ++ ){
                if (obstacleGrid[i][j] == 1) continue;
                if ( i - 1 >= 0){
                    dp[i][j] += dp[i-1][j];
                }
                if ( j - 1 >= 0){
                    dp[i][j] += dp[i][j-1];
                }
            }
        }
        return dp[m-1][n-1];
    }
}
```
<Disqus shortname="patricksudo" />