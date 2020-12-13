---
title: 131. Palindrome Partitioning
description: leetcode 131. Palindrome Partitioning
date: 2020-12-13
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DFS
  - DP
  - Backtracking
categories:
  - LeetCode
---
[LeetCode 0131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

---
### Problem: <br/>

Given a string `s`, partition s such that every substring of the partition is a **palindrome**. Return all possible palindrome partitioning of `s`.

A **palindrome** string is a string that reads the same backward as forward.

#### Example 1:

    Input: s = "aab"
    Output: [["a","a","b"],["aa","b"]]

#### Example 2:

    Input: s = "a"
    Output: [["a"]]



#### Constraints:

- 1 <= s.length <= 16
- s contains only lowercase English letters.

---
### Solution 1: DP <br/>

DP can be used to record the previous state in the last substring, and we can only consider the latest produced palindrome when an extra character is added. We can have a table to record whether the substring is a palindrome or not when we start from a particular index l and end with another index r. If the current substring on both sides is equal, and when its length is less than two or the last state(shorter substring) is a palindrome, we get a new palindromic substring. 
We then add the newly generated palindromic substring to all the previous partition with the same start and end. Next, add to the next state.
The last state is our answer.

We consider the worst case. All the characters are the same, so the partition combinations will grow exponentially. The time and space complexity is:


Time complexity: $O(2^n)$
Space complexity: $O(2^n)$ 
</br>
</br>

#### Java
```java
class Solution {
    public List<List<String>> partition(String s) {
        int n = s.length();
        List<List<String>>[] ans = new List[n+1];
        ans[0] = new ArrayList<List<String>>();
        ans[0].add(new ArrayList<String>());
        
        boolean[][] dp = new boolean[n][n];
        
        for (int r = 0; r < n; r ++){
            ans[r+1] = new ArrayList<List<String>>();
            for(int l = 0; l <= r; l ++) {
                if (s.charAt(l) == s.charAt(r) && (r - l <= 1 || dp[l+1][r-1])){
                    dp[l][r] = true;
                    String p = s.substring(l, r+1);
                    for(List<String> prev: ans[l]){
                        List<String> curr = new ArrayList<String>(prev);
                        curr.add(p);
                        ans[r+1].add(curr);
                    }
                           
                }
            }
        }
        return ans[n];       
    }
}
```

#### Python
```python
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        n = len(s)
        ans = [[] for _ in range(n+1)]
        ans[0].append([])
        dp = [[0]*n for _ in range(n)] 
        for r in range(n):
            for l in range(r+1):
                if (s[r] == s[l]) and (r - l <= 1 or dp[l+1][r-1]):
                    dp[l][r] = 1
                    p = s[l:r+1]
                    for prev in ans[l]:
                        ans[r+1].append(prev + [p])
        return ans[n]
```


### Solution 2: Backtracking <br/>

We can use the tree with branches to represent the combination of palindromic partition. This method can be more comfortable than the DP on with better speed. First, We need to define a helper function to valid the palindrome. Then, we create a DFS function with backtracking. We all the characters are consumed, we add the current partition state to the answer, and return. Otherwise, we iterate all the possible substring from the current starting point. If it is a valid palindrome, we can continue the recursion with the partition starting from the next character. When this way of partition cannot go deeper, we remove the current and back to the previous one to explore other partitions. 


Time complexity: $O(2^n)$</br>
Space complexity: $O(n)$ 

#### Java
```java
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> ans = new ArrayList<List<String>>();
        List<String> curr = new ArrayList<String>();
        dfs(s, 0, curr, ans);
        return ans;
    }
    private boolean isPalindrome(String s, int l, int r){
        if(l==r) return true;
        while (l < r) {
            if(s.charAt(l) != s.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }
    
    private void dfs(String s, int l, List<String> curr, List<List<String>> ans){
        if (l >= s.length()) {
            ans.add(new ArrayList<String>(curr));
            return;
        } 
        for (int r = l; r < s.length(); r++) {
            if (!isPalindrome(s, l, r)) continue;
            curr.add(s.substring(l, r+1));
            dfs(s, r+1, curr, ans);
            curr.remove(curr.size()-1);   
        }
        return;
    }   
}
```

#### Python
```python
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        def isPalindrome(s, l ,r):
            while l < r:
                if s[l] != s[r]: return False
                l += 1
                r -= 1
            return True

        def dfs(start, curr): 
            n = len(s)
            if start == n:
                ans.append(curr[:])
                return
            for i in range(start, n):
                if not isPalindrome(s, start, i): continue
                curr.append(s[start:i+1])
                dfs(i+1, curr)
                curr.pop()
        ans = []
        curr = []
        dfs(0, curr)
        return ans
```

<Disqus shortname="patricksudo" />