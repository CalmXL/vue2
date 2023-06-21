/**
 * 列表渲染
 *
 * 1. 用 v-for 把一个数组对应为一组元素
 * 		我们可以用 v-for 指令基于一个数组来渲染一个列表。
 * 		v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数组，而 item 则是被迭代的数组元素的别名。
 *
 * 	在 v-for 块中，我们可以访问所有父作用域的 property. v-for 还支持一个可选的第二个参数，即当前的索引。
 */

new Vue({
	el: '#example-1',
	data: {
		items: [
			{
				id: 1,
				message: '1. info'
			},
			{
				id: 2,
				message: '2. info'
			},
			{
				id: 3,
				message: '3. info'
			},
		]
	}
})


/**
 * 你也可以使用 of 代替 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法
 */
new Vue({
	el: '#example-2',
	data: {
		parentMessage: 'Parent',
		items: [
			{ message : 'Foo' },
			{ message : 'Bar' }
		]
	}
});


/**
 * 在 v-for 里使用对象
 *
 * 	  你也可以用 v-for 来遍历一个对象的 property。
 *
 * 	  你也可以提供第二个参数为 property 名称也就是键名。
 */

new Vue({
	el: '#example-3',
	data: {
		object: {
			title: 'How to do lists in Vue',
			author: 'Jane Doe',
			publishedAt: '2023-05-28'
		}
	}
});


/**
 * 维护状态
 * 		当 Vue 正在更新使用 v-for 渲染的元素的列表时，它默认使用 "就地更新" 的策略。
 * 		如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，
 * 	  并确保它们每个索引位置正确渲染。
 *
 * 	  该默认的模式是高效地，但是 只适用于不依赖子组件状态或临时 DOM 状态的列表渲染输出。
 *
 * 	  为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每个项提供
 * 	  一个唯一 key attribute:
 *
 * 	  建议尽可能在使用 v-for 时提供 key attribute, 除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为获取性能上的提升。
 *
 * 	  因为它是 Vue 识别节点的一个通用机制，key 并不仅与 v-for 特别关联。
 *
 *
 * 	  注意：不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
 */

new Vue({
	el: '#example-4',
	data: {
		items: [
			{ message: 'A' },
			{ message: 'B' },
		]
	}
})


/**
 * 数组更新检测
 *
 * 变更方法：
 * 		Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹的方法包括：
 * 			push
 * 		  pop
 * 		  shift
 * 		  unshift
 * 		  splice
 * 		  sort
 * 		  reverse
 *
 *
 * 替换数组
 * 		变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更的方法，例如 filter()
 * 	concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组。
 * 		当使用非变更方法时，可以用新数组替换旧数组。
 */


/**
 * 显示过滤/排序后的结果
 *
 * 	有时，我们想要一个数组经过过滤和排序后的版本，而不实际变更或重置原始数据。在这种情况下，可以创建一个计算属性，
 * 	来返回过滤或排序后的数组。
 */

new Vue({
	el: '#example-5',
	data: {
		numbers: [ 1, 2, 3, 4, 5 ]
	},
	computed: {
		evenNumbers: function () {
			return this.numbers.filter(item => item % 2 === 0)
		}
	}
});


/**
 * 在计算属性不适用的情况下，你可以使用一个方法：
 */

new Vue({
	el: '#example-6',
	data: {
		sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
	},
	methods: {
		even: function (numbers) {
			return numbers.filter(number => number  % 2 === 0)
		}
	}
});


/**
 * 在 v-for 里使用范围值
 * 		v-for 也可以接收整数。在这种情况下，它会把模板重复对应次数。
 */


/**
 * 在 <template> 上使用 v-for
 *
 * 		类似于 v-if, 你也可以利用带有 v-for 的 <template> 来循环渲染一段包含多个元素的内容。
 */

new Vue({
	el: '#example-7',
	data: {
		items: [
			{ msg: '1' },
			{ msg: '2' },
			{ msg: '3' },
			{ msg: '4' },
		]
	}
});

/**
 * v-for 与 v-if 一同使用
 *
 * 注意我们不推荐在同一元素上使用 v-for 和 v-if 。
 *
 * 当它们处于同一节点， v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。
 * 当你只想为部分项渲染节点时，这种优先级的机制会十分有用：
 */

new Vue({
	el: '#example-8',
	data: {
		todos: [
			{ id: 1, msg: 'message-1', isComplete: false },
			{ id: 2, msg: 'message-2', isComplete: true },
			{ id: 3, msg: 'message-3', isComplete: true },
			{ id: 4, msg: 'message-4', isComplete: false },
		]
	}
})


/**
 * 在组件上使用 v-for
 *
 * 		在自定义组件上，你可以像在任何普通元素上一样使用 v-for.
 */

Vue.component('todo-item', {
	template: `\
		<li>\
		{{ title }}\
		<button v-on:click="$emit(\'remove\')">Remove</button>\
	`,
	props: ['title']
})

new Vue({
	el: '#todo-list-example',
	data: {
		newTodoText: '',
		todos: [
			{
				id: 1,
				title: 'Do the dishes',
			},
			{
				id: 2,
				title: 'Take out the trash',
			},
			{
				id: 3,
				title: 'Mow the lawn'
			}
		],
		nextTodoId: 4
	},
	methods: {
		addNewTodo: function () {
			this.todos.push({
				id: this.nextTodoId++,
				title: this.newTodoText
			})
			this.newTodoText = ''
		}
	}
})