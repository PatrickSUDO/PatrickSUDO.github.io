(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{537:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://leetcode.com/problems/critical-connections-in-a-network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1192. Critical Connections in a Network"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("Problem:")]),t._v(" "),n("br"),t._v("\nThere are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.")]),t._v(" "),n("p",[t._v("A critical connection is a connection that, if removed, will make some server unable to reach some other server.")]),t._v(" "),n("p",[t._v("Return all critical connections in the network in any order.")]),t._v(" "),n("p",[t._v("Example 1:")]),t._v(" "),n("img",{staticStyle:{width:"198px",height:"248px"},attrs:{alt:"",src:"https://assets.leetcode.com/uploads/2019/09/03/1537_ex1_2.png"}}),t._v(" "),n("p",[t._v("Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]")]),t._v(" "),n("p",[t._v("Output: [[1,3]]\nExplanation: [[3,1]] is also accepted.")]),t._v(" "),n("p",[t._v("Constraints:\n1 <= n <= 10^5\nn-1 <= connections.length <= 10^5\nconnections[i][0] != connections[i][1]\nThere are no repeated connections.")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("Solution:")]),t._v(" "),n("br"),t._v("\nTo find the edge that can divide the graph by cutting off, this edge cannot have a ring because cutting any edge in the ring will not divide the graph into two. Then how do we traverse once to find the ring? we can start from 0 as the starting point, and record the minimum steps from the starting point to that point each time. Thus, if there is no ring we encounter the next point, the steps it returns will be larger than that of its parent node. If it is smaller or equal, it means that there is another way to go from the starting point, which means there is a loop.")]),t._v(" "),n("p",[t._v("So after creating the graph, first establish the minimum number of steps for the starting point. If the child node is equal to the parent node, it means going back and should be ignored. If the state is -1, it means that we have not visited. Then go back to the inner DFS to find if there is a loop, and update the minimum number of steps to the states. If the point is visited, then update the smaller steps. Finally, check whether steps recorded in the node status has changed after the visiting. If there is no change, it means that there is no ring parent node and the current edge is critical.")]),t._v(" "),n("p",[t._v("At the beginning, the parent node of 0 is dummy -1\n"),n("a",{attrs:{href:"https://imgur.com/mhjOzqQ"}},[n("img",{attrs:{src:"https://i.imgur.com/mhjOzqQ.png",title:"source: imgur.com"}})])]),t._v(" "),n("p",[t._v("Time "),n("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[n("mjx-math",{staticClass:" MJX-TEX"},[n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"O"}})],1),n("mjx-mo",{staticClass:"mjx-n"},[n("mjx-c",{attrs:{c:"("}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"n"}})],1),n("mjx-mo",{staticClass:"mjx-n"},[n("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" "),n("br"),t._v("\nSpace "),n("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[n("mjx-math",{staticClass:" MJX-TEX"},[n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"O"}})],1),n("mjx-mo",{staticClass:"mjx-n"},[n("mjx-c",{attrs:{c:"("}})],1),n("mjx-mi",{staticClass:"mjx-i"},[n("mjx-c",{attrs:{c:"n"}})],1),n("mjx-mo",{staticClass:"mjx-n"},[n("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("criticalConnections")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connections"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        graph "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" collections"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultdict"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" connections"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        states "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" n\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Start from 0, if we find the step is smaller or equal to the minimum step, it means ring exist.")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" steps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("            \n            states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" steps "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Min step now            ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" child "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" child "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" parents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#go back and forth")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#haven't vistied")]),t._v("\n                    states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" steps "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#if we find smaller step, update it")]),t._v("\n                    states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Check if the step changes, but 0 which is the starting point should be excluded")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" steps "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" curr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" states"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("curr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        \n        dfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])]),n("Disqus",{attrs:{shortname:"patricksudo"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);