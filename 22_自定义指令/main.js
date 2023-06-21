/**
 * 自定义指令
 *
 * 简介: 除了核心功能默认内置的指令 (v-model 和 v-show), Vue 也允许注册自定义指令。
 * 注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素
 * 进行底层操作，这时候就会用到自定义指令。
 */


// 注册一个全局自定义指令 `v-focus`

// Vue.directive('focus', {
// 	// 当被绑定的元素
// 	inserted: function (el) {
// 		// 	聚焦元素
// 		el.focus();
// 	}
// });

// new Vue({
// 	el: '#app',
//
// 	// 注册局部指令，组件中也接收一个 directives 的选项
// 	directives: {
// 		focus: {
// 			// 	指令的定义
// 			inserted: function (el) {
// 				el.focus();
// 			}
// 		}
// 	},
//
// 	methods: {
// 		routerGo () {
// 			console.log('链接跳转');
// 		}
// 	}
// });

/**
 * 钩子函数
 *
 * 一个指令定义对象可以提供如下几个钩子函数（均为可选）:
 *
 * 1. bind: 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
 * 2. inserted: 被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)。
 * 3. update: 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能
 * 发生了改变，也可能没有。
 * 		但是你可以通过比较更新前后的值来忽略不必要的模板更新。
 * 4. componentUpdated: 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
 * 5. unbind: 只调用一次，指令与元素解绑时调用
 */

/**
 *
 */

const Permissions = [
	'/804PrivateCockpit/party',
	'/804PrivateCockpit/hs'
];

// function routerGo (url) {
// 	router.push('xxx')
// }

Vue.directive('permission', {
	inserted (el, binding, vnode) {
		const { value } = binding;

		if (Permissions && Permissions.includes(value)) {
			el.style.pointerEvents = 'auto';
		} else {
			el.style.pointerEvents = 'none';
		}
	}
});


new Vue({
	el: '#app',

	// 注册局部指令，组件中也接收一个 directives 的选项
	directives: {
		focus: {
			// 	指令的定义
			inserted: function (el) {
				el.focus();
			}
		}
	},

	methods: {
		routerGo () {
			console.log('链接跳转');
		}
	}
});

