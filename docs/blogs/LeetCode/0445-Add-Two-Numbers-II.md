---
title: 445. Add Two Numbers II
description: leetcode 445. Add Two Numbers II
date: 2020-12-30
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Linked List
categories:
  - LeetCode
---
[LeetCode 0445. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)

---
### Problem: <br/>

You are given two **non-empty** linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

#### Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

#### Example 1:

    Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 8 -> 0 -> 7

---
### Solution: <br/>
We can use reverse both linked lists first and then use the solution of *2. Add Two Numbers*. However, this way doesn't meet the follow-up requirement. The input lists should be reversed so that we can push them in two stacks, respectively. Then, we can make use of the LIFO property of the stacks. The last node will be pop out of the stack first, and calculation can be done this way. Remember, the new linked list should start from its tail because the answer's direction is in reverse order, too.


Time complexity: $O(l1+l2)$</br>
Space complexity: $O(max(l1,l2))$ 
</br>
</br>

#### Python
```python
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        s1, s2 = [], []

        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next  

        
        head = None
        _sum = 0
        while s1 or s2 or _sum:
            _sum += (s1.pop() if s1 else 0) + (s2.pop() if s2 else 0) 
            temp = head
            head = ListNode(_sum%10)
            head.next = temp
            _sum //= 10
        return head
```

#### Java
```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<Integer> s1 = new Stack<Integer>();
        Stack<Integer> s2 = new Stack<Integer>();
        while(l1 != null){
            s1.add(l1.val);
            l1 = l1.next;
        }
        while(l2 != null){
            s2.add(l2.val);
            l2 = l2.next;
        }
        
        ListNode dummy = null;
        ListNode head = dummy;
        int _sum = 0;
        while(!s1.empty() || !s2.empty() || _sum != 0){           
            _sum += (s1.empty() ? 0:s1.pop()) + (s2.empty() ? 0:s2.pop());
            ListNode newNode = new ListNode(_sum%10);
            newNode.next = head;
            head = newNode;
            _sum /= 10;
        }   
        return head;
    }
}
```
<Disqus shortname="patricksudo" />