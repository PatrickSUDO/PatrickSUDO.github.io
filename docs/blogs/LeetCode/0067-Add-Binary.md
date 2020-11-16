---
title: 67. Add Binary
description: leetcode 67. Add Binary
date: 2020-11-16
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Math
  - String
categories:
  - LeetCode
---
[LeetCode 0067. Add Binary](https://leetcode.com/problems/add-binary/)

---
### Problem: <br/>

Given two binary strings **a** and **b**, return their sum as a binary string.

#### Example 1:

    Input: a = "11", b = "1"
    Output: "100"

#### Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"


#### Constraints:
- 1 <= a.length, b.length <= 10<sup>4</sup>
- a and b consist only of '0' or '1' characters.
- Each string does not contain leading zeros except for the zero itself.

---
### Solution: <br/>
Using Java, we can use StringBuilder to concatenate the string easily. We iterate through both strings, do the summation one by one, and record the carry added in the next iteration.

In Python, there is an easier way, but a sort of cheating. We can convert to integer and do the summation in decimal, then using bin() to convert it to back binary.

Time complexity: $O(max(m,n))$</br>
Space complexity: $O(max(m,n))$ 
</br>
</br>

#### Java
```java
class Solution {
    public  String addBinary(String a, String b) {
        StringBuilder sb = new StringBuilder();
        int i = a.length() - 1, j = b.length() - 1, carry = 0;
        while (i >= 0 || j >= 0) {
            int sum = carry;
            if (i >= 0) sum += a.charAt(i--) - '0';
            if (j >= 0) sum += b.charAt(j--) - '0';
            sb.append(sum % 2);
            carry = sum / 2;
        }
        if (carry != 0) sb.append(carry);
        return sb.reverse().toString();
    }
}
```
#### Python
```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a,2)+int(b,2))[2:]
```
<Disqus shortname="patricksudo" />