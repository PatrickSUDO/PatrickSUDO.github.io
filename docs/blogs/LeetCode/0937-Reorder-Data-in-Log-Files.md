---
title: 0937. Reorder Data in Log Files
date: 2020-09-12
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Sort
  - String
categories:
  - LeetCode
---
[LeetCode 0937. Reorder Data in Log Files](https://leetcode.com/problems/reorder-data-in-log-files/)

---
**Problem:** <br/>
You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 

Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.

---
**Solution:** <br/>
I could not understand the question at first glance to be honest. What we need to do is to separate the id and payload first. If the beginning of payload is a letter, put it on the first and sort. If tie, check the id_. After sorting, we can start to consider the case which starts from digit.

To implement in Python, we can use key in sorted function to customized the sorting criteria, so we need a helper function.
In the function we set the first element of tuple as 0 when it's a letter log. Sorting will be ascending so 0 will be put in the first place. Then it compare the payload and id_.

Alternatively, lambda in Python can used, but you need to sort 2 times. 

Time $O(nlogn)$ </br>
Space $O(n)$


```python
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        def order(s):
            id_, payload = s.split(' ', 1)
            if payload[0].isalpha():
                return (0, payload, id_)
            else:
                return (1, None, None)
        
        return sorted(logs ,key=order)
```

```python
class Solution:
    def reorderLogFiles(self, logs):
        digits = []
        letters = []
        for log in logs:
            if log.split()[1].isdigit():
                digits.append(log)
            else:
                letters.append(log)
                
        letters.sort(key = lambda x: x.split()[1]) 
        letters.sort(key = lambda x: x.split()[1:]) 
        result = letters + digits        
        return result
```
<Disqus shortname="patricksudo" />
