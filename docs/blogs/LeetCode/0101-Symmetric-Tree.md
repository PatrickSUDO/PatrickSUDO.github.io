---
title: 101. Symmetric Tree
description: leetcode 101. Symmetric Tree
date: 2021-1-2
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree
  - DFS
  - BFS
categories:
  - LeetCode
---
[LeetCode 0101. Symmetric Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)

---
### Problem: <br/>

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:

        1
       / \
      2   2
     / \ / \
    3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

        1
       / \
      2   2
       \   \
       3    3

**Follow up:** Solve it both recursively and iteratively.


---
### Solution: <br/>

Recursion solution is easier. We need to build a helper function first. If both trees are null, they are symmetric, and if one is null and the other is not, it cannot be symmetric. Then, we inspect the value of the root nodes. If the root nodes are the same, we keep checking two pairs: left-left node and right-right node, left-right node, and right-left node. All of them should be true so that we can have an asymmetric tree.

Time complexity: $O(n)$</br>
Space complexity: $O(n))$ 
</br>
</br>

#### Recursive

#### Python
```python
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root: return True
        return self.sym_check(root.left, root.right)
    
    def sym_check(self, l: TreeNode, r: TreeNode) -> bool:
        if not l and not r: return True
        if not l or not r: return False
        if l.val != r.val: return False
        return self.sym_check(l.left, r.right) and self.sym_check(l.right, r.left)
```

#### Java
```java
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if(root == null) return true;
        return checkSym(root.left, root.right);
    }
    private boolean checkSym(TreeNode l, TreeNode r){
        if (l == null && r == null) return true;
        if (l == null || r == null) return false;
        return l.val == r.val && checkSym(l.left, r.right) && checkSym(l.right, r.left);
    }
}
```

#### Iterative

We can use `Queue` to do it recursively. We push the pair as above in the queue. Then inspect the pair one by one.

#### Python
```python
from collections import deque
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root: return True
        q = deque()
        q.append((root.left, root.right))
        while q:
            l, r = q.popleft()
            if not l and not r:
                continue
            if l and r and l.val==r.val:
                q.append((l.left, r.right))
                q.append((r.left,l.right))
            else:
                return False
        return True
    
```

#### Java

```java
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        Queue<TreeNode[]> q = new LinkedList<>();
        q.add(new TreeNode[]{root.left, root.right});
        while (!q.isEmpty()) {
            TreeNode[] children = q.poll();
            TreeNode l =  children[0];
            TreeNode r =  children[1];
            if(l == null && r == null) continue;
            if(l != null && r != null &&  l.val == r.val) {
                q.add(new TreeNode[]{l.left, r.right});
                q.add(new TreeNode[]{l.right, r.left});
            } else {
                return false;
            }
        }
        return true;
    }
}
```

<Disqus shortname="patricksudo" />