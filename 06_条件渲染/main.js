/**
 * 条件渲染 v-if
 *
 * 		v-if 指令用于条件性地渲染一块内容，这块内容只会在指令表达式返回 truthy 值的时候被渲染。
 */

new Vue({
	el: '#app',
	data: {
		awesome: false
	}
})


/**
 * 在 <template> 元素上使用 v-if 条件渲染分组
 *
 * 	因为 v-if 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素？
 * 	此时可以把一个 <template> 元素当作不可见的包裹元素，并在上面使用 v-if。
 * 	最终的渲染结果将不包含 <template> 元素。
 */



new Vue({
	el: '#app-2',
	data: {
		ok: true
	}
});

/**
 * 	v-else:
 * 		你可以使用 v-else 指令来表示 v-if 的'else 块':
 *
 * 	v-else 元素必须紧跟在带 v-if  或者 v-else-if 的元素的后面，否则它将不会识别。
 */

new Vue({
	el: '#app-3'
});


/**
 * v-else-if, 顾名思义，充当 v-if 的 'else-if' 块，可以连续使用:
 *
 * 	类似于 v-else, v-else-if 也必须紧跟在带 v-if 或者 v-else-if 的元素之后。
 */

new Vue({
	el: '#app-4',
	data: {
		type: 'A'
	}
});


/**
 * 用 key 管理可复用的元素
 *
 * 		Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。
 */

	new Vue({
		el: '#app-5',
		data: {
			loginType: 'username'
		},
		methods: {
			toggle () {
				this.loginType = 'password'
			}
		}
	})


/**
 * v-show:
 * 	另一个用于根据条件展示元素的选项是 v-show 指令。
 *
 * 	不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。 v-show 只是简单的切换元素
 * 	CSS property display。
 *
 * 	注意， v-show 不支持 <template> 元素，也不支持 v-else。
 */


/**
 * v-if vs v-show
 *
 * v-if 是 "真正"的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁重建。
 *
 * v-if 也是惰性的：如果在初识渲染时条件为假，则什么也不做--直到条件第一次变为真时，才会开始渲染条件块。
 *
 * 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁地切换，则使用
 * v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
 */

/**
 * v-if 与 v-for 一起使用
 *
 * 注意: 不推荐同时 v-if 和 v-for 。
 *
 * 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。
 */