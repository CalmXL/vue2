/**
 * 组件基础
 */

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
	data: function () {
		return {
			count: 0
		}
	},
	template: `
		<button v-on:click="count++">You clicked me {{ count }} times.</button>
	`
});

/**
 * 组件是可复用的 Vue 实例，且带有一个名字：在上面的例子为 <button-counter>.
 * 我们可以通过 new Vue 创建的根实例中，把这个组件作为自定义元素来使用：
 */

new Vue({
	el: '#components-demo'
});


/**
 * 组件的复用
 * 		你可以将组件进行任意次数的复用：
 */

new Vue({
	el: '#example-2'
});

/**
 * 注意当点击按钮，每个组件都会各自独立维护它的 count。 因为你每用一次组件，就会有一个新的实例被创建。
 */

/**
 * data 必须是一个函数
 *
 * 但我们定义这个 <button-counter> 组件时，你可能会发现它的 data 并不是像这样提供一个对象:
 *
 * data: {
 *   count: 0
 * }
 *
 * 取而代之的是，一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
 *
 * data: function () {
 *   return {
 *     count: 0
 *   }
 * }
 */


/**
 * 组件的组织
 *
 * 组件的注册类型:
 * 		全局注册 和 局部注册
 *
 * 	至此我们的组件都只是通过 Vue.component 全局注册
 *
 * 	全局注册的组件可以用在其被注册之后的任何（通过 new ）先创建的 Vue 的根实例，也包括其组件树中的所有子组件模板中。
 */

/**
 * 通过 prop 向子组件传递数据
 *
 * 	Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property
 *
 */

Vue.component('blog-post', {
	props: ['title'],
	template: `
		<h3>{{ title }}</h3>
	`
});

new Vue({
	el: '#example-3',
	data: {
		posts: [
			{ id: 1, title: 'title-1' },
			{ id: 2, title: 'title-2' },
			{ id: 3, title: 'title-3' },
		]
	}
});


/**
 * 单个根元素
 *
 * 当构建一个 <blog-post> 组件时，你的模板最终会包含的东西远不止一个标题：
 * 	比如还存在一个正文:
   *
 * 	<h3>{{ title }}</h3>
 * 	<div v-html="content"></div>
 *
 * 	然而你的在模板中尝试这样写，Vue 会显示一个错误，并解释道 every component must have a single root element
 * 	(每个组件必须只有一个根元素)。你可以将模板的内容包裹在一个父元素内，来修复这个问题。
 *
 * 	<div class="blog-post">
 * 		<h3>{{ title }}</h3>
 * 	  <div v-html="content"></div>
 * 	</div>
 */


/**
 * 监听子组件事件
 *
 * Vue 实例提供了一个自定义事件的系统来解决这个问题。
 * 父组件可以像处理 native DOM 事件一样通过 v-on 监听子组件实例的任意事件：
 *
 * 同时子组件可以通过调用内建的 $emit 方法并传入事件名称来触发一个事件:
 *
 */

// Vue.component('blog-post', {
// 	props: ['post'],
// 	template: `
// 		<div class="blog-post">
// 			<h3>{{ post.title }}</h3>
// 			<button
// 				v-on:click="$emit('enlarge-text')"
// 			>
// 				Enlarge text
// 			</button>
// 			<div v-html="post.content"></div>
// 		</div>
// 	`
// });
//
// new Vue({
// 	el: '#example-4',
// 	data: {
// 		posts: [
// 			{ id: 1, title: 'title-1', content: '...content...' },
// 			{ id: 2, title: 'title-2', content: '...content...' },
// 			{ id: 3, title: 'title-3', content: '...content...' },
// 		],
// 		postFontSize: 1
// 	}
// });

/**
 * 使用事件抛出一个值
 *
 * 有时候用一个事件来抛出一个特定的值是非常有用的。例如我们可能想让 <blog-post> 组件决定它的文本要放大多少。
 * 这时可以使用 $emit 的第二个参数来提供这个值:
 *
 * 然后在父级组件监听这个事件的时候，我们可以通过 $event 访问到这个呗抛出的这个值:
 */


Vue.component('blog-post', {
	props: ['post'],
// 	template: `
// 		<div class="blog-post">
// 			<h3>{{ post.title }}</h3>
// 			<button
// <!--				v-on:click="$emit('enlarge-text', 0.1)"-->
// 				v-on:click="onEnlargeText"
// 			>
// 				Enlarge text
// 			</button>
// 			<div v-html="post.content"></div>
// 		</div>
// 	`,

	// 如果这个事件处理函数一个方法: 那么这个值将会作为第一个参数传入这个方法
	template: `
		<div class="blog-post">
			<h3>{{ post.title }}</h3>
			<button
				v-on:click="$emit('enlarge-text', 0.1)"
			>
				Enlarge text
			</button>	
			<div v-html="post.content"></div>
		</div>
	`
});

new Vue({
	el: '#example-4',
	data: {
		posts: [
			{ id: 1, title: 'title-1', content: '...content...' },
			{ id: 2, title: 'title-2', content: '...content...' },
			{ id: 3, title: 'title-3', content: '...content...' },
		],
		postFontSize: 1
	},
	methods: {
		onEnlargeText (enlargeAmount) {
			this.postFontSize += enlargeAmount;
		}
	}
});

/**
 * 在组件上使用 v-model
 * 		自定义事件也可以用于创建支持 v-model 的自定义输入组件。
 */


Vue.component('custom-input', {
	props: ['value'],
	template: `
		<input 
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
		>
	`
});

new Vue({
	el: '#example-5',
	data: {
		searchText: ''
	}
});

/**
 * 通过插槽分发内容：
 *
 * 		和 HTML 元素一样，我们经常需要向一个组件传递内容，像这样:
 * 	<alert-box>
 * 		Something bad happened.
 * 	</alert-box>
 */

Vue.component('alert-box', {
	template: `
		<div class="demo-alert-box">
			<strong>Error!</strong>
			<slot></slot>
		</div>
	`
});

new Vue({
	el: '#example-6',
})


/**
 * 动态组件
 *
 * 有时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里:
 * 详见 动态组件
 *
 * 组件会在 currentTabComponent 改变时改变
 * <component v-bind:is="currentTabComponent"></componnt>
 *
 * currentTabComponent 可以包含：
 * 	 1. 已注册组件的名字，
 * 	 2. 一个组件的选项对象
 */


/**
 * 解析 DOM 模板时的注意事项
 *
 * 有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>, 对于哪些元素可以出现在其内部
 * 是有严格限制的。
 * 而有些元素, 诸如 <li>、<tr>、<option>, 只能出现在其它某些特定的元素内部。
 *
 * 注意:
 * 		如果我们从以下来源使用模板的话，这条限制是不存在的：
 *
 * 			1. 字符串
 * 		  2. 单文件组件
 * 		  3. <script type="text/x-tamplate">
 */







