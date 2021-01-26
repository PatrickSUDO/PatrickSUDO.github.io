---
title: 159. Longest Substring with At Most Two Distinct Characters
description: leetcode 159. Longest Substring with At Most Two Distinct Characters
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
[LeetCode 159. Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)

---
**Problem:** <br/>

Given a string **s** , find the length of the longest substring **t**  that contains **at most 2** distinct characters.


#### Example 1:

    Input: "eceba"
    Output: 3
    Explanation: t is "ece" which its length is 3.

#### Example 2:

    Input: "ccaabbb"
    Output: 5
    Explanation: t is "aabbb" which its length is 5.


---
**Solution:** <br/>

We can use sliding windows to get the sub-array. Also, hash table can be used to count the number of the distinct characters. 

When the hash table's size is larger than 2, we have to start from `l` to `r` and delete the `s[l]` in the hash table until its size is equal to 2.  When the frequency of an character in the hash table is equal to 0, then the key should be deleted.  Also, we keep accumulating the number of intervals `r-l+1` (because `[l,r]` can be split into `r-l+1` intervals ending in `s[r]`).

Time complexity: $O(n)$</br>
Space complexity: $O(K)$ 
</br>
</br>

In python, `defaultdict(int)` can be use to count the frequency of character.

#### Python
```python
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        window = collections.defaultdict(int)
        n = len(s)
        l, r = 0, 0
        ans = 0 
        while l < len(s) and r < len(s):
            window[s[r]] = r
            r += 1
            if len(window) > 2:
                oldLeft = min(window, key = window.get)
                leftMost = window[oldLeft]
                l = leftMost + 1
                del window[oldLeft]
            ans = max(ans, r - l) 
        return ans
            
        
```


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