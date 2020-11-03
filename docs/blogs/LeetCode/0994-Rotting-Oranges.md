---
title: 0994. Rotting Oranges
date: 2020-09-15
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - BFS
categories:
  - LeetCode
---
[994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

---
**Problem:** <br/>
In a given grid, each cell can have one of three values:

- the value 0 representing an empty cell;
- the value 1 representing a fresh orange;
- the value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:

<img alt="" src="https://assets.leetcode.com/uploads/2019/02/16/oranges.png" style="width: 712px; height: 150px;">
Input: [[2,1,1],[1,1,0],[0,1,1]]</br>
Output: 4 </br></br>
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]</br>
Output: -1</br>
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.</br></br>
Example 3:

Input: [[0,2]]</br>
Output: 0</br>
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1. 1 <= grid.length <= 10
2. 1 <= grid[0].length <= 10
3. grid[i][j] is only 0, 1, or 2.

---
**Solution:** <br/>
Seeing the concept of calculating the number of steps, We immediately think of BFS. The more troublesome problem is to deal with exceptions, so it is necessary to calculate whether there are any oranges that have not been rotten, and ig there are no oranges at the beginning or all of them are rotten at the beginning .

First, traverse all the nodes, and add all the 2 found to the queue. In fact, just add one to it, but in order to find all the fresh oranges, all the oranges must be traversed. If the queue is not empty, start traversing the layers, and then find four directions. If it is not 0 or 2 and it is not out of bounds, add it to the queue and mark it as 2, and when one level is completed, time + 1

Be careful the initial time should be set as -1 since the first step begin after the first node is pop from the queue.

Time $O(n)$ </br>
Space $O(n)$


```python
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = collections.deque()
        m = len(grid)
        n = len(grid[0])
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    q.append((i,j))
                elif grid[i][j] == 1:
                    count += 1
        time = -1 
        
        #BFS
        while q:
            for _ in range(len(q)):
                y, x = q.popleft()
                delta = [(1,0) , (-1, 0), (0, 1), (0,-1)]
                for dy, dx in delta:
                    i = y + dy
                    j = x + dx
                    if i < 0 or j < 0 or i >= m or j >= n or grid[i][j] == 0 or grid[i][j] == 2: continue 
                    q.append((i,j))
                    grid[i][j] = 2
                    count -= 1
            time += 1
        return max(time, 0) if count == 0 else -1
```
<Disqus shortname="patricksudo" />
