---
title: 93. Restore IP Addresses
description: leetcode 93. Restore IP Addresses
date: 2020-11-22
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - String
  - Backtracking
categories:
  - LeetCode
---
[LeetCode 93. Restore IP Addresses](https://leetcode.com/problems/01-matrix/)

---
### Problem: <br/>

Given a string `s` containing only digits, return all possible valid IP addresses that can be obtained from `s`. You can return them in **any** order.

A **valid IP address** consists of exactly four integers, each integer is between `0` and `255`, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are **valid** IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are **invalid** IP addresses. 

#### Example 1:

    Input: s = "25525511135"
    Output: ["255.255.11.135","255.255.111.35"]

#### Example 2:

    Input: s = "0000"
    Output: ["0.0.0.0"]

#### Example 3:

    Input: s = "1111"
    Output: ["1.1.1.1"]

#### Example 4:

    Input: s = "010010"
    Output: ["0.10.0.10","0.100.1.0"]

#### Example 5:

    Input: s = "101023"
    Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

#### Constraints:

- `0 <= s.length <= 3000`
- `s` consists of digits only.

---
### Solution: <br/>

This problem is the variation of combination or permutation problem. To generate all the possible valid IP address from a string, we find different ways to partition the string. DFS is the method we apply to solve this type of problem. We need to set up the termination condition. There are only 4 segments in a valid IP address. At the same time, we have no remaining characters in the string. We can then append this IP to the answer array. 
According to the rule, each integer in an IP can not exceed 255, so the substring length should be less than 3. However, it may be smaller when we are at the end of the string. If the integer is greater than 0 it should not have redundant 0 at the leftmost of the substring. We need to prune the above possibilities. When we have a valid substring, then append it on the current IP, then put it into the next recursion.


Time complexity: $O(3^4)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        def dfs(s, path, res):
            if len(path) == 4:
                if not s:
                    res.append('.'.join(path))
                return
            for i in range(min(3, len(s))):
                curr = s[: i + 1]
                if (curr[0] == "0" and len(curr) > 1) or int(curr) > 255: return
                dfs(s[i+1: ], path + [s[:i+1]], res)
   
        path = []
        res = [] 
        dfs(s, path, res)
        return res
```

#### Java
```java
class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> ans = new ArrayList<>();
        dfs(s, "", ans, 0);
        return ans;
    }
    private void dfs(String s, String curr, List<String> ans, int d){
        int l = s.length();
        if(d == 4){
            if(l == 0) ans.add(curr);
            return;
        }
        for(int i = 1; i <= Math.min(3, l); i++){
            if(i > l) continue;
            String temp = s.substring(0, i);
            int val = Integer.parseInt(temp);
            if(val > 255 || (temp.length() > 1 && temp.charAt(0) == '0')) return;
            dfs(s.substring(i), curr + (d == 0? "":".") + temp, ans, d+1);
        }
    }
}
```
<Disqus shortname="patricksudo" />