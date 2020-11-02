---
title: 0763. Partition Labels
date: 2020-09-14
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Two Pointers
  - Greedy
categories:
  - LeetCode
---
[LeetCode 0763. Partition Labels](https://leetcode.com/problems/partition-labels/)

---
**Problem:** <br/>

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.


---
**Solution:** <br/>
In the beginning, the rightmost position of all letter must be recorded with a hash table. Then traverse the letters from the beginning, the left and right pointers start from zero. Next, record the rightmost position among all the letters encountered, and update it from time to time. When the current position has reached the point of the rightmost position of the word in the interval, it means that the interval has ended and cannot be continued. Record the length of the interval and place the left pointer at the next position.

Time $O(n)$  <br />
Space $O(n)$


```python
class Solution:
    def partitionLabels(self, S: str) -> List[int]:
        rightmost = {c: i for i,c in enumerate(S)}
        l, r = 0, 0
        ans = []
        for i, c in enumerate(S):
            # The rightmost position of the letter in the interval we visited so far
            r = max(r, rightmost[c])
            if i == r:
                ans.append(r - l + 1)
                l = i + 1
        return ans
                
```
<Disqus shortname="patricksudo" />