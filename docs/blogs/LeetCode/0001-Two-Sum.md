---
title: 1. Two Sum
description: leetcode 1. Two Sum
date: 2020-10-31
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Array
  - Hash Table
categories:
  - LeetCode
---
[LeetCode 0001. Two Sum](https://leetcode.com/problems/two-sum/)

---
### Problem: <br/>

Given an array of integers **nums** and an integer **target**, return indices of the two numbers such that they add up to **target**.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

#### Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].

#### Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]

#### Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]


#### Constraints:

- 2 <= nums.length <= 10<sup>5</sup>
- 10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- 10<sup>9</sup> <= target <= 10<sup>9</sup>
- <strong>Only one valid answer exists.</strong>

---
### Solution: <br/>
We can use brute force to iterate through all the possibilities exhaustively, but it cost $O(n^2)$ time complexity because the target is composed of exact 2 elements in the array. We can use hash table to record the index when we first see a possible target component. Then, when we meet its complementary number, we can get the index we put into the hash table previously. Then we can have $O(n)$ time complexity.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        index_dict=dict()
        for i in range(len(nums)):
            if target-nums[i] in index_dict:
                return [index_dict.get(target-nums[i]), i]
            else:
                index_dict[nums[i]] = i
```

#### Java
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] ans = new int[2];
        HashMap<Integer, Integer> h = new HashMap<>();
        for (int i = 0;  i < nums.length; i++){
            if (h.containsKey(target - nums[i])) {
                ans[0] = h.get(target - nums[i]);
                ans[1] = i;
                return ans;
            } else {
                h.put(nums[i], i);
            }
        }
        return ans;
    }
}
```
<Disqus shortname="patricksudo" />