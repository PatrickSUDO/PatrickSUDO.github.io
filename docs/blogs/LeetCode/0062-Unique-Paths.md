---
title: 62. Unique Paths
description: leetcode 62. Unique Paths
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
[LeetCode 0062. Unique Paths](https://leetcode.com/problems/unique-paths/)

---
### Problem: 

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

<img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" style="width: 400px; height: 183px;">

#### Example 1:

    Input: m = 3, n = 7
    Output: 28

#### Example 2:

    Input: m = 3, n = 2
    Output: 3
    Explanation:
    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down

#### Example 3:

    Input: m = 7, n = 3
    Output: 28

#### Example 4:

    Input: m = 3, n = 3
    Output: 6

#### Constraints:

- 1 <= m, n <= 100
- It's guaranteed that the answer will be less than or equal to 2 * 10<sup>9</sup>.
---
### Solution:
We know that its left and upper cell determine the total method to get to a particular cell from the question. Therefore, we can get the number of ways to reach a specific cell by filling the table cell by cell. This method is called dynamic programming. However, there are some special conditions we need to consider.
1. On the starting point, there is only 1 way.
2. The top row is alway 1 because they are all determined by the cell on their left.
3. The leftmost row is alway 1 because they are all determined by the cell on their left.

We need a m x n array to store every states. Then, the state transfer formula will be : dp[i][j] = dp[i - 1][j] + dp[i][j - 1].


Time complexity: $O(mn)$ </br>

Space complexity: $O(mn)$
</br>
</br>


#### Python
```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[0 for i in range(n)] for j in range(m)]
        for i in range(m):
            dp[i][0]=1
        for j in range(n):
            dp[0][j]=1
        for i in range(1,m):
            for j in range(1,n):
                dp[i][j] = dp[i-1][j]+dp[i][j-1]
                
        return dp[-1][-1]
```

There is a tricky way to use factorial, which is the math in senior high school.
It can reduce the time complexity to O(1).

```python
from math import factorial
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        return int(factorial(m+n-2)/(factorial(n-1)*factorial(m-1)))
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


