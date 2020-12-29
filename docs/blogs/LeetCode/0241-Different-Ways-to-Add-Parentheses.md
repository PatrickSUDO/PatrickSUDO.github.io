---
title: 241. Different Ways to Add Parentheses
description: leetcode 241. Different Ways to Add Parentheses
date: 2020-12-29
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Divide and Conquer
  - DFS
categories:
  - LeetCode
---
[LeetCode 0241. Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)

---
### Problem: <br/>

Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are `+`, - and `*`.

#### Example 1:

    Input: "2-1-1"
    Output: [0, 2]
    Explanation: 
    ((2-1)-1) = 0 
    (2-(1-1)) = 2

#### Example 2:

    Input: "2*3-4*5"
    Output: [-34, -14, -10, -10, 10]
    Explanation: 
    (2*(3-(4*5))) = -34 
    ((2*3)-(4*5)) = -14 
    ((2*(3-4))*5) = -10 
    (2*((3-4)*5)) = -10 
    (((2*3)-4)*5) = 10


---
### Solution: <br/>
We can think of this question as solve all the Cartesian products of all the possible substrings. The combination of different substrings is shown in the tree diagram. Intuitively, this tree relationship can use recursion to solve, which is similar to the tree traversal problem. We generate all the possible substrings and recursive evaluation of their values. If there is only one string that cannot be evaluated, then the answer is the string's integer version.

<a href="https://imgur.com/NAycfHh"><img src="https://i.imgur.com/NAycfHh.png?1" title="source: imgur.com" /></a>

The time complexity in the question is a little bit complicated. As we visualize it in a tree, the complexity can be considered the possible configurations of the binary tree with n nodes. 
For example, if n=3 and the total configuration s is f(n):

f(0)=1 <br>
f(1)=1 <br>
f(2)=f(1)f(0)+f(0)f(1) <br>
f(3)=f(2)f(0)+f(1)f(1)+f(0)f(2)

This pattern is similar to this question.
So, f(n) should be $f(n)=\frac{(2n)!}{n!(n+1)!}$

f(n) is the so-called Catalan Number.




Time complexity: $O(Catalan Number)$</br>
Space complexity: $O(Catalan Number)$ 
</br>
</br>

In Python, we can make use of the package operator module to simplify the code.

#### Python
```python
class Solution:
    def diffWaysToCompute(self, input: str) -> List[int]:
        ops = { "+": operator.add, "-": operator.sub , "*":operator.mul}
        ans = []
        for i in range(len(input)):
            if input[i] in "+-*":
                for xWay, yWay in itertools.product(self.diffWaysToCompute(input[:i]),
                self.diffWaysToCompute(input[i+1:])):
                    ans.append(ops[input[i]](xWay, yWay))
        if not ans: ans.append(int(input))
        return ans
```

#### Java
```java
class Solution {
    public List<Integer> diffWaysToCompute(String input) {
        List<Integer> ans = new ArrayList<>();
        for(int i = 0; i < input.length(); i ++){
            char c =input.charAt(i);
            if (c == '+' || c == '-' || c == '*'){
                String x = input.substring(0, i);
                String y = input.substring(i+1);
                List<Integer> xWays = diffWaysToCompute(x);
                List<Integer> yWays = diffWaysToCompute(y);
                for (int xWay: xWays){
                    for (int yWay: yWays){
                        if(c == '+'){
                            ans.add(xWay + yWay);
                        } else if(c == '-') {
                            ans.add(xWay - yWay);
                        } else if(c =='*') {
                            ans.add(xWay * yWay);
                        }
                    }
                }
            }
        }
        if(ans.isEmpty()) ans.add(Integer.parseInt(input));
        return ans;
    }
}
```
<Disqus shortname="patricksudo" />