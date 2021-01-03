---
title: 572. Subtree of Another Tree
description: leetcode 572. Subtree of Another Tree
date: 2021-01-03
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree
categories:
  - LeetCode
---
[LeetCode 0572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

---
### Problem: <br/>

Given two **non-empty** binary trees *s* and *t*, check whether tree *t* has exactly the same structure and node values with a subtree of *s*. A subtree of *s* is a tree consists of a node in *s* and all of this node's descendants. The tree *s* could also be considered as a subtree of itself.

#### Example 1:
Given tree s:

         3
        / \
       4   5
      / \
     1   2

Given tree t:

       4 
      / \
     1   2

Return **true**, because t has the same structure and node values with a subtree of s.

#### Example 2:
Given tree s:

         3
        / \
       4   5
      / \
     1   2
        /
       0

Given tree t:

       4
      / \
     1   2

Return **false**.


---
### Solution: <br/>

We recursively check the height level by level in another helper function. The key is to use `-1` to represent the situation when an unbalanced tree occurred. When it starts to unbalance, we should stop the recursion because there is no chance it is balanced.


Time complexity: $O(max(n,m))$</br>
Space complexity: $O(max(n,m))$ 
</br>
</br>

#### Python
```python
class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        if not s and not t: return True
        if not s or not t: return False
        return self.sameTree(s, t) or self.isSubtree(s.left, t) or self.isSubtree(s.right, t) 
    
    def sameTree(self, s, t):
        if not s and not t : return True
        if not s or not t: return False
        return s.val == t.val and self.sameTree(s.left, t.left) and self.sameTree(s.right, t.right)
```

#### Java
```java
class Solution {
    public boolean isSubtree(TreeNode s, TreeNode t) {
        if(s == null && t == null) return true;
        if(s == null || t == null) return false;
        return isSame(s,t) || isSubtree(s.left, t) || isSubtree(s.right, t);
    }
    private boolean isSame(TreeNode s, TreeNode t){
        if(s == null && t == null) return true;
        if(s == null || t == null) return false;
        return s.val == t.val && isSame(s.left, t.left) && isSame(s.right, t.right);
    }
}
```

<Disqus shortname="patricksudo" />