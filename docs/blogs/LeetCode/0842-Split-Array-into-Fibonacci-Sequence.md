---
title: 842. Split Array into Fibonacci Sequence
description: leetcode 842. Split Array into Fibonacci Sequence
date: 2020-12-29
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Backtracking
  - DFS
categories:
  - LeetCode
---
[LeetCode 0241. Different Ways to Add Parentheses](https://leetcode.com/problems/split-array-into-fibonacci-sequence/)

---
### Problem: <br/>

Given a string S of digits, such as `S = "123456579"`, we can split it into a Fibonacci-like sequence `[123, 456, 579]`.

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

- `0 <= F[i] <= 2^31 - 1`, (that is, each integer fits a 32-bit signed integer type);
- `F.length >= 3`;
- and `F[i] + F[i+1] = F[i+2]` for all `0 <= i < F.length - 2`.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from `S`, or return `[]` if it cannot be done.

#### Example 1:

    Input: "123456579"
    Output: [123,456,579]

#### Example 2:

    Input: "11235813"
    Output: [1,1,2,3,5,8,13]

#### Example 3:

    Input: "112358130"
    Output: []
    Explanation: The task is impossible.

#### Example 4:

    Input: "0123"
    Output: []
    Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.

#### Example 5:

    Input: "1101111"
    Output: [110, 1, 111]
    Explanation: The output [11, 0, 11, 11] would also be accepted.

#### Note:
1. `1 <= S.length <= 200`
2. `S` contains only digits.
---
### Solution: <br/>
DFS can solve this partitioning problem with backtracking. The condition of the Fibonacci Series can be satisfied if the length is greater than 2. Also, the number cannot overflow the integer's size ($(2^31)$). Furthermore, the sum of the last two elements is equal to the current element. What we do is recursively inspect different possible substrings. If the current starting position is at the end of the string and the length is legal, we add this integer to our answer. Or, we start to iterate through different possible partitions. Some pruning should be done.
Zero cannot exist without any number. Otherwise, the string cannot convert to an integer. If the number exceeds the capacity of the integer, we break the whole loop.

 If the length is greater or equal to 2, two conditions need to be pruned. First, if the last two items' summation is larger than the current number, it may still be used when the current number gets additional digits. Second, suppose the previous two items' summation is smaller than the current number. In that case, the summation has no chance to be equal to the current number without altering previous items' digits. So, the loop should break. If we get a valid Fibonacci sequence, then we keep checking the next number. If an invalid series appears, we return to the previous state(backtracking).

Time complexity: $O(2^n)$</br>
Space complexity: $O(n)$ (if all 0 , the worst case is $O(n)$, or it is $O(log n)$)
</br>
</br>


#### Python
```python
class Solution:
    def splitIntoFibonacci(self, S: str) -> List[int]:
        
        def dfs(pos, path, ans):
            n = len(S)
            if pos == n and len(path) >= 3: 
                ans.extend(path[:])
                return True
            

            for i in range(pos, len(S)):
              
                curr = S[pos:i+1]
                if (curr[0] == '0' and len(curr) != 1): continue
                if int(curr) >= 2**31: break
                if len(path) >= 2:
                    _sum = path[-1] + path[-2]
                    if int(curr) > _sum: break
                    if int(curr) < _sum: continue
                path.append(int(curr))
                if dfs(i+1, path, ans): return True
                path.pop()
            return False
        ans = []
        path = []
        dfs(0, path, ans)
        return ans
```

#### Java
```java
class Solution {
    public List<Integer> splitIntoFibonacci(String S) {
        List<Integer> ans = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        dfs(S, 0, path, ans);
        return ans;
    }

    private boolean dfs(String S, int start, List<Integer> path, List<Integer> ans){
        if (start == S.length() && path.size() >= 3 ){
            ans.addAll(new ArrayList<>(path));
            return true;
        }

        for(int i = start; i < S.length(); i ++) {
            String curr = S.substring(start, i+1);
            //if it is 0 and not single, it cannot be Fibonacci
            if(curr.charAt(0) == '0' && curr.length() != 1) continue;
            long currInt = Long.parseLong(curr);
            if(currInt >= Math.pow(2,31)) break;
            int n = path.size();
            if(n >= 2){
                int _sum = path.get(n - 1) + path.get(n - 2);
                if(_sum < currInt) break;
                if(_sum > currInt) continue;
            }
            path.add((int)currInt);
            if (dfs(S, i+1, path, ans)) return true;
            path.remove(path.size()-1);
        }
    return false;
    }
}
```
<Disqus shortname="patricksudo" />