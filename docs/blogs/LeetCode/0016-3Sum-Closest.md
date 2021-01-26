---
title: 16. 3Sum Closest
description: leetcode 16. 3Sum Closest
date: 2021-01-25
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Array 
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 0016. 3Sum Closest](https://leetcode.com/problems/valid-anagram/)

---
**Problem:** <br/>

Given an array `nums` of n integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.


#### Example 1:

    Input: nums = [-1,2,1,-4], target = 1
    Output: 2
    Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


#### Constraints:

- 3 <= nums.length <= 10^3
- -10^3 <= nums[i] <= 10^3
- -10^4 <= target <= 10^4

---
**Solution:** <br/>

Sort the array first, then traverse the array. The next element and last element are left and right pointers, respectively,

We use the sorting feature to see if the current addition is greater than the target. If so, it means the current summation is too large, so the right pointer moves one step to the left. Otherwise, it moves the left pointer one step to the right

If the difference between the summation and the target value is zero, then return this value. Otherwise, if the absolute difference is smaller, replace it.

Time complexity: $O(n＾2)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        n = len(nums)
        nums.sort()
        diff = 2 ** 32
        for i in range(n - 2):
            l, r = i + 1, n-1
            while l < r:
                _sum = nums[i] + nums[l] + nums[r]
                if _sum - target == 0:
                    return _sum
                if abs(_sum - target) < diff:
                    ans, diff = _sum, abs(_sum - target)
                if _sum > target:
                    r -= 1
                else:
                    l += 1
        return ans 
```


#### Java
```java
class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int n = nums.length, diff = Integer.MAX_VALUE, ans = 0;
        Arrays.sort(nums);
        for(int i = 0 ; i < n - 2; i ++){
            int l = i + 1, r = n - 1;
            while(l < r){
                int sum = nums[i] + nums[l] + nums[r];
                if(sum == target) {
                    return sum;
                } else if (sum > target) {
                    r--;
                } else {
                    l ++;
                } if(Math.abs(sum - target) < diff) {
                    ans = sum;
                    diff = Math.abs(sum - target);
                }
            }
        }
        return ans;
    }
}
```

<Disqus shortname="patricksudo" />