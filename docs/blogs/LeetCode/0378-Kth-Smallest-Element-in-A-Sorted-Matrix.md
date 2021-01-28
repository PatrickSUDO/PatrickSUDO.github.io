---
title: 378. Kth Smallest Element in a Sorted Matrix
description: leetcode 378. Kth Smallest Element in a Sorted Matrix
date: 2021-01-28
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Binary Search
  - Heap
categories:
  - LeetCode
---
[LeetCode 0378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

---
### Problem: <br/>

Given a `n x n` matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

#### Example:

    matrix = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
    ],
    k = 8,

    return 13.


#### Note:
- You may assume k is always valid, 1 ≤ k ≤ n<sup>2</sup>.

---
### Solution 1: Heap <br/>

We insert the first number in every row in the `minHeap` with its row, column, and value as a Tuple. Then, we do k iterations to poll the tuple from the heap. If the number is not at the end of the row, we add it to the heap, and it will be popped out of the heap in the next iteration. That is, we maintain a heap with size k.

Time complexity: $O(min(K,N)+K*logN)$</br>
Space complexity: $O(V+E)$ 
</br>
</br>


#### Java
```java
// code from YuanGao
class Solution {

    public int kthSmallest(int[][] matrix, int k) {
        int n = matrix[0].length;
        PriorityQueue<Tuple> pq = new PriorityQueue<>();
        for(int i = 0; i < matrix.length; i ++){
            pq.offer(new Tuple(i, 0, matrix[i][0]));
        }
        int ans = 0;
        for(int j = 0; j < k; j ++){
            Tuple t = pq.poll();
            ans = t.val;
            if(t.col < n - 1){
                pq.offer(new Tuple(t.row, t.col + 1, matrix[t.row][t.col + 1]));
            }
        }
        return ans;
    }
}

class Tuple implements Comparable<Tuple>{
    int row;
    int col;
    int val;

    public Tuple(int row, int col, int val) {
        this.row = row;
        this.col = col;
        this.val = val;
    }


    @Override
    public int compareTo(Tuple o) {
        return this.val - o.val;
    }
}
```
#### Solution 2: Binary Search </br>

Binary search can be used in any sorted array. However, it's a 2D matrix. Therefore, we use the value range instead of the index range. The target here is `k`. We need to know how many numbers are less or equal to the median number in this iteration. Another helper function, `getLessOrEqual` is built to do this job. We keep jumping from the first row and adding the number of elements to the `count`. If the number at the current position is greater than the median number, we start to decrement the `col` index until we find the correct `col`, which number is equal to `mid`.

In Python, the summation of `bisect_right` can be used. If the `mid` is not located at a particular row, `bisect_right` will be equal to the row's length. On the other hand, if `mid` is located at a specific row, `bisect_right` can find the index + 1 it locates.

Time complexity: $O(N×log(Max−Min)$</br>
Space complexity: $O(1)$ 
</br>
</br>


#### Python

```python
import bisect
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        n = len(matrix[0])
        
        l, r = matrix[0][0], matrix[n-1][n-1] + 1
        while l < r:
            m = l + (r - l)//2
            loc = sum(bisect.bisect_right(i, m) for i in matrix)
            if loc >= k :
                r = m
            else:
                l = m + 1
        return l
```

#### Java

```java
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        int n = matrix.length;
        int l = matrix[0][0], r = matrix[n-1][n-1];
        while(l < r) {
            int m = l + (r - l)/2;
            int count = getLessOrEqual(matrix, m);
            if(count < k) {
                l = m + 1;
            } else {
                r = m;
            }         
        }
        return l;
    }
    private int getLessOrEqual(int[][] matrix, int mid){
        int count = 0;
        int n = matrix.length, row = 0, col = n - 1;
        while(row < n && col >= 0){
            while(col >= 0 && matrix[row][col] > mid) col--;
            row++;
            count += (col + 1);      
    }
        return count;
  }
}
```

<Disqus shortname="patricksudo" />