---
title: 14. Longest Common Prefix
description: leetcode 14. Longest Common Prefix
date: 2020-10-24
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - String
categories:
  - LeetCode
---
[LeetCode 0014. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

---
### Problem: 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


#### Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"

#### Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

#### Constraints:

- 0 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lower-case English letters.
---
### Solution:
The most intuitive idea is to compare each character in the same position, which is brute force.
If they are the same, continue to compare the next. If the characters are different, stop, and output the result.
But traversing all the characters in the same position each time can be expensive.
We take the first string as a common prefix (named pre).
Next, we use the remaining strings to check whether this pre is its prefix, and if so, check the next one.
If not, delete the end of pre and check again.  We can quickly shorter the prefix once there is a big difference in a string.

Time complexity: $O(kn^2)$ </br>
The worst case running time $O(kn^2)$, where k is the # of strings, and n the max length of string, because of the while loop. And indexOf cost $O(kn)$ as well.</br>
Space complexity: $O(1)$
</br>
</br>

#### Java
```Java
public class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs == null || strs.length == 0)return "";
        String pre = strs[0];
        for (int i = 1; i < strs.length; i ++){
            //We can only have the prefix if the substring start from index 0
            while(strs[i].indexOf(pre) != 0)
                pre = pre.substring(0, pre.length() - 1);
        }
        return pre;
    }
}
```

In Python, we can directly find the maximum and minimum of the string, something like sorting them lexicographically. Time complexity becomes $O(kn)$. In this way, we only check the max string, if max string satisfies the prefix condition, then other strings must do so.


#### Python
```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs: return ""
        s1 = min(strs)
        s2 = max(strs)
        for i,c in enumerate(s1):
            if c != s2[i]:
                return s1[:i]
        return s1
```
<Disqus shortname="patricksudo" />
