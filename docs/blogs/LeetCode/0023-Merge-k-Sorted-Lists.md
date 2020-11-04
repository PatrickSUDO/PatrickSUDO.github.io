---
title: 23. Merge k Sorted Lists
description: leetcode 23. Merge k Sorted Lists
date: 2020-09-27
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - Heap
  - Linked List
  - Divide and Conquer
categories:
  - LeetCode
---
[LeetCode 0023. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

---
**Problem:** <br/>

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6



Example 2:

    Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
    Output: [0,0,1,1,1,1,1,0]

Example 3:

    Input: lists = [[]]
    Output: []

Constraints:

- k == lists.length
- 0 <= k <= 1E+4
- 0 <= lists[i].length <= 500
- 1E-4 <= lists[i][j] <= 1E+4
- lists[i] is sorted in ascending order.
- The sum of lists[i].length won't exceed 1E+4.


---
**Solution:** <br/>

The most intuitive way to solve this problem is using heap, we put all the linked list in the list, and then pop out the one with minimum head value. It will be connected to the created dummy ListNode object. Move the current node to the next, and put the rest segments back to the heap until there is nothing left in the heap. In Python, heap cannot sort object, but we can sort the value it has instead. However, we tie occurs, we should place a dummy element to compare. Here, we use index.


Time complexity: $O(nlogk)$ </br>
Space complexity: $O(k)$


```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        dummy = ListNode(0)
        curr = dummy
        pq = []
        for i, lst in enumerate(lists):
            if lst:
                heapq.heappush(pq, (lst.val, i, lst))
        
        while pq:
            val, i, node = heapq.heappop(pq)
            curr.next = node
            curr = curr.next
            if curr.next:
                heapq.heappush(pq, (curr.next.val, i, curr.next))
        return dummy.next
```

To further save some memory, we can use merge sort instead. The main concept is divide and conquer. We cut the list in left and right segment, and recursively get each result and merge. For the merge function, we need to create the dummy node first,then we make the head with less value as left. Connecting the first node to the current node, then move both list to the next node. Before we return, remember to connect the rest of left or right list to the node.

Time complexity: $O(nlogk)$ </br>
Space complexity: $O(logk)$

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists: return 
        if len(lists) == 1: return lists[0]
        m = len(lists) // 2
        l = self.mergeKLists(lists[:m])
        r = self.mergeKLists(lists[m:])
        return self.merge(l, r)
    def merge(self, l, r):
        dummy = ListNode(0)
        curr = dummy 
        while l and r:
            if l.val > r.val:
                l, r = r, l 
            curr.next = l
            l = l .next
            curr = curr.next
            
        curr.next = l or r
        return dummy.next  
```
There is a copy operation when we slice each list. Using pointer instead can reduce the space complexity to $O(1)$. We iterate through the list in a jumping way, when the interval is 1, it means we half the size of the list. We merge the nodes with the ones being passed. Every time we merge, we double the interval. Therefore, we don't need recursion and teh additional copy before merging.


Time complexity: $O(nlogk)$ </br>
Space complexity: $O(1)$

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists: return 
        if len(lists) == 1 : return lists[0]
        interval = 1
        amount = len(lists)
        interval = 1
        while interval < amount:
            for i in range(0, amount - interval, interval * 2):
                lists[i] = self.merge(lists[i], lists[i + interval])
            interval *= 2
        return lists[0] if amount > 0 else lists
            
    def merge(self, l, r):
        dummy = ListNode(0)
        curr = dummy
        while l and r:
            if l.val > r.val:
                l, r = r, l
            curr.next = l
            l = l.next
            curr = curr.next
        curr.next = l or r
        return dummy.next
```
<Disqus shortname="patricksudo" />