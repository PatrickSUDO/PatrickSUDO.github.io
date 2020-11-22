---
title: 934. Shortest Bridge
description: leetcode 934. Shortest Bridge
date: 2020-11-22
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - BFS
  - DFS
categories:
  - LeetCode
---
[LeetCode 934. Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)

---
### Problem: <br/>

In a given 2D binary array `A`, there are two islands.  (An island is a 4-directionally connected group of `1`s not connected to any other `1`s.)

Now, we may change `0`s to `1`s so as to connect the two islands together to form `1` island.

Return the smallest number of `0`s that must be flipped.  (It is guaranteed that the answer is at least 1.)

#### Example 1:

    Input: A = [[0,1],[1,0]]
    Output: 1

#### Example 2:

    Input: A = [[0,1,0],[0,0,0],[0,0,1]]
    Output: 2

#### Example 3:

    Input: A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
    Output: 1



#### Constraints:

- 2 <= A.length == A[0].length <= 100
- A[i][j] == 0 or A[i][j] == 1

---
### Solution: <br/>

First use DFS to find the first island and replace all 1 with 2. Be careful not to call the DFS twice, otherwise the second island will become 2 too.Next, use a BFS to control the expansion of the first island and count the steps until it reaches the second island(the number is one). 


Time complexity: $O(mn)$</br>
Space complexity: $O(mn)$ 
</br>
</br>

#### Python
```python
from collections import deque
class Solution:
    def shortestBridge(self, A: List[List[int]]) -> int:
        def dfs(x, y, q):

            if  x < 0 or y < 0 or x >= n or y >= m or A[y][x] != 1:
                return None
            A[y][x] = 2
            q.append((y, x, 0))

            dfs(x, y + 1, q)
            dfs(x, y - 1, q)
            dfs(x - 1, y, q)
            dfs(x + 1, y, q)


        m, n = len(A), len(A[0])

        visited = [[0 for _ in range(n+1)] for _ in range(m+1)]
        q = deque()

        found = False
        for i in range(m):
            if found: continue
            for j in range(n):
                if found: continue
                if A[i][j]:
                    found = True
                    dfs(j, i, q)

        while q:
            i, j, d = q.popleft()
            
            if A[i][j] == 1: return d-1
            
            dx = [1, -1, 0, 0]
            dy = [0, 0, 1, -1]
            for k in range(4):
                x = j + dx[k]
                y = i + dy[k]
                if 0 <= x < n and 0 <= y < m and visited[y][x] != 1:
                    q.append((y, x, d + 1))
                    visited[y][x] = 1
```

#### Java
```java
class Solution {
    public int shortestBridge(int[][] A) {
        int m = A.length, n = A[0].length;
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};
        Queue<int[]> q = new LinkedList<>();
        boolean[][] visited = new boolean[m][n];
        boolean found = false;
        for (int i = 0; i < m; i++) {
            if (found) break;
            for (int j = 0; j < n; j++) {
                if (A[i][j] == 1) {
                    dfs(A, visited, i, j, q);
                    found = true;
                    break;
                }
            }
        }
        int step = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            for (int k = 0; k < size; k++) {
                int[] node = q.poll();
                int i = node[0], j = node[1];

                for (int d = 0; d < 4; d++) {
                    int x = j + dx[d];
                    int y = i + dy[d];
                    if (x < 0 || x >= n || y < 0 || y >= m || visited[y][x]) continue;
                    if (A[y][x] == 1) return step;
                    q.offer(new int[]{y, x});
                    visited[y][x] = true;
                }
            }
            step++;

        }

        return -1;
    }

    private void dfs(int[][] A, boolean[][] visited, int i, int j, Queue<int[]> q) {
        if (i < 0 || i >= A[0].length || j < 0 || j >= A.length || visited[i][j] || A[i][j] == 0) return;
        q.offer(new int[]{i, j});
        A[i][j] = 2;
        visited[i][j] = true;
        
        dfs(A, visited, i + 1, j, q);
        dfs(A, visited, i - 1, j, q);
        dfs(A, visited, i, j + 1, q);
        dfs(A, visited, i, j - 1, q);
    }
}
```
<Disqus shortname="patricksudo" />