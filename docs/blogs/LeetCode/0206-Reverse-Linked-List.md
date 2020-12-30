---
title: 206. Reverse Linked List
description: leetcode 206. Reverse Linked List
date: 2020-12-30
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Linked List
categories:
  - LeetCode
---
[LeetCode 0206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

---
### Problem: <br/>

Reverse a singly linked list.

#### Example:

    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL

#### Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?


---
### Solution: <br/>
We can do this question iteratively or recursively. The concept is to record the previous node and the next node. We reverse the next pointer of the current node. After each iteration or recursion, the current node will become the last node, and the next node will become the current node. Initially, the previous node should be set to null.

Time complexity: $O(n)$</br>
Space complexity: $O(1)$ ($O(n)$ if we use recursion.)
</br>
</br>


#### Python 
##### Iterative

```python
class Solution:
    def reverseList(self, head):
        def swap(prev, curr):
            if not curr: return prev
            nxt = curr.next
            curr.next = prev
            return swap(curr, nxt)
        return swap(None, head)
```

##### Recursive

```python
class Solution:
    def reverseList(self, head):
        prev, curr = None, head;   
        while curr:
            nxt, curr.next = curr.next, prev      
            prev, curr = curr, nxt
        return prev
```

#### Java
##### Iterative 
```java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        while(head != null){
            ListNode nxt = head.next;
            head.next = prev;            
            prev = head;  
            head = nxt;
        }
        return prev;
    }
}
```

##### Recursive

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        return swap(null, head);
    }
    private ListNode swap(ListNode prev, ListNode curr){
        if(curr == null) return prev;
        
        ListNode nxt = curr.next;
        curr.next = prev;
        return swap(curr, nxt);
    }
}
```

<Disqus shortname="patricksudo" />