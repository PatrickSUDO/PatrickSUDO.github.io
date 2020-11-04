---
title: 83. Remove Duplicates from Sorted List
description: leetcode 83. Remove Duplicates from Sorted List
date: 2020-10-27
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Linked List
categories:
  - LeetCode
---
[LeetCode 0083. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

---
**Problem:** <br/>

Given a sorted linked list, delete all duplicates such that each element appear only once.

#### Example 1:

    Input: 1->1->2
    Output: 1->2

#### Example 2:

    Input: 1->1->2->3->3
    Output: 1->2->3


---
**Solution:** <br/>

We know that the given linked list is sorted. So, the duplicates element must be adjacent to each other, and we need to keep the first one. We traverse the linked list if the node is not null, and then we record the next node to see if it is duplicate. We enter another while loop to skip all the duplicate nodes until we meet another unique node. Finally, we connect the current node to the node next to the duplicated one and move the current node pointer to the next position. If we don't meet the duplicate node, we won't enter into the while loop, and no node will be skipped.


Time complexity: $O(n)$ </br>
Space complexity: $O(1)$
</br>
</br>

#### Python
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        ite = head 
        while ite:
            tmp=ite.next
            while tmp and tmp.val == ite.val:
                tmp=tmp.next
            ite.next = tmp
            ite=ite.next
        return head
```
#### Java
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode curr = head;
        while (curr != null){
            ListNode nxt = curr.next;
            while(nxt != null && nxt.val == curr.val){
                nxt = nxt.next;
            }
            curr.next = nxt;
            curr = curr.next;
        }
        return head;
    }
}
```
<Disqus shortname="patricksudo" />