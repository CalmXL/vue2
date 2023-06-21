/**
 * Class 与 Style 绑定
 * 		操作元素的 class 列表和内联样式是数据绑定的一个常见的需求。因为他们都是 attribute，所以我们可以用 v-bind 处理：
 * 		只需要通过表达式计算出字符串结果即可。
 * 		不过字符串拼接麻烦且容易出错，因此 在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式的结果类型除了
 * 		字符串之外，还可以是对象或数组。
 */


/**
 * 绑定 HTML CLASS
 *
 * 1. 对象语法
 * 		我们可以使用 v-bind:class 一个对象，以动态的切换 class:
 */

// new Vue({
// 	el: '#app',
// 	data: {
// 		isActive: true,
// 		hasError: false,
// 		// 绑定的数据对象不必内联定义在模板里
// 		classObject: {
// 			static: true,
// 			active: true,
// 			'text-danger': false
// 		}
// 	}
// });

/**
 * 2. 数组语法
 * 		我们可以把一个数组传给 v-bind:class, 以应用一个 class 列表：
 */

// new Vue({
// 	el: '#app-2',
// 	data: {
// 		activeClass: 'active',
// 		errorClass: 'text-danger',
// 		isActive: true
// 	}
// });


/**
 * 用在组件上
 * 		当在一个自定义组件上使用 class property 时，这些 class 将被添加到组件的根元素上面。
 * 	这个元素上已经存在的 class 不会被覆盖。
 */

Vue.component('my-component', {
	template: '<p class="foo bar">Hi</p>'
})

new Vue({
	el: '#app-3'
});


/**
 * 绑定内联样式
 * 		1. 对象语法：
 * 			v-bind:style 的对象语法十分直观--看着非常像 CSS，当其实是一个 JavaScript 对象。
 * 		CSS property 名可以用驼峰（camelCase）或短横线分割（kebab-case, 记得用引号括起来）来命名：
 */


new Vue({
	el: '#app-4',
	data: {
		activeColor: 'red',
		fontSize: 30,
		styleObject: {
			color: 'hotpink',
			fontSize: '20px'
		}
	}
})

/**
 * 2. 数组语法
 * 		v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上：
 */

new Vue({
	el: '#app-5',
	data: {
		baseStyles: {
			color: 'yellow',
			fontSize: '16px'
		},
		overridingStyles: {
			background: 'blue'
		}
	}
})



