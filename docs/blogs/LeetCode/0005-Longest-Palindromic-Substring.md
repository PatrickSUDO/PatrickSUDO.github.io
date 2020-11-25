---
title: 5. Longest Palindromic Substring
description: leetcode 5. Longest Palindromic Substring
date: 2020-11-25
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DP
  - String
categories:
  - LeetCode
---
[LeetCode 5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

---
### Problem: <br/>

Given a string `s`, return the longest palindromic substring in `s`.

#### Example 1:

    Input: s = "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.

#### Example 2:

    Input: s = "cbbd"
    Output: "bb"

#### Example 3:

    Input: s = "a"
    Output: "a"

#### Example 4:

    Input: s = "ac"
    Output: "a"

#### Constraints:

- 1 <= s.length <= 1000
- s consist of only digits and English letters (lower-case and/or upper-case),

---
### Solution 1: <br/>

We use the bottom-up DP method. Take the topic `babad` as an example. We fill the table with a cell record of palindrome's validity with a specific start and end.
The row is the ending index, while the column is the starting index.

|    | 0 | 1 | 2 | 3 | 4 |
| -- | -- | -- | -- | -- | -- |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | -- | 1 | 0 | 1 | 0 |
| 2 | -- | -- | 1 | 0 | 0 |
| 3 | -- | -- | -- | 1 | 0 |
| 4 | -- | -- | -- | -- | 1 |


The following conditions can be found:
1. The beginning is equal to the end is a palindrome.
2. If the length is only two words, they must be the same character.
3. If the length is more than two characters, in addition to the same beginning and end, it also meets the condition that the shorter string on both sides is a palindrome. The state transfer function will be dp[start + 1][end-1]. On the table, it is to move one step to the upper right.

After initializing the form, start to traverse and fill the table. If the above conditions are met, fill in 1. If there is a greater palindrome length than before, it will be updated


Time complexity: $O(n^2)$</br>
Space complexity: $O(n^2)$ 
</br>
</br>

#### Python
```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        def getLen(s, l, r):
            while l >= 0 and r < n and s[l] == s[r]:
                l -= 1
                r += 1
            return r - l -1
        start, length, end = 0, 0, 0
        for i in range(n):   
            curr = max(getLen(s, i, i), getLen(s, i, i+1))
            if curr < length: continue
            length = curr
            start = i - (length-1) // 2
            end = start + length
        return s[start: end]
```

#### Java
```java
class Solution {
    public String longestPalindrome(String s) {
        int n  = s.length();
        boolean[] dp = new boolean[n];
        int start = 0, length = 0;
        for(int i = 0; i < n; i ++){
            int curr = Math.max(getLen(s, i, i), getLen(s, i, i+1));
            if(curr <= length) continue;
            length = curr;
            start = i - (curr - 1)/2;
        }
        return s.substring(start, start + length);
    }
    private int getLen(String s, int l, int r){
        while( l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)){
            l --;
            r ++;
        }
        return r - l - 1;
    }
}
```

### Solution 2: <br/>

Expanding the string from the middle can reduce the space complexity to constant. We check the validity and length of each string at a specific middle point. Both odd and even length conditions must be considered. The string index's starting point should be defined by currentIndex - (currLength - 1)/ 2. It can ensure the situation with both odd and even length can have the same starting point if the length is the same.

Time complexity: $O(n^2)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        def getLen(s, l, r):
            while l >= 0 and r < n and s[l] == s[r]:
                l -= 1
                r += 1
            return r - l -1
        start, length, end = 0, 0, 0
        for i in range(n):   
            curr = max(getLen(s, i, i), getLen(s, i, i+1))
            if curr < length: continue
            length = curr
            start = i - (length-1) // 2
            end = start + length
        return s[start: end]
```

#### Java
```java
class Solution {
    public String longestPalindrome(String s) {
        int n  = s.length();
        boolean[] dp = new boolean[n];
        int start = 0, length = 0;
        for(int i = 0; i < n; i ++){
            int curr = Math.max(getLen(s, i, i), getLen(s, i, i+1));
            if(curr <= length) continue;
            length = curr;
            start = i - (curr - 1)/2;
        }
        return s.substring(start, start + length);
    }
    private int getLen(String s, int l, int r){
        while( l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)){
            l --;
            r ++;
        }
        return r - l - 1;
    }
}
```

<Disqus shortname="patricksudo" />