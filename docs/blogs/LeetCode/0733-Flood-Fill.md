---
title: 733. Flood Fill
description: leetcode 733. Flood Fill
date: 2021-01-28
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - DFS
categories:
  - LeetCode
---
[LeetCode 0733. Flood Fill](https://leetcode.com/problems/flood-fill/)

---
### Problem: <br/>

An `image` is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (`sr`, `sc`) representing the starting pixel (row and column) of the flood fill, and a pixel value `newColor`, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.
#### Example 1:

    Input: 
    image = [[1,1,1],[1,1,0],[1,0,1]]
    sr = 1, sc = 1, newColor = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]
    Explanation: 
    From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
    by a path of the same color as the starting pixel are colored with the new color.
    Note the bottom corner is not colored 2, because it is not 4-directionally connected
    to the starting pixel.


#### Note:

- The length of `image` and `image[0]` will be in the range `[1, 50]`.
- The given starting pixel will satisfy `0 <= sr < image.length` and `0 <= sc < image[0].length.`
- The value of each color in `image[i][j]` and `newColor` will be an integer in `[0, 65535]`.

---
#### Solution: </br>

Check if the starting color is equal to the `newColor` and return the original image.
We start the **DFS** recursion function. If the index is not valid or the color is not equal to the starting color, return the function. Then, we flip the color to `newColor`. Next, we explore four directions recursively.

Time complexity: $O(N)$</br>
Space complexity: $O(N)$ 
</br>
</br>


#### Python

```python
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        m, n = len(image), len(image[0])
        color = image[sr][sc]
        
        def dfs(row, col):
            image[row][col] = newColor
            if row - 1 >= 0 and image[row-1][col] == color:
                dfs(row-1, col)
            if row + 1 < m and image[row+1][col] == color:
                dfs(row+1, col)
            if col - 1 >= 0 and image[row][col-1] == color:
                dfs(row, col-1)
            if col + 1 < n and image[row][col+1] == color:
                dfs(row, col+1)
                
        if color == newColor: return image
        dfs(sr, sc)
        
        return image
```

#### Java

```java
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int startColor = image[sr][sc]; 
        if(startColor == newColor) return image;
        int m = image.length, n = image[0].length;
        dfs(image , sr, sc, startColor, newColor);
        return image;
    
    }
    private void dfs(int[][] image, int i ,int j, int startColor, int newColor){
        int m = image.length, n = image[0].length;
        if(i >= m || j >= n || i < 0 || j < 0 || image[i][j] != startColor) return;
        image[i][j] = newColor;
        dfs(image, i + 1, j, startColor, newColor);
        dfs(image, i - 1, j, startColor, newColor);
        dfs(image, i, j + 1, startColor, newColor);
        dfs(image, i, j - 1, startColor, newColor);
    }
}
```

<Disqus shortname="patricksudo" />