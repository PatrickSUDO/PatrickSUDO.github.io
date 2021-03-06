---
title: 136. Single Number
description: leetcode 136. Single Number
date: 2020-10-31
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Bit Manipulation
categories:
  - LeetCode
---
[LeetCode 0136. Single Number](https://leetcode.com/problems/single-number/)

---
**Problem:** <br/>
Given a **non-empty** array of integers **nums**, every element appears twice except for one. Find that single one.

**Follow up:** Could you implement a solution with a linear runtime complexity and without using extra memory?

#### Example 1:

    Input: nums = [2,2,1]
    Output: 1

#### Example 2:

    Input: nums = [4,1,2,1,2]
    Output: 4

#### Example 2:

    Input: nums = [1]
    Output: 1

#### Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

---
**Solution:** <br/>
Since every elements except one appear twice, we know that we can cancel the one in pairs, then we can get the answer. To cannel each element in pair, we use XOR operation. XOR to all the elements will prevent the unique element.


    1 XOR 0 = 1
    0 XOR 1 = 1
    1 XOR 1 = 0
    0 XOR 0 = 0


Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        res=0
        for i in nums:
            res^=i
        return res
```


#### Java
```java
class Solution {
    public int singleNumber(int[] nums) {
        int ans = 0;
        for (int i = 0; i < nums.length; i ++){
            ans ^= nums[i];
        }
        return ans;
    }
}
```
<Disqus shortname="patricksudo" />