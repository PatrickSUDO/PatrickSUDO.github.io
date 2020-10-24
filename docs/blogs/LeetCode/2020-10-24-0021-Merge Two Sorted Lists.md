---
title: 0021. Merge Two Sorted Lists
date: 2020-10-24
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Linked List
categories:
  - LeetCode
---
[LeetCode 0014. Longest Common Prefix](https://leetcode.com/problems/merge-two-sorted-lists/)

---
### Problem: 

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;"> </br>

    Input: l1 = [1,2,4], l2 = [1,3,4]
    Output: [1,1,2,3,4,4]

#### Example 2:

    Input: l1 = [], l2 = []
    Output: []

#### Example 3:

    Input: l1 = [], l2 = [0]
    Output: [0]

#### Constraints:

- The number of nodes in both lists is in the range [0, 50].
- -100 <= Node.val <= 100
- Both l1 and l2 are sorted in non-decreasing order.
---
### Solution:
This is a part of merge sort. The concept is  you iterate through both list and extract the one with smaller head. Next, connect the head to the current node of new list. Then move forward to the next elements for both old and new lists. Finally, there will be one list remain, we just need to connect it next to the new list. Finally, we can use dummy.next to return the new list. 

Time complexity: $O(m+n)$ </br>
Space complexity: $O(1)$
</br>
</br>

```Java
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
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
       ListNode dummy = new ListNode(0);
       ListNode prev = dummy;
       while(l1 != null && l2 != null){
           if (l1.val > l2.val){
               ListNode tmp = l1;
               l1 = l2;
               l2 = tmp;
           }
           prev.next = l1;
           l1 = l1.next;
           prev = prev.next;
       }
       if (l1 == null){
           prev.next = l2;
       } else if (l2 == null){
           prev.next = l1;
       }
       return dummy.next;
    }
}
```


```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dum = ListNode(None)
        prev = dum
        while l1 and l2:
            if l1.val <= l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            prev = prev.next
        
        if l1 == None:
            prev.next = l2
        elif l2 == None:
            prev.next = l1
        return dum.next
```
