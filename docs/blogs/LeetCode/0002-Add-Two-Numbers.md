---
title: 2. Add Two Numbers
description: leetcode 2. Add Two Numbers
date: 2020-12-30
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Math
  - Linked List
categories:
  - LeetCode
---
[LeetCode 0002. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

---
### Problem: <br/>

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;">

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

#### Example 2:

    Input: l1 = [0], l2 = [0]
    Output: [0]

#### Example 3:

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]


#### Constraints:

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

---
### Solution: <br/>
We need a new linked list to store the result of the addition.
Note that the length of l1 and l2 may be different, so we need to handle the case if one linked list becomes null. The other issue that needs to handle is that the addition may be greater than 9, so you need to make use of `%` and `\` to deal with the carry situation.

One trick often used in the linked list problem is to create a dummy node before the head node, and we can just return `dummy.next`.


Time complexity: $O(max(n,m))$</br>
Space complexity: $O(max(n,m))$ 
</br>
</br>

#### Python

```python
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = tail = ListNode(0)
        _sum = 0
        while l1 or l2 or _sum:
            _sum += (l1.val if l1 else 0) + (l2.val if l2 else 0) 
            tail.next = ListNode(_sum%10)
            tail = tail.next
            _sum //= 10
            l1 = l1.next if l1 else None 
            l2 = l2.next if l2 else None
        return dummy.next
```

#### Java

```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        int _sum = 0;
        while(l1 != null || l2 != null || _sum != 0){
            _sum += (l1 == null ? 0: l1.val) + (l2 == null ? 0: l2.val);
            ListNode newNode = new ListNode(_sum%10);
            tail.next = newNode;
            _sum /= 10;
            l1 = l1 == null ? null: l1.next;
            l2 = l2 == null ? null: l2.next;
            tail = tail.next;
        }
        return dummy.next;
    }
}
```

<Disqus shortname="patricksudo" />