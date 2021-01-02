---
title: 147. Insertion Sort List
description: leetcode 147. Insertion Sort List
date: 2021-1-1
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Linked List
  - Sort
categories:
  - LeetCode
---
[LeetCode 0147. Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)

---
### Problem: <br/>

Sort a linked list using insertion sort.

<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif" style="height:180px; width:300px">

A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list.

**Algorithm of Insertion Sort:**

1. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
3. It repeats until no input elements remain.

#### Example 1:

    Input: 4->2->1->3
    Output: 1->2->3->4

#### Example 2:

    Input: -1->5->3->4->0
    Output: -1->0->3->4->5


---
### Solution: <br/>

For unsorted data, scan from front to back in the sorted sequence to find the corresponding position and insert. In the implementation of insertion sort, in-place sorting is usually used (that is, sorting that only needs O(1) extra space).

Use pointer q to traverse backward one by one

1. Construct for a dummy node, and the next node points to the head node. If you want to insert at the head node, dummy node will help you.
2. When the value of q is not greater than the value of the next node, traverse the next node
3. When the value of p is greater than the next node, then take the next node of p, scan from front to back, and insert the node before the first node with a larger value


Time complexity: $O(n^2)$</br>
Space complexity: $O(1))$ 
</br>
</br>

#### Python
```python
class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        if not head or not head.next: return head
        dummy = ListNode(0)
        dummy.next = head
        curr = head
        while curr and curr.next:
            if curr.val <= curr.next.val:
                curr = curr.next
            else:
                temp = curr.next
                q = dummy
                curr.next = curr.next.next
                
                while q.next and q.next.val <= temp.val:
                    q = q.next
                temp.next = q.next
                q.next = temp
        return dummy.next
```

#### Java
```java
class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode curr = head;
        while(curr != null && curr.next != null){
            if(curr.val < curr.next.val){
                curr = curr.next;
            } else {
                ListNode temp = curr.next;
                ListNode q = dummy;
                curr.next = curr.next.next;
                while(q != null && q.next != null && q.next.val < temp.val){
                    q = q.next;
                }
                temp.next = q.next;
                q.next = temp;
            }
        }
        return dummy.next;
    }
}
```


<Disqus shortname="patricksudo" />