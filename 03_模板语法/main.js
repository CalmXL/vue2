/**
 * Mustache (双大括号)
 */

new Vue({
	el: '#app',
	data: {
		msg: 'this is mustache'
	}
})

/**
 * v-once 指令，可以执行一次性的插值，当数据改变的时候，插值出的内容不会更新。
 */


/**
 * v-html 指令:
 * 	使用该指令会忽略解析property 值中的数据绑定。
 */
new Vue({
	el: '#app-2',
	data: {
		rawHtml: '<span style="color: hotpink">This is should be red.{{ msg }}</span>',
		msg: '123'
	}
})


/**
 * attribute:
 * 		Mustache 语法不能用在 HTML attribute 上，遇到这种情况应该使用 v-bind 指令
 *
 * 	  对于布尔 attribute (它们只要存在就意味着值为 true), 如果值为 null、undefined、false, 则disabled 不会被包含在渲染出来的 button 元素中。
 */

new Vue({
	el: '#app-3',
	data: {
		dynamicId: 'test',
		isButtonDisabled: null
	}
})


/**
 * 使用 Javascript 表达式:
 * 		有个限制，每个绑定的都只能包含单个表达式。
 * 	{{ a = 1 }} 这时语句不是表达式
 * 	{{ if (ok) { return message } }} 流控制也不会生效
 */

new Vue({
	el: '#app-4',
	data: {
		number: 1,
		ok: true,
		message: 'Vue!',
		id: 'box'
	}
})


/**
 * 指令：
 * 		Directive 是带有 v- 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况)。
 * 		指令的职责：当表达式的值改变时，将其产生的连带影响，响应式的作用于 DOM.
 *
 * 	参数: 一些指令能够接收一个"参数"，在指令名称之后以冒号表示。
 * 		v-bind:href="url"
 *
 * 	动态参数：2.6.0 开始，可以用方括号扩起来的 Javascript 作为一个指令的参数：
 *
* 	对动态参数的值的约束：
 * 		动态参数预期会求出一个字符串，异常情况下值为 null。这个特殊的 null 值可以被显性地用于移除绑定。
 * 		任何其它非字符串类型的值都将会触发一个警告。
 *
 */

new Vue({
	el: '#app-5',
	data: {
		url: 'https://www.baidu.com',
		attr: 'href',
		eventname: 'click',
	},
	methods: {
		doSomething () {
			console.log('this is doSomething')
		}
	}
})


/**
 * 修饰符(modifier)：是以半角句号.指名的特殊的后缀，用于指出一个指令应该以特殊方式绑定。
 * 例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault():
 */


/**
 * 缩写：
 * 	v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为（dynamic behavior）时，
 * 	v- 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。
 *
 * 	同时，在构建由 Vue 管理所有模板的单页面应用程序（SPA - single page application ）时，v- 前缀也变得没有那么重要了。
 * 	因此， Vue 为 v-bind 和 v-on 这俩个最常用的指令，提供了特定简写：
 *
 * v-bind 缩写:
 *		< a v-bind:href="url">...</a>
 *		<a :href="url">...</a>
 *		<a :[key]="url">...</a>
 *
 * v-on缩写：
 * 		<a v-on:click="doSomething">...</a>
 * 		<a @click="doSomething">...</a>
 *		<a @[event]="doSomething">...</a>
 */
