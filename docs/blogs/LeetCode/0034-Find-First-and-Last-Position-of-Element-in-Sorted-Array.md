---
title: 34. Find First and Last Position of Element in Sorted Array
description: leetcode 34. Find First and Last Position of Element in Sorted Array  
date: 2021-01-08
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Binary Search
  - Array
categories:
  - LeetCode
---
[LeetCode 34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

---
### Problem: <br/>


Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

**Follow up:** Could you write an algorithm with `O(log n)` runtime complexity?


#### Example 1:
    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

#### Example 2:
    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]

#### Example 3:
    Input: nums = [], target = 0
    Output: [-1,-1]

#### Constraints:

- 0 <= nums.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- nums is a non-decreasing array.
- -10<sup>9</sup> <= target <= 10<sup>9</sup>

---
### Solution: <br/>

We need a helper function to get the lower bound of the target. The lower bound is performing binary search in the left-closed right-open interval [first, last) of the sorted array, and return the position of the first element greater than or equal to the target. If all aspects are less than the target, the position of last is returned. As for the higher bound of the target, we get the left closest index of the lower bound of target + 1. If the lower bound of both target and target + 1 are equal, it means we don't find the element, so return [-1, -1].

Time complexity: $O(logn)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Java
```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int start = binSerach(nums, target);
        int end = binSerach(nums, target + 1);
        if(start == end) return new int[]{-1, -1};
        return new int[]{start, end - 1};
    }
    public int binSerach(int[] nums, int target){
        int l = 0, r = nums.length;
        while(l < r){
            int m = l + (r - l) / 2;
            if(nums[m] < target){
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
}
```

#### Python
In python, a library can be used, but it may like cheating.

```python
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l = bisect.bisect_left(nums, target)
        r = bisect.bisect_right(nums, target)
        if l==r: return [-1, -1]
        return [l, r-1]
```




<Disqus shortname="patricksudo" />