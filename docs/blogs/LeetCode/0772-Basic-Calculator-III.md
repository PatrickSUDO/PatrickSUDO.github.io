---
title: 772. Basic Calculator III
description: leetcode 772. Basic Calculator III
date: 2020-10-24
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - Stack
  - String
categories:
  - LeetCode
---
[LeetCode 0772. Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)

---
### Problem: 

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-2147483648, 2147483647].

**Follow up:** Could you solve the problem without using built-in library functions.


#### Example 1:
    Input: s = "1 + 1"
    Output: 2

#### Example 2:
    Input: s = " 6-4 / 2 "
    Output: 4

#### Example 3:
    Input: s = "2*(5+5*2)/3+(6/2+8)"
    Output: 21

#### Example 4:
    Input: s = "(2+6* 3+5- (3*14/7+2)*5)+3"
    Output: -12

#### Example 5:
    Input: s = "0"
    Output: 0


#### Constraints:

- 1 <= s <= 10<sup>4</sup>
- s consists of digits, '+', '-', '*', '/', '(', ')' and ' '.
- s is a valid expression.

---
### Solution:
The most straightforward way to handle the precedence is using stack. However, in this problem, we not only need to handle the positive or negative sign but the parentheses and the principle that "multiplication and division should be operated first". One stack is to store the number(num), and another is to keep the symbol(ops).
Two helper functions should be built. First, one is to handle the basic arithmetic operation, and one is to control the precedence.

Then, we can start to extract the string one by one. When we see space, continue. If it is a digit, we begin to concatenate the consecutive digit and convert to a number. Then, push it into num.

If we see "(", then it means a block needs to be calculated in higher priority. Then, push it into ops. 

When we see ")", it means the block is over, so we need to calculate it, and push the final answer into num. Be careful for the number sequence because the stack is LIFO

If we see the operand and there is no particular precedence, calculate it as previously mentioned.

Finally, we have a simple formula without parentheses and particular precedence. Repeat the calculation to have the final answer.


Time complexity: $O(n)$ 
</br>

Space complexity: $O(n)$
</br>
</br>

**source code from floydchen**

```python
class Solution:
	def calculate(self, s):
		"""
		:type s: str
		:rtype: int
		"""

		# first define a couple helper methods

		# operation helper to perform basic math operations
		def operation(op, second, first):
			if op == "+":
				return first + second
			elif op == "-":
				return first - second
			elif op == "*":
				return first * second
			elif op == "/":  # integer division
				return first // second

		# calculate the relative precedence of the the operators "()" > "*/" > "+="
		# and determine if we want to do a pre-calculation in the stack
		# (when current_op is <= op_from_ops)
		def precedence(current_op, op_from_ops):
			if op_from_ops == "(" :
				return False
			if (current_op == "*" or current_op == "/") and (op_from_ops == "+" or op_from_ops == "-"):
				return False
			return True

		if not s:
			return 0
		# define two stack: nums to store the numbers and ops to store the operators
		nums, ops = [], []
		i = 0
		while i < len(s):
			c = s[i]
			if c == " ":
				i += 1
				continue
			elif c.isdigit():
				num = int(c)
				while i < len(s) - 1 and s[i + 1].isdigit():
					num = num * 10 + int(s[i + 1])
					i += 1
				nums.append(num)
			elif c == "(":
				ops.append(c)
			elif c == ")":
				# do the math when we encounter a ')' until '('
				while ops[-1] != "(":
					nums.append(operation(ops.pop(), nums.pop(), nums.pop()))
				ops.pop()
			elif c in ["+", "-", "*", "/"]:
				while len(ops) != 0 and precedence(c, ops[-1]):
					nums.append(operation(ops.pop(), nums.pop(), nums.pop()))
				ops.append(c)
			i += 1

		while len(ops) > 0:
			nums.append(operation(ops.pop(), nums.pop(), nums.pop()))

		return nums.pop()
        
```
<Disqus shortname="patricksudo" />

