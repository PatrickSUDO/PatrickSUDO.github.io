---
title: 0138. Copy List with Random Pointer
date: 2020-09-29
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Hash Table
  - Linked List
categories:
  - LeetCode
---
[LeetCode 0138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

---
### Problem: 

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a **deep copy** of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/e1.png" style="width: 700px; height: 142px;">

    Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
    Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]



#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/e2.png" style="width: 700px; height: 114px;">

    Input: head = [[1,1],[2,1]]
    Output: [[1,1],[2,1]]

#### Example 3:
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/e3.png" style="width: 700px; height: 122px;">

    Input: head = [[3,null],[3,0],[3,null]]
    Output: [[3,null],[3,0],[3,null]]

#### Example 4:

    Input: head = []
    Output: []
    Explanation: Given linked list is empty (null pointer), so return null.

#### Constraints:

- -10000 <= Node.val <= 10000
- Node.random is null or pointing to a node in the linked list.
- Number of Nodes will not exceed 1000.


---
### Solution:

The deep copy means you need to traverse through all the elements and copy all th node including their value and pointers. We can copy the value and the normal "next" point in the Linked List first, then copy the "random" pointer. Because after we collect all the nodes, it's easy to check and build the "random" pointer to the other node in the list. We store the node in a hash table. As other Linked List problem, we can have dummy node first.


Time complexity: $O(n)$ </br>
Space complexity: $O(n)$
</br>
</br>

```python
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        dummy = Node(0)
        nodeDict = {}
        newHead, curr = dummy, head
        while curr:
            node = Node(curr.val)
            nodeDict[curr] = node
            newHead.next = node
            newHead = newHead.next
            curr = curr.next
        curr = head
        while curr:
            if curr.random:
                nodeDict[curr].random = nodeDict[curr.random]
            curr = curr.next
        return dummy.next
```
