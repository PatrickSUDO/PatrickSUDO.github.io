---
title: 0234. Palindrome Linked List
date: 2020-09-11
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - LinkedList
  - TwoPointer
categories:
  - LeetCode
---
[LeetCode 0234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

---
**Problem:** <br/>
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

---
**Solution:** <br/>
Easiest way to do is convert the Linked List to list, but it's not an efficient way. A modified way is using deque, but it still costs $O(n)$ in space. So, we can reverse the left-half of the linked list and then compare to the right-half. If it is the same, we got a palindrome linked list. For example:

```
1 -> 2 -> 3 -> 2 -> 1 
```
will be converted to:

```
1 <- 2 <- 3 -> 2 -> 1 
```

To compare both part, we need to tag the middle by fast and slow pointer when iterating the linked list. Next, we can go from the middle to both side to see if the two pointers are the same. When the left pointer is None, means the check is over, and we got a palindrome. 


**Solution 1: Deque**

Time $O(n)$  <br />
Space $O(n)$


```python 
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        q = collections.deque()
        while head:
            q.append(head.val)
            head = head.next
        while len(q) >= 2:
            if q.popleft() != q.pop():
                return False
        return True
```
**Solution 2: Reverse**

Time $O(n)$  <br />
Space $O(1)$

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        l = None
        r = fast = head
        while fast and fast.next:
            fast = fast.next.next
            #reverse 
            
            prev, l = l, r
            l.next, r = prev, r.next
        #If fast is not None means the length is odd, so the mid is not being compared
        if fast:
            r = r.next
        #Check is palindrome or not (2 pointer)
        while l and l.val == r.val:
            r = r.next
            l = l.next
        #If l is None means it go through all the elemetes -> palindrome
        return not l
```





