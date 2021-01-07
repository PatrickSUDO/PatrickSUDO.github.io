---
title: 129. Sum Root to Leaf Numbers
description: leetcode 129. Sum Root to Leaf Numbers
date: 2021-01-06
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
  - DFS
categories:
  - LeetCode
---
[LeetCode 0129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

---
### Problem: <br/>

Given a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Find the total sum of all root-to-leaf numbers.

**Note:** A leaf is a node with no children.


#### Example 1:
    Input: [1,2,3]
      1
     / \
    2   3
    Output: 25
    Explanation:
    The root-to-leaf path 1->2 represents the number 12.
    The root-to-leaf path 1->3 represents the number 13.
    Therefore, sum = 12 + 13 = 25.

#### Example 2:
    Input: [4,9,0,5,1]
        4
       / \
      9   0
     / \
    5   1
    Output: 1026
    Explanation:
    The root-to-leaf path 4->9->5 represents the number 495.
    The root-to-leaf path 4->9->1 represents the number 491.
    The root-to-leaf path 4->0 represents the number 40.
    Therefore, sum = 495 + 491 + 40 = 1026.
---
### Solution: <br/>

A typical DFS question. When the node is null, we exit the recursion. We define the leaf node(both left and right children are null) as termination criteria. We add teh current summation to the `ans` when this condition meets. 
Then, we add the value of the current node to the current sum. It will pass into the next recursion with one digit shift. That is, we multiple the value by 10.

Time complexity: $O(n)$</br>
Space complexity: $O(h)$ 
</br>
</br>

#### Python
```python
class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        if not root: return 0
        num, ans = 0, [0]
        self.dfs(root, num, ans)
        return ans[0]
    def dfs(self, root, num, ans):
        if not root: return
        num = 10*num + root.val
        if root.left or root.right:
            self.dfs(root.left, num, ans)
            self.dfs(root.right, num, ans)
        else:
            ans[0] += num
```

#### Java
```java
class Solution {
    int ans = 0;
    public int sumNumbers(TreeNode root) {
        dfs(root, 0);
        return ans;
    }

    private void dfs(TreeNode root, int curr) {
        if (root == null) return;
        curr += root.val;
        if (root.left == null && root.right == null) {
            ans += curr;
            return;
        }
        dfs(root.left, curr * 10);
        dfs(root.right, curr * 10);
        
    }
}
```

<Disqus shortname="patricksudo" />