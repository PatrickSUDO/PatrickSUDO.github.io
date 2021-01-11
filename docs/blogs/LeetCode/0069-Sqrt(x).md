---
title: 69. Sqrt(x)
description: leetcode 69. Sqrt(x)
date: 2021-01-11
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 69. Sqrt(x)](https://leetcode.com/problems/sqrtx/)

---
### Problem: <br/>

Given a non-negative integer `x`, compute and return the square root of `x`.

Since the return type is an integer, the decimal digits are **truncated**, and only **the integer part** of the result is returned.


#### Example 1:
    Input: x = 4
    Output: 2

#### Example 2:
    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


#### Constraints:

- 0 <= x <= 2<sup>31</sup> - 1


---
### Solution: <br/>

A variation of Binary Search. What we need is to find the `upper_bound`. The upper_bound is the first number greater than the target value, and it can be transformed to find the last number not greater than the target value. Therefore, when the square of `m` is greater than the target, the right pointer will be `m-1` since it is the close interval this time. Finally, what we return is the right pointer, which square is first the integer not greater than the target. The case with 0 as input should be handled. The first left pointer is set to 1 because the while loop won't be triggered at this time.


Time complexity: $O(logn)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def mySqrt(self, a: int) -> int:
        l ,r = 1, a 
        while l <= r: 
            m = l + (r - l )// 2
            if m**2 > a:
                r = m - 1
            else:
                l = m + 1
        return r 
```

#### Java
```java
class Solution {
    public int mySqrt(int x) {
        int l = 1, r = x ;
        while(l <= r) {
            int m = l + (r - l)/2;
            if (m > x/m) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return r;
    }
}
```

<Disqus shortname="patricksudo" />