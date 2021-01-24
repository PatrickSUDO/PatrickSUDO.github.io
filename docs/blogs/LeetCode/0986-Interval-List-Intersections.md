---
title: 986. Interval List Intersections
description: leetcode 986. Interval List Intersections986. Interval List Intersections  
date: 2021-01-23
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 986. Interval List Intersections986. Interval List Intersections](https://leetcode.com/problems/minimum-size-subarray-sum/)

---
### Problem: <br/>

You are given two lists of closed intervals, `firstList` and `secondList`, where `firstList[i] = [starti, endi]` and `secondList[j] = [startj, endj]`. Each list of intervals is pairwise **disjoint** and in **sorted order**.

Return the intersection of these two interval lists.

A **closed interval** `[a, b]` (with `a < b`) denotes the set of real numbers `x` with `a <= x <= b`.

The **intersection** of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of `[1, 3]` and `[2, 4]` is `[2, 3]`.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/30/interval1.png" style="width: 700px; height: 194px;">
    Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
    Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

#### Example 2:
    Input: firstList = [[1,3],[5,9]], secondList = []
    Output: []

#### Example 3:
    Input: firstList = [], secondList = [[4,8],[10,12]]
    Output: []

#### Example 4:
    Input: firstList = [[1,7]], secondList = [[3,10]]
    Output: [[3,7]]

#### Constraints:

- 0 <= firstList.length, secondList.length <= 1000
- firstList.length + secondList.length >= 1
- 0 <= start<sub>i</sub> < end<sub>i</sub> <= 109
- end<sub>i</sub> < start<sub>i+1</sub>
- 0 <= start<sub>j</sub> < end<sub>j</sub> <= 109
- end<sub>j</sub>  < start<sub>j+1</sub> 

---
### Solution: <br/>

The method of this question is very similar to the merge part of the merge sort. An interval contains two parts: the beginning and the end. The intersection of the two intervals is determined by both the beginning and the end of the two intervals.  Therefore, it is evident that the intersection interval's starting point is the larger one of the A or B intervals, while the end of the intersection is the smaller one of the end of the A and B intervals. Besides, the interval with a larger end should be kept.  Only the interval with the larger end will intersect with the next interval, so the pointer that should be moved is the one with the smaller ending interval. 
When the two intervals do not intersect, the smaller interval needs to be discarded, which is also very obvious.

Time complexity: $O(m+n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def intervalIntersection(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
        i, j, ans = 0, 0, []
        while i < len(A) and j < len(B):
            start = max(A[i][0], B[j][0])
            end = min(A[i][-1], B[j][-1])
            if start <= end:
                ans.append([start, end])
            if A[i][-1] < B[j][-1]:
                i += 1
            else:
                j += 1
        return ans
```

#### Java
```java
class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        int i = 0, j = 0, m = firstList.length, n = secondList.length;
        List<int []> ans = new ArrayList<>();
        while(i < m && j < n){
            int start = Math.max(firstList[i][0], secondList[j][0]);
            int end = Math.min(firstList[i][1], secondList[j][1]);
            if (start <= end){
                ans.add(new int[]{start, end});
            }
            if(firstList[i][1] < secondList[j][1]){
                i++;
            } else{
                j++;
            }
        }
        return ans.toArray(new int[0][]);
    }
}
```


<Disqus shortname="patricksudo" />