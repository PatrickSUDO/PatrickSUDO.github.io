---
title: 0041. First Missing Positive
date: 2020-10-24
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - Array
categories:
  - LeetCode
---
[LeetCode 0041. First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

---
### Problem: 

Given an unsorted integer array nums, find the smallest missing positive integer.

**Follow up**: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?


#### Example 1:

    Input: nums = [1,2,0]
    Output: 3

#### Example 2:

    Input: nums = [3,4,-1,1]
    Output: 2

#### Example 3:

    Input: nums = [7,8,9,11,12]
    Output: 1

#### Constraints:

- 0 <= nums.length <= 300

- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1

---
### Solution:
No extra memory can be used, so the hash table is not possible to use here, and it can only be encoded on the original array. We first remove 0 or negative numbers, set them to infinite or the maximum integer, and be filtered in the future. An important tip here is that the smallest positive integer must be from 1 to l+1 (close interval). So we can directly use the original array index to record whether the positive integer exists or not.
So we use nums[i] as an index but remember to -1 because we are looking for 1~l+1, but the array coordinates start from 0, forcing the number of coordinates to be negative.

Finally, start from the beginning to find the positive number and the smallest missing positive integer. If there is no finding after the traversal, it means that the original missing number is larger than the original number, so you need to return l+1.

Time complexity: $O(n)$ </br>
Space complexity: $O(1)$
</br>
</br>

#### Python
```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            if nums[i] <= 0:
                nums[i] = float('inf')
        
        for i in range(n):
            ind = abs(nums[i])
            if ind <= n:
                nums[ind-1] = -abs(nums[ind-1])
        
        for i in range(n):
            if nums[i] > 0:
                return i+1
        return n + 1
```
<Disqus shortname="patricksudo" />
