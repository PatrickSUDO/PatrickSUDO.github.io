---
title: 242. Valid Anagram
description: leetcode 242. Valid Anagram
date: 2020-11-02
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Hast Table
categories:
  - LeetCode
---
[LeetCode 0242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

---
**Problem:** <br/>

Given two strings s and t , write a function to determine if t is an anagram of s.

#### Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true

#### Example 2:

    Input: s = "rat", t = "car"
    Output: false


#### Note:
You may assume the string contains only lowercase alphabets.

#### Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

---
**Solution:** <br/>
To verify the anagram, we need to count the frequency of every unique character. Therefore, hash table is a good choice here. The key is the character in the string , and the value is frequency. In Python, a special dictionary **collections.Counter()** can be used to solve it quickly. Whereas in java we can use Hashmap, or even easier way is using an array containing 26 alphabetical character with counting. We add the counter, when a character is found, minus it when this character is also found in another word. If it is an anagram, all the counter will be 0.



Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        from collections import Counter
        return Counter(s) == Counter(t)
```


#### Java
```java
class Solution {
    private class Counter{
        Map<Character, Integer> counter = new HashMap<>();
        public Counter(String s) {
            for(int i = 0; i < s.length(); i ++){
                if (!counter.containsKey(s.charAt(i))){
                    counter.put(s.charAt(i), 0);
                } else {
                    counter.merge(s.charAt(i), 1, Integer::sum);
                }
            }
        }
    }

    public boolean isAnagram(String s, String t) {
        return new Counter(s).equals(new Counter(t));
    }
}
```

Faster way inspired by xhadfasd. 
```java
public class Solution {
    public boolean isAnagram(String s, String t) {
        int[] alphabet = new int[26];
        for (int i = 0; i < s.length(); i++) alphabet[s.charAt(i) - 'a']++;
        for (int i = 0; i < t.length(); i++) alphabet[t.charAt(i) - 'a']--;
        for (int i : alphabet) if (i != 0) return false;
        return true;
    }
}
```
<Disqus shortname="patricksudo" />