---
title: 24. Swap Nodes in Pairs
description: leetcode 24. Swap Nodes in Pairs
date: 2020-12-29
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Linked List
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 0024. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

---
### Problem: <br/>

Given a linked list, swap every two adjacent nodes and return its head.

You may **not** modify the values in the list's nodes. Only nodes itself may be changed.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg" style="width: 422px; height: 222px;">

    Input: head = [1,2,3,4]
    Output: [2,1,4,3]

#### Example 2:

    Input: head = []
    Output: []

#### Example 3:

    Input: head = [1]
    Output: [1]



#### Constraints:

- The number of nodes in the list is in the range `[0, 100]`.
- `0 <= Node.val <= 100`
---
### Solution: <br/>
This question is similar to fast and slow pointers. The dummy node should be created first. The dummy points to the current head, and put the pointer of dummy to the head.
We enter the loop (current starting point is dummy). The condition is that neither the next nor the next can be empty,

The slow pointer node points to the next node of the current fast pointer. Because of the swap, the current fast pointer should point back to the slow one. The current fast pointer is swapped to a place closer to the beginning. Then, the fast point should be pointed by the head. Finally, set the head pointer to the position of the slow pointer. 

Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        dummy = ListNode(0)
        dummy.next = head
        head = dummy
        while head.next and head.next.next:
            slow, fast = head.next, head.next.next
            slow.next = fast.next
            fast.next = slow
            head.next = fast
            head = slow
        return dummy.next
```

#### Java
```java
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        head = dummy;
        while(head.next != null && head.next.next != null){
            ListNode fast = head.next.next;
            ListNode slow = head.next;
            head.next = fast;
            slow.next = fast.next;
            fast.next = slow;
            head = slow;
        }
        return dummy.next;
    }
}


```
<Disqus shortname="patricksudo" />