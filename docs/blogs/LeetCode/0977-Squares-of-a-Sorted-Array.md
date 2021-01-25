---
title: 977. Squares of a Sorted Array
description: leetcode 977. Squares of a Sorted Array
date: 2020-01-25
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Array 
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 0977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

---
**Problem:** <br/>

Given an integer array `nums` sorted in **non-decreasing** order, return an array of **the squares of each number** sorted in non-decreasing order.


#### Example 1:

    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].

#### Example 2:

    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]


#### Constraints:

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums is sorted in non-decreasing order.

**Follow up:** Squaring each element and sorting the new array is very trivial, could you find an `O(n)` solution using a different approach?

---
**Solution:** <br/>

If both positive and negative numbers are allowed in the sorted array, the smallest number may appear in the middle of the array. It will be hard to start filling the `ans`  array from the smallest number. However, the largest square number should be on either the leftmost or rightmost of the array. We can fill the `ans` reversely. The left and right pointer start from the start and end, respectively. When the left pointers' square number is larger than the right one, we fill the current index of `ans` with the left pointer's square number and then move it one step rightward and vice versa. 

Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        n = len(A)
        ans = [0] * n
        l, r = 0, n - 1
        for i in range(n - 1, -1, -1):
            leftPow = A[l] * A[l]
            rightPow = A[r] * A[r]
            if(rightPow > leftPow):
                ans[i] = rightPow
                r -= 1
            else:
                ans[i] = leftPow
                l += 1
        return ans
```


#### Java
```java
class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] ans = new int[nums.length];
        int n = nums.length, l = 0, r = nums.length - 1;
        for(int i = n - 1 ; i >= 0; i--){
            int rightPow = nums[r] * nums[r];
            int leftPow = nums[l] * nums[l];
            if(rightPow > leftPow) {
                ans[i] = rightPow;
                r--; 
            } else {
                ans[i] = leftPow;
                l++;
            }
        }
        return ans;
    }
}class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] ans = new int[nums.length];
        int n = nums.length, l = 0, r = nums.length - 1;
        for(int i = n - 1 ; i >= 0; i--){
            int rightPow = nums[r] * nums[r];
            int leftPow = nums[l] * nums[l];
            if(rightPow > leftPow) {
                ans[i] = rightPow;
                r--; 
            } else {
                ans[i] = leftPow;
                l++;
            }
        }
        return ans;
    }
}
```

<Disqus shortname="patricksudo" />