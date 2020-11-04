---
title: 693. Binary Number with Alternating Bits
description: leetcode 693. Binary Number with Alternating Bits
date: 2020-11-04
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Bit Manipulation
categories:
  - LeetCode
---
[LeetCode 0693. Binary Number with Alternating Bits](https://leetcode.com/problems/binary-number-with-alternating-bits/)

---
### Problem: <br/>

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

#### Example 1:

    Input: n = 5
    Output: true
    Explanation: The binary representation of 5 is: 101

#### Example 2:

    Input: n = 7
    Output: false
    Explanation: The binary representation of 7 is: 111.

#### Example 3:

    Input: n = 11
    Output: false
    Explanation: The binary representation of 11 is: 1011.

#### Example 4:
    Input: n = 10
    Output: true
    Explanation: The binary representation of 10 is: 1010.

#### Example 5:
    Input: n = 3
    Output: false

#### Constraints:

- 1 <= n <= 2<sup>31</sup> - 1

---
### Solution: <br/>
Because the data scale is quite big, the idea may be bit manipulation. We first use XOR to the input without the rightmost bit. If alternating binary bits, all the bits obtained are 1 after this operation. The second step is using the AND operation to determine whether they are all 1.


Time complexity: $O(1)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        n = n ^ (n >> 1)
        return True if (n & (n + 1)) == 0  else False
```

#### Java
```java
class Solution {
    public static boolean hasAlternatingBits(int n) {
        n = n ^ (n >> 1);
        return (n & (n + 1)) == 0 ? true : false;
    }
}
```
<Disqus shortname="patricksudo" />