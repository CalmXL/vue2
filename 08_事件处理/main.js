/**
 * 事件处理
 *
 * 	1. 监听事件
 * 		可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
 */

var example1 = new Vue({
	el: '#example-1',
	data: {
		counter: 0
	}
});

/**
 * 事件处理方法：
 * 		然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。
 * 		因此 v-on 还可以接收一个需要调用的方法名称。
 */

new Vue({
	el: '#example-2',
	data: {
		name: 'Vue.js'
	},
	methods: {
		greet: function (event) {
			// this 在方法里指向当前 Vue 实例
			alert('Hello' + this.name + '!');

			// event 是原生 DOM 事件
			if (event) {
				alert(event.target.tagName);
			}
		}
	}
});


/**
 * 内联处理器中的方法
 * 		除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：
 */

new Vue({
	el: '#example-3',
	methods: {
		say: function (message) {
			alert(message);
		},

		warn: function (message, event) {
			if (event) {
				event.preventDefault();
			}

			alert(message);
		}
	}
});

/**
 * 事件修饰符：
 * 		在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。
 * 	尽管我们在方法中可以轻松实现这点，但更好的方式是只有纯粹的数据逻辑,而不是去处理 DOM 事件细节。
 *
 * 	为了解决这个问题，Vue 为 v-on 提供了 『事件修饰符』。之前提过，修饰符是由点开头的指令后缀来表示的。
 *
 * 	.stop 阻止事件继续传播
 * 	.prevent 提交事件不再重载页面
 * 	.capture
 * 	.self
 * 	.once
 * 	.passive
 */

new Vue({
	el: '#example-4',
	data: {},
	methods: {
		clickDiv () {
			console.log('div');
		},
		doThis () {
			console.log('a')
		}
	}
})

/**
 * 按键修饰符
 *
 * 		在监听键盘事件时，我们经常需要检查详细的按键。 Vue 允许为 v-on 在监听事件时添加按键修饰符
 */

new Vue({
	el: '#example-5',
	methods: {
		submit () {
			console.log('submit');
		},
		onPageDown () {
			console.log('onPageDown');
		}
	}
})

/**
 * 按键码 (事件用法已经被废弃了)
 * 		使用 keycode attribute 也是允许的：
 *
 * 	为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：
 * 		.enter
 * 		.tab
 * 		.delete
 * 		.esc
 * 	  .up
 * 	  .down
 * 	  .left
 * 	  .right
 */

new Vue({
	el: '#example-6',
	methods: {
		submit () {
			console.log('submit');
		}
	}
})

/**
 * 系统修饰键：
 * 		可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
 *
 * 		.ctrl
 * 		.alt
 * 	  .shift
 * 	  .meta
 *
 *
 * .exact 修饰符
 * 		.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。
 */

new Vue({
	el: '#example-7',
	methods: {
		onClick () {
			console.log('click');
		}
	}
})