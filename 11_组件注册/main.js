/**
 * 组件注册
 */

/**
 * 组件名
 * 		在注册一个组件的时候，我们始终需要给他一个名字。
 * 		该组件名就是 Vue.component 的第一个参数。
 *
 * 		给予组件的名字可能依赖你打算拿它来做什么。当直接在 DOM 中使用一个组件(而不是在字符串模板或 单文件组件)的时候，
 * 	我们强烈推荐遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。
 */

/**
 * 组件名大小写
 *
 * 定义组件名的方式有俩种:
 *
 * 	1. 使用 kebab-case:
 *	Vue.component('my-component-name', { ... })
 *
 * 	2. 使用 PascalCase:
 *  Vue.component('MyComponent', { ... })
 */

// Vue.component('my-component-a', {
// 	template: `<div>kebab-case -> ComponentA</div>`
// });
//
// Vue.component('MyComponentB', {
// 	template: `<div>PascalCase -> ComponentB</div>`
// })
//
//
// new Vue({
// 	el: '#app'
// })


/**
 * 全局注册
 *
 * 到目前为止，我们只用过 Vue.component 来创建组件:
 * 	 Vue.component('my-component-name', {
 * 	   // 选项 ...
 * 	 })
 *
 * 这些组件就是全局注册的。也就是说它们在注册之后可以用在任何新创建的 Vue 根实例(new Vue) 的模板中。
 *
 * 在所有子组件中也是如此，也就是说这三个组件在各自内部也都可以相互使用。
 */


/**
 * 局部注册
 *
 * 全局注册往往是不够理想的。比如，如果你使用了 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，
 * 它仍然会被包含在你最终的构建结果中。这造成了用户下载的 js 的无谓的增加。
 *
 * 在这些情况下，你可以通过一个普通的 js 对象来定义组件:
 *
 * var ComponentA = {}
 * var ComponentB = {}
 * var ComponentC = {}
 *
 * new Vue({
 *   el: '#app',
 *   components: {
 *     'component-a': ComponentA,
 *     'component-b': ComponentB
 *   }
 * })
 *
 * 注意 局部注册的组件在其子组件中不可用。
 */