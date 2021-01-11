---
title: 74. Search a 2D Matrix
description: leetcode 74. Search a 2D Matrix
date: 2021-01-11
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)

---
### Problem: <br/>

Write an efficient algorithm that searches for a value in an `m x n` matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;">
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" style="width: 322px; height: 242px;">
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false


#### Constraints:

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 100
- -10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup>


---
### Solution: <br/>

Convert to one-dimensional using regular binary search. However, the row and column are the product of total rows and columns divided by the total column number and the quotient of the total column number, respectively.

Time complexity: $O(logmn)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix: return False 
        m, n = len(matrix), len(matrix[0])
        l, r = 0, m * n
        while l < r:
            mid = l + (r - l)//2
            i, j = mid // n, mid % n 
            if target == matrix[i][j]:
                return True
            elif target > matrix[i][j]:
                l = mid + 1
            else:
                r = mid
        return False
```

#### Java
```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length, n = matrix[0].length;
        int l = 0, r = m * n;
        while(l < r){
            int mid = l + (r - l)/2;
            int i = mid / n, j = mid % n; 
            if (matrix[i][j] == target) {
                return true;
            } else if(matrix[i][j] < target){
                l = mid + 1;
            } else{
                r = mid;
            }
        }
        return false;
    }
}
```

<Disqus shortname="patricksudo" />