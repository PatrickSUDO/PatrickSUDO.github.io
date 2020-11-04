---
title: 51. N-Queens
description: leetcode 51. N-Queens
date: 2020-09-20
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - Backtracking
  - DFS
categories:
  - LeetCode
---
[LeetCode 0051. N-Queens](https://leetcode.com/problems/n-queens/)

---
**Problem:** <br/>
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

<img alt="" src="https://assets.leetcode.com/uploads/2018/10/12/8-queens.png" style="width: 258px; height: 276px;">

Example:

Input: 4 </br>
Output: [ </br>
 [".Q..",  // Solution 1 </br>
  "...Q", </br>
  "Q...", </br>
  "..Q."], </br>

 ["..Q.",  // Solution 2 </br>
  "Q...", </br>
  "...Q", </br>
  ".Q.."] </br>
] </br>
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

---
**Solution:** <br/>
From the question, we can infer that every row and column should only have one queen because every queen can attack all the chess pieces in the same row and same column. Also, everything on the two diagonals passing this specific queen will be attacked, too. To describe the two diagonals, we discover a pattern: every element on the same diagonal will have same value of **x - y** or x + y. That is, **x - y** represent the diagonal with negative slope while **x + y** represents the diagonal with positive slope. 
Therefore, we have the constrains which limits the searching space. We use DFS recursively. When all the rows hve been checked, we add the current state to answer. Remember to copy it ,or the answer may be changed after you pop out the element inside it. We explore every column in a row, if the column or row index or diagonals are in the set recording them, we can skip this point. Next, we add the legal position in the current state, and add the row, column, diagonals it can attack in the set respectively. We can go to next recursion to explore next column. Here, we may encounter some illegal case making us go to the dead end. So, backtracking is the technique to deal with this issue. We pop out the element when it finishes searching or there is no available legal point ahead. After back to the "crossroad" before entering to this road, we still need to "reactivate" the limited positions controlled by the popped queen.


Time $O(n!)$ </br>
Space $O(n!)$

```python
#Code inspired by ZitaoWang
 class Solution:
    def solveNQueens(self, n: 'int') -> 'List[List[str]]':
        def dfs(i, b):
            if i == n:
                ans.append(b[:])
            for j in range(n):
                if j in colSeen or i+j in diagSeen1 or i-j in diagSeen2: continue
                colSeen.add(j)
                diagSeen1.add(i+j)
                diagSeen2.add(i-j)
                b.append("."*j + "Q" + "."*(n-j-1))
                dfs(i+1, b)
                b.pop()
                colSeen.remove(j)
                diagSeen1.remove(i+j)
                diagSeen2.remove(i-j)
                           
        ans = []
        colSeen = set()
        diagSeen1 = set()
        diagSeen2 = set()
        dfs(0, [])
        return ans
                
```
<Disqus shortname="patricksudo" />
