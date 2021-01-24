---
title: 209. Minimum Size Subarray Sum
description: leetcode 209. Minimum Size Subarray Sum
date: 2021-01-23
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Two Pointers
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

---
### Problem: <br/>

Given an array of **n** positive integers and a positive integer **s**, find the minimal length of a **contiguous** subarray of which the sum ≥ **s**. If there isn't one, return 0 instead.

#### Example:
    Input: s = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: the subarray [4,3] has the minimal length under the problem constraint.

#### Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

---
### Solution: <br/>


The left and right pointers all start from 0. Remember that the answer must be initialized as `Integer.MAX_VALUE`  because, at the end, it is necessary to check whether the conditions are met. That is, whether the length has been replaced. If the cannot find the subarray meeting the criteria, return 0.

The concept of the sliding window is used to traverse the array. If the current total is less than the target value, the right pointer moves forward one step and adds this value. If the total exceeds the target value, the left pointer discards the last element and moves forward one step.

Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def minSubArrayLen(self, s: int, nums: List[int]) -> int:
        size = len(nums)
        l, r = 0, 0
        ans, total = float('inf'), 0
        while r < size: 
            total += nums[r]
            while total >= s:
                ans = min(ans, r - l + 1)
                total -= nums[l]
                l += 1
            r += 1
        return ans if ans != float('inf') else 0
```

#### Java
```java
class Solution {
    public int minSubArrayLen(int s, int[] nums) {
        int n = nums.length, l = 0, r = 0, ans = Integer.MAX_VALUE, sum = 0;
        while (r < n) {
            sum += nums[r];
            while (sum >= s) {
                ans = Math.min(ans, r - l + 1);           
                sum -= nums[l++];
            }
            r++;
        }
        return ans != Integer.MAX_VALUE ? ans : 0;
    }
}
```

The follow-up question can be done by the combination of pre-sum and binary search.
The sum of the subarrays is equal to the difference between the pre-sum array's two-pointer elements. We can use binary search to find the lower-bound of the pre-sum array and make it minus by the first element greater or equal to the target.

Time complexity: $O(nlogn)$</br>
Space complexity: $O(1)$ 

```java
class Solution {
    public int minSubArrayLen(int s, int[] nums) {
        int n = nums.length, l = 0, ans = Integer.MAX_VALUE;
        for(int i = 1; i < n; i ++){
            nums[i] += nums[i-1];
        }
        for(int r = 0; r < n; r ++){
            if(nums[r] >= s){
                l = lowerBound(nums, l, r, nums[r], s);
                ans = Math.min(ans, r - l + 1);            
            }
        }
        return ans != Integer.MAX_VALUE ? ans : 0;
    }
    private int lowerBound(int[] arr, int l, int r, int preSum, int target){
        while(l < r){
            int m = l + (r - l)/2;
            if(preSum - arr[m] >= target){
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