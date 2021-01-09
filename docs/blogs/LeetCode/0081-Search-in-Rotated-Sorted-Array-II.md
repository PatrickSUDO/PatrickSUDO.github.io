---
title: 81. Search in Rotated Sorted Array II
description: leetcode 81. Search in Rotated Sorted Array II Array  
date: 2021-01-09
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
[LeetCode 81. Search in Rotated Sorted Array II](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

---
### Problem: <br/>


You are given an integer array `nums` sorted in ascending order (not necessarily **distinct** values), and an integer target.

Suppose that `nums` is rotated at some pivot unknown to you beforehand (i.e., `[0,1,2,4,4,4,5,6,6,7]` might become `[4,5,6,6,7,0,1,2,4,4]`).

If `target` is found in the array return its index, otherwise, return `-1`.


#### Example 1:
    Input: nums = [2,5,6,0,0,1,2], target = 0
    Output: true

#### Example 2:
    Input: nums = [2,5,6,0,0,1,2], target = 3
    Output: false


#### Constraints:

- `1 <= nums.length <= 5000`
- `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`
- nums is guaranteed to be rotated at some pivot.
- `-10<sup>4</sup> <= target <= 10<sup>4</sup>`

**Follow up:** This problem is the same as `Search in Rotated Sorted Array`, where `nums` may contain **duplicates.** Would this affect the run-time complexity? How and why?


---
### Solution: <br/>

The array can have the same numbers. It may cause the value of the left and right pointers to equal. In this case, if you directly compare the left and right pointers, you don't know which direction to search. Therefore, you need to move the right(or left) pointer before the comparison. Hence,  it points to a different number from the other pointer. Then search.

If the position pointed to by mid is smaller than or equal to `nums[r-1]`, it means that `m` to risare sorted. At this time, if `nums[m] < target <=nums[r-1]`, it means that the target should exist after the position of `m`. Therefore,  the left pointer should be `m+1`. Otherwise, the search is before `m` and move the right pointer.

If the position pointed to by mid is bigger than `nums[r]`, then `l` to `m` is in order, and then compare in the same way.

The example 1 can be illustrated as below:
<a href="https://imgur.com/hzyebxN"><img src="https://imgur.com/hzyebxN.png" title="source: imgur.com" /></a>

Time complexity: $O(n)$</br> the worst is when all the numbers are the same.
Space complexity: $O(1)$ 
</br>
</br>

#### Java
```java
class Solution {
    public boolean search(int[] nums, int target) {
        int l = 0, r = nums.length;
        while(l < r){
            while (l < r-1 && nums[l] == nums[r-1]) r--;
            int m = l + (r - l) / 2;
            if(nums[m] == target) return true; 
            if(nums[m] <= nums[r-1]){
                if(nums[m] < target && nums[r-1] >= target){
                    l = m + 1;
                } else {
                    r = m;
                }
            }else{
                if(nums[m] > target && nums[l] <= target){
                    r = m;
                } else {
                    l = m + 1;
                }
            }
        }
        return false;
    }
}
```

#### Python
```python
class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        if not nums: return False
        l, r = 0, len(nums)
        while l < r:
            while l < r-1 and nums[l] == nums[r-1]:
                r -= 1
            m = (l + r - 1) // 2
            if target == nums[m] :
                return True
            if nums[m] <= nums[r-1]:
                if nums[m] < target <= nums[r-1]:
                    l = m + 1
                else:
                    r = m
            else:
                if nums[l] <= target < nums[m]:
                    r = m
                else:
                    l = m + 1
        return False
```




<Disqus shortname="patricksudo" />