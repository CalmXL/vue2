/**
 * Prop
 *
 * Prop 的大小写(camelCase vs kebab-case)
 *
 * HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。
 * 这意味着当你使用 DOM 中的模板时，camelCase(驼峰命名法) 的prop 名需要使用其等价的 kebab-case(短横线分隔命名) 命名:
 */

Vue.component('blog-post', {
	// 在 JavaScript 中为 camelCase
	props: ['postTitle'],
	template: `<h3>{{ postTitle }}</h3>`
})


/**
 * Prop 类型
 *   你希望每个 prop 都有指定的值类型。这时,你可以以对象的形式列出 prop,这些 property 的名称和
 *   值分别是 prop 各自的名称和类型:
 */

// props: {
// 	title: String,
// 	like: Number,
// 	isPublished: Boolean,
// 		commentIds: Array,
// 		author: Object,
// 		callback: Function,
// 		contractsPromise: Promise,
// }


/**
 * 传递静态或动态 Prop
 *		可以通过 v-bind 动态赋值:
 *
 *
 *	传入一个布尔值，当 prop 在没有值的情况下，都意味着 true.
 */


new Vue({
	el: '#app',
	data: {
		post: {
			title: 'this is post',
			author: {
				name: 'xulei'
			}
		},
		likes: 42,
		isPublished: false
	}
})

/**
 * 单向数据流：
 *
 * 所有的 prop 都使得其父子 prop 之间形成了一个 『单向下行绑定』：父级 prop 的更新会向下流动到子组件中，
 * 但是反过来不行，
 */
