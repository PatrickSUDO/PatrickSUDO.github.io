---
title: 198. House Robber
description: leetcode 198. House Robber
date: 2020-11-02
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
readingTime: {text: "Not so long!", minutes: 3 }
tags: 
  - LeetCode-Easy
  - DP
categories:
  - LeetCode
---
[LeetCode 0198. House Robber](https://leetcode.com/problems/house-robber/)

---
<PageInfo />
**Problem:** <br/>

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night.**

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police.**

#### Example 1:

    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
                Total amount you can rob = 1 + 3 = 4.

#### Example 2:

    Input: nums = [2,7,9,3,1]
    Output: 12
    Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
                Total amount you can rob = 2 + 9 + 1 = 12.



#### Constraints:

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 400

---
**Solution:** <br/>
Dealing with the DP problem, the first thing is to figure out the state transition equation. We need to record and extract the maximum money the theft can have in the previous state. It will then be evident that the current state is the maximum of the last state(because robbing adjacent house is not allowed) and the state before the last state plus the money in the current house. We can build the DP table bottom-up in this way. The answer is the previous state. 


Time complexity: $O(n)$</br>
Space complexity: $O(n)$  and can be further reduced to $O(1)$
</br>
</br>

#### Python
```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        l=len(nums)
        if l == 0:
            return 0
        if l == 1:
            return nums[0]
        
        rob = [0] * l
        rob[0], rob[1] = nums[0], max(nums[0], nums[1])
        for i in range(2,l):
            rob[i] = max(rob[i-1], rob[i-2] + nums[i])
        return rob[-1]
```

To reduce the space complexity, we find that only last 2 state affect the current state. So, the other space can be released. We only need 2 variables and reuse them in a rolling way to memorize the state.


#### Java
```java
class Solution {
        public int rob(int[] nums) {
            int curr = 0;
            int prev = 0;
            int prev2 = 0;
            for(int i = 0 ; i < nums.length; i++){
                curr = Math.max(prev, prev2 + nums[i]);
                prev2 = prev;
                prev = curr;
            }
            return prev;
        }
}
```
<Disqus shortname="patricksudo" />