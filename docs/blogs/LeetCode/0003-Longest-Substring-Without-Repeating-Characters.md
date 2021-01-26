---
title: 3. Longest Substring Without Repeating Characters
description: leetcode 3. Longest Substring Without Repeating Characters
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
[LeetCode 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/subarrays-with-k-different-integers/)

---
**Problem:** <br/>

Given a string `s`, find the length of the **longest substring** without repeating characters.


#### Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

#### Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

#### Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

#### Example 4:

    Input: s = ""
    Output: 0

#### Constraints:

- 0 <= s.length <= 5 * 10<sup>4</sup>
- `s` consists of English letters, digits, symbols and spaces.

---
**Solution:** <br/>

Intuitively, this problem can use the sliding window to maintain the substring with distinct characters. Set can be used to make sure there are no duplicate characters.  We keep traversing the string with the right pointer if the current character is in the set, which means we can gradually reduce the substring's length until there is no duplicate character. Simultaneously, the character removed from the substring should be dropped from the set, too.

Also, the `ans` should be updated for every iteration as the length of the current substring.

Time complexity: $O(n)$</br>
Space complexity: $O(K)$ K is teh size of hashmap
</br>
</br>


#### Python
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s: return 0
        l, r = 0, 0
        words = set()
        ans = 0
        while l < len(s) and r < len(s):
            if s[r] not in words:
                words.add(s[r])
                r += 1
            else:
                if s[l] in words:
                    words.remove(s[l])
                l += 1                
            ans = max(ans, len(words))
        return ans
```

For further optimization, a hash table can be used to record the rightmost index of a specific character. Therefore, when dropping the duplicate character, we can jump to the index where the substring contains no duplicate character.

#### Python
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s: return 0
        l, r = 0, 0
        words = {}
        ans = 0
        for r in range(len(s)):
            if s[r] in words:
                l = max(l, words[s[r]] + 1)
            words[s[r]] = r
            ans = max(ans, r - l + 1)
        return ans
```

#### Java
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.length() == 0) return 0;
        int l = 0, n = s.length(), ans = 0;
        Map<Character, Integer> cache = new HashMap<>();
        for(int r = 0; r < n; r++){
            char curr = s.charAt(r);
            if(cache.containsKey(curr)){
                l = Math.max(l, cache.get(curr) + 1);
            }
            cache.put(s.charAt(r), r);
            ans = Math.max(ans, r - l + 1);
        }
        return ans;
            
    }
}
```

<Disqus shortname="patricksudo" />