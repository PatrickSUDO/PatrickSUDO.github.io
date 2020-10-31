---
title: 0784. Letter Case Permutation
date: 2020-10-27
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Backtracking
categories:
  - LeetCode
---
[LeetCode 0784. Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)

---
**Problem:** <br/>

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in **any order**.

#### Example 1:

    Input: S = "a1b2"
    Output: ["a1b2","a1B2","A1b2","A1B2"]

#### Example 2:

    Input: S = "3z4"
    Output: ["3z4","3Z4"]

#### Example 3:

    Input: S = "3z4"
    Output: ["3z4","3Z4"]

#### Example 4:

    Input: S = "3z4"
    Output: ["3z4","3Z4"]

#### Constraints:

- S will be a string with length between 1 and 12.
- S will consist only of letters or digits.

---
**Solution:** <br/>

We use DFS to search for all the possibilities. Unlike typical permutation questions, we don't need to record the visited states. We need to build a DFS function to do it recursively. When all the index reaches the total length, we add the current char array into the ans list. If the character is a digit, then we enter another DFS recursion, with i + 1. Or, we change and go to the next DFS.


Time complexity: $O(n*2^l)$, l = # of letters in the string </br>
Space complexity: $O(n*2^l)$ + $O(n)$
</br>
</br>

#### Python
```python
class Solution:
    def letterCasePermutation(self, S: str) -> List[str]:
        ans = []
        def dfs(S, i, n):
            if i == n:
                ans.append("".join(S))
                return
            dfs(S, i+1, n)
            if not S[i].isalpha(): return
            S[i] = chr(ord(S[i]) ^ (1<<5))
            dfs(S, i+1, n)
            S[i] = chr(ord(S[i]) ^ (1<<5))
            
        dfs(list(S), 0, len(S))
        
        return ans 
```
#### Java
```java
class Solution {
    public List<String> letterCasePermutation(String S) {
        if(S == null){
            return new ArrayList<>();
        }
        List<String> ans = new ArrayList<>();
        dfs(S.toCharArray(), 0, ans);
        return ans;
    }
    private void dfs(char[] curr, int i, List<String> ans){
        if (i == curr.length){
            ans.add(new String(curr));
            return;
        }
        if (Character.isDigit(curr[i])){
            dfs(curr, i + 1, ans);
            return;
        }

        // or curr[i] ^= 1 << 5 can be used to change the case
        curr[i] = Character.toLowerCase(curr[i]);
        dfs(curr,i + 1, ans);
        curr[i] = Character.toUpperCase(curr[i]);
        dfs(curr,i + 1, ans);
    }
}
```