/**
 * 表单输入绑定
 *
 * 基础用法
 * 		你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。
 * 	它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件
 * 	以更新数据，并对一些极端的场景进行一些特殊处理。
 *
 * 	v-model 会忽略所有表单元素的 value 、checked 、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过
 * 	在 js 在组件的 data 选项中声明初始值。
 *
 */

/**
 * 文本
 */

new Vue({
	el: '#example-1',
	data: {
		message: ''
	}
});

/**
 * 多行文本
 */

new Vue({
	el: '#example-2',
	data: {
		message: ''
	}
})

/**
 * 复选框
 */

new Vue({
	el: '#example-3',
	data: {
		checked: false,
		checkedNames: []
	}
})

/**
 * 单选按钮
 */

new Vue({
	el: '#example-4',
	data: {
		picked: ''
	}
});


/**
 * 选择框
 */
new Vue({
	el: '#example-5',
	data: {
		selected: ''
	}
});

/**
 * 多选绑定
 */

new Vue({
	el:"#example-6",
	data: {
		selected: [],
		selected2: 'A',
		options: [
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' },
		]
	}
});


/**
 * 值绑定
 *
 * 对于单选按钮，复选框及选择框的选项，v-model 绑定的值通常是静态字符串(对于复选框也可以是布尔值)
 */


/**
 * 修饰符
 *
 * .lazy
 * 		在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步（除了上述输入法组合文字时）。
 * 		可以添加 lazy 修饰符，从而转为在 change 事件之后进行同步。
 *
 * 	.number
 * 		如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
 *
 * 	.trim
 * 	 	如果想要自动过滤用户输入的首尾空白字符串，可以给 v-model 添加 trim 修饰符:
 */

new Vue({
	el: '#example-7',
	data: {
		msg: '',
		age: 0
	}
})

/**
 * 在组件上使用 v-model
 */