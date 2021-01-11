---
title: 162. Find Peak Element
description: leetcode 162. Find Peak Element
date: 2021-01-01
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Array
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)

---
### Problem: <br/>

A peak element is an element that is strictly greater than its neighbors.

Given an integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that `nums[-1] = nums[n] = -∞`.


#### Example 1:
    Input: nums = [1,2,3,1]
    Output: 2
    Explanation: 3 is a peak element and your function should return the index number 2.

#### Example 2:
    Input: nums = [1,2,1,3,5,6,4]
    Output: 5
    Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.


#### Constraints:

- `1 <= nums.length <= 1000`
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1
- `nums[i] != nums[i + 1]` for all valid `i`.


---
### Solution: <br/>

To find the peak, you must first determine that it is located uphill or downhill. Find the midpoint(`m`) first. If the `nums[m]`  is strictly greater than their neighbor, then return `m`. Next,  move one step to the right. If the point is greater than the midpoint, it is currently uphill. Otherwise, it is downhill. If it is uphill, the left pointer moves one step right to the midpoint. If it is downhill, the right node moves to the midpoint. `nums[l]  `must be larger than `nums[r]`, at last. The left pointer is the peak value, so the right pointer can only move to the middle point when it moves.


Time complexity: $O(logn)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r :
            m = l + (r - l)//2
            if nums[m] > nums[m+1] and nums[m] > nums[m-1]: return m
            if nums[m] < nums[m + 1]:
                l = m + 1
            else:
                r = m 
        return l 
```

#### Java
```java
class Solution {
    public int findPeakElement(int[] nums) {
        int l = 0, r = nums.length - 1;
        while(l < r){
            int m = l + (r - l)/2;
            if(nums[m] > nums[m+1] && nums[m] > nums[m]) return m;    
            else if(nums[m+1] > nums[m]){
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
}
```

<Disqus shortname="patricksudo" />