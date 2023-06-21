/**
 * 进入/离开 & 列表过渡
 *
 * 概述：
 * Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具:
 * 		1. 在 CSS 过渡和动画中应用 class
 * 	  2. 可以配合使用第三方 CSS 动画库， 如 Animate.css
 * 	  3. 在过渡钩子中使用 js 直接操作 DOM
 * 	  4. 可以配合使用第三方 JavaScript 动画库，如 Velocity.js
 */

/**
 * 单元素/组件的过渡
 *
 * Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡
 * 		1. 条件渲染(使用 v-if)
 * 	  2. 条件展示(使用 v-show)
 * 	  3. 动态组件
 * 	  4. 组件根节点
 *
 * 当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
 * 		1. 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
 * 	  2. 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数在恰当时间被调用。
 * 	  3. 如果没有找到 JavaScript 钩子并且没有检测到 CSS 过渡/动画， DOM 操作(插入/删除)在下一帧中执行。
 * 	  	注意，此处指浏览器逐帧动画机制，和 Vue 的 nextTick 不同。
 */


/**
 * 过渡的类名
 *
 * 在进入/离开的过渡中，会有 6 个 class 切换。
 * 		1. v-enter: 定义进入过渡的状态的开始。在元素被插入之前生效，在元素被插入之后的下一帧移除。
 * 	  2. v-enter-active: 定义进入过渡生效时的状态。在整个进入过渡应用中应用，在元素被插入之前生效，在过渡/动画完成之后移除。
 * 	  						这个类，可以被用来定义进入过渡的时间，延迟和曲线函数。
 * 	  3. v-enter-to: 定义进入过渡的结束状态。在元素被插入之后下一帧生效(与此同时 v-enter 被移除)，
 * 	  							 在过渡/动画完成之后移除。
 *    4. v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
 *    5. v-leave-active: 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用。在离开过渡被触发时立刻生效，在过渡/动画完成之后
 *    									移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
 *    6、v-leave-to: 在离开过渡被触发之后的下一帧生效(与此同时 v-leave 被删除)， 在过渡/动画完成之后移除。
 *
 *
 * 对于这些在过渡中切换的类名来说，如果你使用一个没有名字 <transition>，则 v- 是这些类名的默认前缀。
 * 如果你使用了 <transition name="my-transition">, 那么 v-enter 会替换为 my-transition-enter。
 */

/**
 * CSS 过渡
 *
 * 常用的过渡是使用 CSS 过渡。
 */

new Vue({
	el: '#example-1',
	data: {
		show: true
	}
})
//
// new Vue({
// 	el: '#app',
// 	data: {
// 		show: true
// 	}
// });


/**
 * CSS 动画
 *
 * CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入后 DOM 后不会立即删除，而是在 animationed
 * 事件触发时删除。
 */

new Vue({
	el: '#example-2',
	data: {
		show: true
	}
})


/**
 * 自定义过渡的类名
 *
 * 我们可以通过 attribute 来自定义过渡类名：
 *
 * 		enter-class
 * 	  enter-active-class
 * 	  enter-to-class
 * 	  leave-class
 * 	  leave-active-class
 *
 *   它们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css 结合十分有用。
 */

new Vue({
	el: '#example-3',
	data: {
		show: true
	}
})