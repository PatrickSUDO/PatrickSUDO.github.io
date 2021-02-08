---
title: 1042. Flower Planting With No Adjacent
description: leetcode 1042. Flower Planting With No Adjacent
date: 2021-02-08
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Graph
categories:
  - LeetCode
---
[LeetCode 1042. Flower Planting With No Adjacent](https://leetcode.com/problems/flower-planting-with-no-adjacent/)

---
### Problem: <br/>

You have `n` gardens, labeled from `1` to n, and an array `paths` where `paths[i] = [xi, yi]` describes a bidirectional path between garden `xi` to garden `yi`. In each garden, you want to plant one of 4 types of flowers.

All gardens have **at most 3** paths coming into or leaving it.

Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return **any** such a choice as an array `answer`, where `answer[i]` is the type of flower planted in the `(i+1)th` garden. The flower types are denoted `1, 2, 3, or 4`. It is guaranteed an answer exists.

#### Example 1:

    Input: n = 3, paths = [[1,2],[2,3],[3,1]]
    Output: [1,2,3]
    Explanation:
    Gardens 1 and 2 have different types.
    Gardens 2 and 3 have different types.
    Gardens 3 and 1 have different types.
    Hence, [1,2,3] is a valid answer. Other valid answers include [1,2,4], [1,4,2], and [3,2,1].

#### Example 2:

    Input: n = 4, paths = [[1,2],[3,4]]
    Output: [1,2,1,2]

#### Example 3:

    Input: n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
    Output: [1,2,3,4]

#### Constraints:

- 1 <= n <= 10<sup>4</sup>
- 0 <= paths.length <= 2 * 104
- paths[i].length == 2
- 1 <= xi, yi <= n
- xi != yi
- Every garden has **at most 3** paths coming into or leaving it.

---
#### Solution: </br>

First, build the graph with the given pairs. We set the node index to start from 0, while the color index starts from 1(0 represents the unvisited node). We iterate through the node and collect the colors of its neighbors. Then, we iterate through all the possible colors. There are only four possible colors at most since there are only three edges at most in each node. If the neighbor uses the color, we skip it and record the color of the current position.


Time complexity: $O(V+E)$</br>
Space complexity: $O(V+E)$ 
</br>
</br>


#### Python

```python
class Solution:
    def gardenNoAdj(self, N: int, paths: List[List[int]]) -> List[int]:
        ans = [0] * N
        graph = [[] for _ in range(N)]
        for i, j in paths:
            graph[i-1].append(j-1)
            graph[j-1].append(i-1)
        
        for garden in range(N):
            neighbor_colors = []
            for neighbor in graph[garden]:
                neighbor_colors.append(ans[neighbor])
            for color in range(1, 5):
                if color in neighbor_colors: continue
                ans[garden] = color
                break
        return ans
            
```

#### Java

```java
class Solution {
    public int[] gardenNoAdj(int n, int[][] paths) {
        ArrayList<Integer>[] graph = new ArrayList[n];
        int[] ans = new int[n];
        
        for(int i = 0; i < n; i++) {
            graph[i] = new ArrayList<Integer>();
        }
        
        for(int[] pair: paths){
            int u = pair[0] - 1, v = pair[1] - 1;
            graph[u].add(v);
            graph[v].add(u);
        }
        
        for(int curr = 0; curr < n; curr ++){
            HashSet<Integer> neighbors = new HashSet<>();
            for(int j: graph[curr]){
                neighbors.add(ans[j]);
            }
            
            for(int color = 1; color <= 4; color++ ){
                if(neighbors.contains(color)) continue;
                ans[curr] = color;
                break;
            }
        }
        return ans;
    } 
}
```

<Disqus shortname="patricksudo" />