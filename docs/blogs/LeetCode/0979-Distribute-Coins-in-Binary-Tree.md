---
title: 979. Distribute Coins in Binary Tree
description: leetcode 979. Distribute Coins in Binary Tree   
date: 2021-01-07
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
categories:
  - LeetCode
---
[LeetCode 0979. Distribute Coins in Binary Tree](https://leetcode.com/problems/distribute-coins-in-binary-tree/)

---
### Problem: <br/>

You are given the `root` of a binary tree with n nodes where each `node` in the tree has `node.val` coins and there are `n` coins total.

In one move, we may choose two adjacent nodes and move one coin from one node to another. (A move may be from parent to child, or from child to parent.)

Return the number of moves required to make every node have exactly one coin.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/ex1.jpg" style="width: 571px; height: 302px;">
    Input: root = [3,0,0]
    Output: 2
    Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/18/tree2.png" style="width: 150px; height: 142px;">
    Input: root = [0,3,0]
    Output: 3
    Explanation: From the left child of the root, we move two coins to the root [taking two moves].  Then, we move one coin from the root of the tree to the right child.

#### Example 3:
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/18/tree3.png" style="width: 150px; height: 142px;">
    Input: root = [1,0,2]
    Output: 2

#### Example 4:
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/18/tree4.png" style="width: 155px; height: 156px;">
    Input: root = [1,0,0,null,3]
    Output: 4

#### Constraints:

- The number of nodes in the tree is n.
- 1 <= n <= 100
- 0 <= Node.val <= n
- The sum of Node.val is n.

---
### Solution: <br/>

We define a helper function to return the balance of the root node. The root node manages the balances of both child nodes. Also, the root node takes one coin, so its value should - 1. In other words, every movement of coins should go via the root node. No matter the balance is positive or negative, it should go through the root node. Therefore, the number of moves is the sum of the absolute value of both children's balance.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def distributeCoins(self, root: TreeNode) -> int:
        self.ans = 0
        self.balance(root, self.ans)
        return self.ans
    def balance(self, root, ans):
        if not root: return 0
        l = self.balance(root.left, self.ans) 
        r = self.balance(root.right, self.ans) 
        self.ans += abs(l) + abs(r)
        return l + r + root.val -1
```


#### Java
```java
class Solution {
    int ans = 0;
    public int distributeCoins(TreeNode root) {
        balance(root);
        return ans;
    }
    private int balance(TreeNode root){
        if(root == null) return 0;
        int l = balance(root.left);
        int r = balance(root.right);
        ans += Math.abs(l) + Math.abs(r);
        return root.val - 1 + l + r;
    }
}
```

<Disqus shortname="patricksudo" />