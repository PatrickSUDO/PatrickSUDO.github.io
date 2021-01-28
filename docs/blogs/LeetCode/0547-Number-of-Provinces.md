---
title: 547. Number of Provinces
description: leetcode 547. Number of Provinces
date: 2021-01-28
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DFS
  - Union Find
categories:
  - LeetCode
---
[LeetCode 0547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

---
### Problem: <br/>

There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j]` = 1 if the `i<sup>th</sup>` city and the `j<sup>th</sup>` city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return the total number of **provinces**.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg" style="width: 222px; height: 142px;">

        Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
        Output: 2

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg" style="width: 222px; height: 142px;">

    Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
    Output: 3

#### Constraints:

- 1 <= n <= 200
- n == isConnected.length
- n == isConnected[i].length
- isConnected[i][j] is 1 or 0.
- isConnected[i][i] == 1
- isConnected[i][j] == isConnected[j][i]

---

#### Solution: </br>

The input graph is **NOT** the coordinate, and it represents the connection between city instead. Otherwise, this question will become **200. Number of Islands**. All we do is finding the number of connected components. We start from a city with a connection to others.  All the city has a connection to itself, and every connection is bidirectional. We enter into the **DFS** recursion function. In this function, we iterate through all the possible cities. If the city has connection to the current one, then we flip both graph[i][j] and graph[j][i] from `1` to `0`. Then, go into the next recursion until all the `1` become `0`.


Time complexity: $O(N^2)$</br>
Space complexity: $O(N)$ 
</br>
</br>


#### Python

```python
class Solution:
    def findCircleNum(self, M: List[List[int]]) -> int:
        ans, n = 0, len(M)
        for i in range(n):
            if M[i][i] == 1:
                self.dfs(M, i, n)
                ans += 1
        return ans
        
    def dfs(self, M, curr, n):
        for i in range(n):
            if M[curr][i] == 1:
                M[curr][i] = M[i][curr] = 0
                self.dfs(M, i, n)
```

#### Java

```java
//code inspired from vinod23
public class Solution {
    public void dfs(int[][] M, int[] visited, int i) {
        for (int j = 0; j < M.length; j++) {
            if (M[i][j] == 1 && visited[j] == 0) {
                visited[j] = 1;
                dfs(M, visited, j);
            }
        }
    }
    public int findCircleNum(int[][] M) {
        int[] visited = new int[M.length];
        int count = 0;
        for (int i = 0; i < M.length; i++) {
            if (visited[i] == 0) {
                dfs(M, visited, i);
                count++;
            }
        }
        return count;
    }
}
```

<Disqus shortname="patricksudo" />