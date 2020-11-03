---
title: 1152. Analyze User Website Visit Pattern
date: 2020-09-16
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Hash Table
  - Sort
categories:
  - LeetCode
---
[1152. Analyze User Website Visit Pattern](https://leetcode.com/problems/analyze-user-website-visit-pattern/)

---
**Problem:** <br/>

We are given some website visits: the user with name username[i] visited the website website[i] at time timestamp[i].

A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits.  (The websites in a 3-sequence are not necessarily distinct.)

Find the 3-sequence visited by the largest number of users. If there is more than one solution, return the lexicographically smallest such 3-sequence.

Example 1:

Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"] </br>
Output: ["home","about","career"]</br>
Explanation: </br>
The tuples in this example are:</br>
["joe", 1, "home"]</br>
["joe", 2, "about"]</br>
["joe", 3, "career"]</br>
["james", 4, "home"]</br>
["james", 5, "cart"]</br>
["james", 6, "maps"]</br>
["james", 7, "home"]</br>
["mary", 8, "home"]</br>
["mary", 9, "about"]</br>
["mary", 10, "career"]</br>
The 3-sequence ("home", "about", "career") was visited at least once by 2 users.</br>
The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.</br>
The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.</br>
The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.</br>
The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.</br>

Note:

1. 3 <= N = username.length = timestamp.length = website.length <= 50
2. 1 <= username[i].length <= 10
3. 0 <= timestamp[i] <= 10^9
4. 1 <= website[i].length <= 10
5. Both username[i] and website[i] contain only lowercase characters.
6. It is guaranteed that there is at least one user who visited at least 3 websites.
7. No user visits two websites at the same time.

---
**Solution:** <br/>

First of all, it is not difficult to think of a brute force solution to this problem. We can sort the elements of [username,timestamp,website] in this way and ensure that all websites with the same user name are arranged together according to timestamp. We will have a dictionary with user name as the key, and the value is the websites he visited according to timestamp.Then we can enumerate the combinations of websites visited by user with the same name. By using itertools.combinations it can be achieve concisely. The next step is to create a dictionary and add people from the same website combination, and collections.Counter will count number of each set. In the end, we only need to sort by the number of people in all website combinations by number of visiting people. 

Time $O(n^2)$ (not sure)</br>
Space $O(n)$

```python
#code inspired by lee215
class Solution:
    def mostVisitedPattern(self, username: List[str], timestamp: List[int], website: List[str]) -> List[str]:
        user = collections.defaultdict(list)
        #Add the website viewed by each user by time sequence
        for t,u,w in sorted(zip(timestamp, username, website)):
            user[u].append(w)
        
        cnt = collections.Counter()
        for v in user.values():
            #choose 3 as one set from the websites viewed by each user
            cnt += Counter(set(itertools.combinations(v, 3)))
            
        return min(cnt, key = lambda k: (-cnt[k],k))
```
<Disqus shortname="patricksudo" />
