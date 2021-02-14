---
title: 340. Longest Substring with At Most K Distinct Characters
description: leetcode 340. Longest Substring with At Most K Distinct Characters
date: 2021-01-26
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Hash Table 
  - Two Pointers
  - Sliding Window
categories:
  - LeetCode
---
[LeetCode 340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)

---
**Problem:** <br/>

Given a string `s` and an integer `k`, return the length of the longest substring of `s` that contains at most `k` **distinct** characters.


#### Example 1:

    Input: s = "eceba", k = 2
    Output: 3
    Explanation: The substring is "ece" with length 3.

#### Example 2:

    Input: s = "aa", k = 1
    Output: 2
    Explanation: The substring is "aa" with length 2.


#### Constraints:

- 1 <= s.length <= 5 * 104
- 0 <= k <= 50

---
**Solution:** <br/>

We can use sliding windows to get the sub-array. Also, hash table can be used to count the number of the distinct characters. 

When the hash table's size is larger than `K`, we have to start from `l` to `r` and delete the `s[l]` in the hash table until its size is equal to `K`.  When the frequency of an character in the hash table is equal to 0, then the key should be deleted.  Also, we keep accumulating the number of intervals `r-l+1` (because `[l,r]` can be split into `r-l+1` intervals ending in `s[r]`).

Time complexity: $O(n)$</br>
Space complexity: $O(K)$ 
</br>
</br>

In python, `defaultdict(int)` can be use to count the frequency of character.

#### Python
```python
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        cache = collections.defaultdict(int)
        n = len(s)
        l, r = 0, 0
        ans = 0 
        for r in range(n):
            cache[s[r]] += 1
            while len(cache) > 2:
                cache[s[l]] -= 1
                if cache[s[l]] == 0:
                    del cache[s[l]]
                l += 1
            ans = max(ans, r - l + 1)
        return ans
```

Array can be used instead of hashmap to increase performance since the amount of characters is limited.

#### Java
```java
class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        int n = s.length(), l = 0, ans = 0;
        Map<Character, Integer> cache = new HashMap<>();
        for(int r = 0; r < n; r++){
            char curr = s.charAt(r);
            cache.put(curr, cache.getOrDefault(curr, 0) + 1);
            while(cache.size() > k){
                char leftChar = s.charAt(l);
                cache.put(leftChar, cache.get(leftChar) - 1);
                if(cache.get(leftChar) == 0){
                    cache.remove(leftChar);
                }
                l++;
            }
            ans = Math.max(ans, r - l + 1);          
        }
        return ans;
    }
}
```

<Disqus shortname="patricksudo" />