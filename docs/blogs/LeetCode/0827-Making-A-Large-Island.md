---
title: 827. Making A Large Island
description: leetcode 827. Making A Large Island
date: 2021-01-30
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - DFS
categories:
  - LeetCode
---
[LeetCode 0827. Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

---
### Problem: <br/>

In a 2D grid of `0`s and `1`s, we change at most one `0` to a `1`.

After, what is the size of the largest island? (An island is a 4-directionally connected group of `1`s).

#### Example 1:

    Input: [[1, 0], [0, 1]]
    Output: 3
    Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

#### Example 2:

    Input: [[1, 1], [1, 0]]
    Output: 4
    Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.

#### Example 3:

    Input: [[1, 1], [1, 1]]
    Output: 4
    Explanation: Can't change any 0 to 1, only one island with area = 4.

#### Notes:

- 1 <= grid.length = grid[0].length <= 50.
- 0 <= grid[i][j] <= 1.

---

#### Solution: </br>

We traverse the grid to find the starting point of the first island. First, find the area of each island and use the hash table to access it. Enter the recursion to obtain the area. If it does not cross the boundary,  mark the entry point as the current color, and increment the color before entering the next recursion. To obtain the area, use the `DFS` algorithm to get the areas in four directions. After all the areas are calculated, remember to find the maximum value first. This way can handle the situation when all the grid elements are `1`.

Next, look for the position, which number is `0` to see the colors in the four directions, and go to the hash table to find the area and add it up.
We can use `HashSet` to access all the colors we get to avoid when a color surrounds 0 in more than one direction. In this case, the duplicate color will be adding two times.

Remember to start the color from 2.


Time complexity: $O(M*N)$</br>
Space complexity: $O(M*N)$ 
</br>
</br>


#### Python

```python
class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        color = 1
        m, n = len(grid), len(grid[0])
        areas = {}
        areas[0] = 0 #Prevent key error
        ans = 0 
        def getArea(row, col):
            if row < 0 or row >= m or col < 0 or col >= n or grid[row][col] != 1: return 0  
            grid[row][col] = color
            return 1 + getArea(row-1, col) + getArea(row+1, col) + getArea(row, col-1) + getArea(row, col+1)
        
        def getColor(row, col):
            if row < 0 or row >= m or col < 0 or col >= n: return 0
            return grid[row][col]
        
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    color += 1
                    areas[color] = getArea(i, j)
                    ans = max(ans, areas[color]) 

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    area = 1
                    colors = {getColor(i-1, j), getColor(i+1, j), getColor(i, j-1), getColor(i, j+1)}
                    for color in colors:
                        area += areas[color]
                        ans = max(ans, area)
        return ans
```

#### Java

```java
class Solution {
    public int largestIsland(int[][] grid) {
        int color = 1, m = grid.length, n = grid[0].length, ans = 0;
        HashMap<Integer, Integer> areas = new HashMap<>();
        areas.put(0, 0);

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == 1){
                    areas.put(++color ,getArea(grid, i, j, color));
                    ans = Math.max(ans, areas.get(color));
                }
            }
        }

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == 0){
                    HashSet<Integer> neighbors = new HashSet<>();
                    neighbors.add(getColor(grid, i + 1, j));
                    neighbors.add(getColor(grid, i - 1, j));
                    neighbors.add(getColor(grid, i, j + 1));
                    neighbors.add(getColor(grid, i, j - 1));
                    int area = 1;
                    for(int neighbor : neighbors){
                        area += areas.get(neighbor);
                        ans = Math.max(ans, area);
                    }
                }
            }
        }
        return ans;

    }

    private int getArea(int[][] grid, int i, int j, int color){
        if(i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] != 1) return 0;
        grid[i][j] = color;
        return 1 + getArea(grid, i + 1, j, color) + getArea(grid, i - 1, j, color) + getArea(grid, i, j + 1, color) + getArea(grid, i, j - 1, color);
    }

    private int getColor(int[][] grid, int i, int j){
        if(i >= grid.length || j >= grid[0].length || i < 0 || j < 0) return 0;
        return grid[i][j];
    }
}
```

<Disqus shortname="patricksudo" />