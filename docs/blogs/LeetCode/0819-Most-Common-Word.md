---
title: 819. Most Common Word
description: leetcode 819. Most Common Word
date: 2020-09-10
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - String
  - Hash Table
categories:
  - LeetCode
---
[LeetCode 0819. Most Common Word](https://leetcode.com/problems/most-common-word/)

---
**Problem:** <br/>

Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

Example:

Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
 

Note:

1 <= paragraph.length <= 1000.
0 <= banned.length <= 100.
1 <= banned[i].length <= 10.
The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.

---
**Solution:** <br/>
Counting the frequency means hash table is your good friend. However, first we need to remove the punctuations. Regular expression can help us. **re.sub(r'[^\w\s]',"",words)** came into my mind at the first place, but the output is still a string which is harder to process than the list. So **re.findall** cna be a better way.
Then, using Counter to calculate all the frequency of each elements, and those in the dictionary should not be in the banned list. To check the word is banned or not in $O(1)$ time complexity, we can use set to do it. Finally, using key attribute to find the max based on the value of dictionary.

Let n be the number of characters in the input string and m be the number of characters in the banned list.

Time $O(n+m)$  <br />
Space $O(n+m)$


```python
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        bannedSet = set(banned)
        words = re.findall(r'\w+', paragraph.lower())
        counts = collections.Counter(w for w in words if w not in bannedSet)
        return max(counts, key=counts.get)
```
<Disqus shortname="patricksudo" />
