(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{517:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://leetcode.com/problems/implement-queue-using-stacks/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LeetCode 0232. Implement Queue using Stacks"),a("OutboundLink")],1)]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[s._v("#")]),s._v(" Problem:")]),s._v(" "),a("p",[s._v("Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).")]),s._v(" "),a("p",[s._v("Implement the MyQueue class:")]),s._v(" "),a("ul",[a("li",[s._v("void push(int x) Pushes element x to the back of the queue.")]),s._v(" "),a("li",[s._v("int pop() Removes the element from the front of the queue and returns it.")]),s._v(" "),a("li",[s._v("int peek() Returns the element at the front of the queue.")]),s._v(" "),a("li",[s._v("boolean empty() Returns true if the queue is empty, false otherwise.")])]),s._v(" "),a("h4",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[s._v("#")]),s._v(" Notes:")]),s._v(" "),a("ul",[a("li",[s._v("You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.")]),s._v(" "),a("li",[s._v("Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.")])]),s._v(" "),a("p",[a("strong",[s._v("Follow-up:")]),s._v(" Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.")]),s._v(" "),a("h4",{attrs:{id:"example-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[s._v("#")]),s._v(" Example 1:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('Input\n["MyQueue", "push", "push", "peek", "pop", "empty"]\n[[], [1], [2], [], [], []]\nOutput\n[null, null, null, 1, 1, false]\n\nExplanation\nMyQueue myQueue = new MyQueue();\nmyQueue.push(1); // queue is: [1]\nmyQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)\nmyQueue.peek(); // return 1\nmyQueue.pop(); // return 1, queue is [2]\nmyQueue.empty(); // return false\n')])])]),a("h4",{attrs:{id:"constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[s._v("#")]),s._v(" Constraints:")]),s._v(" "),a("ul",[a("li",[s._v("1 <= x <= 9")]),s._v(" "),a("li",[s._v("At most 100 calls will be made to push, pop, peek, and empty.")]),s._v(" "),a("li",[s._v("All the calls to pop and peek are valid.")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution:")]),s._v(" "),a("p",[s._v('We know that stack is LIFO, and queue is FIFO. So to implement queue by stack, all we want to do is create another stack as buffer, so it can "reverse" the sequence when we want to pop the element, but the case when one stack is empty should be handled specially.')]),s._v(" "),a("p",[s._v("Time complexity: "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"O"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),s._v(" "),a("p",[s._v('It is the amortized time complexity, because all the pop operations are constrained by the push operations. Although in some case it may be O(n), but the effect will be "diluted" if you operate many times.'),a("br")]),s._v(" "),a("p",[s._v("Space complexity: "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"O"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),s._v(" "),a("br"),s._v(" "),a("br")],1),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        Initialize your data structure here.\n        """')]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        Push element x to the back of queue.\n        """')]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        Removes the element from in front of queue and returns that element.\n        """')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        Get the front element.\n        """')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        \n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("empty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        Returns whether the queue is empty.\n        """')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Your MyQueue object will be instantiated and called as such:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# obj = MyQueue()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# obj.push(x)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# param_2 = obj.pop()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# param_3 = obj.peek()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# param_4 = obj.empty()")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);