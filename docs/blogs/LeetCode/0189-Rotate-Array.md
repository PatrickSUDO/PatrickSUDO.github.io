---
title: 189. Rotate Array
description: leetcode 189. Rotate Array
date: 2020-11-06
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Array
categories:
  - LeetCode
---
[LeetCode 0189. Rotate Array](https://leetcode.com/problems/rotate-array/)

---
### Problem: <br/>

Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

- Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
- Could you do it in-place with O(1) extra space?

#### Example 1:

    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

#### Example 2:

    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]

#### Constraints:
- 1 <= nums.length <= 2 * 10<sup>4</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1
- 0 <= k <= 105     


---
### Solution: <br/>
The problem asked for no extra space means we can only manipulate the array elements with pointers. Rotating the array can be separated into 3 steps:
1. Reverse the elements before the last k elements.
2. Reverse the last k elements.
3. Reverse all the elements.

To reverse the array, we need to write the helper function using two-pointers and swap the elements from outer to inner. In Python, we know that we have a reverse() method, but it costs extra memory, which is not acceptable.


Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        def numReverse(start, end):
            while start < end:
                nums[start], nums[end] = nums[end], nums[start]
                start += 1
                end -= 1
        k, n = k % len(nums), len(nums)         
        numReverse(0, n - k - 1)
        numReverse(n - k , n - 1)
        numReverse(0, n - 1)
```

#### Java
```java
class Solution {
    
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k %= n ; 
        reverse(nums, 0, n - k - 1);
        reverse(nums, n - k, n - 1);
        reverse(nums, 0, n -1);
    }

    private void reverse(int[] nums, int l, int r){
        while(l < r) {
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l ++;
            r --;
        }
    }
}
```
<Disqus shortname="patricksudo" />