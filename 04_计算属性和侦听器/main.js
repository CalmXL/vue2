/**
 * 计算属性
 * 		模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重，难以维护。
 */

new Vue({
	el: '#app',
	data () {
		return {
			message: 'Hello Vue!'
		}
	}
});

new Vue({
	el: '#app-2',
	data: {
		message: 'Hello'
	},
	computed: {
		/**
		 * Vue 知道 vm.reversedMessage 依赖于 vm.message, 因此当 vm.message 改变的时候，所有依赖 vm.reversedMessage
		 * 的绑定也会更新。
		 * 而我们已经以声明的方式创建了这种依赖关系：
		 * 		计算属性的 getter 函数是没有副作用的。
		 * @returns {string}
		 */
		reversedMessage () {
			return this.message.split('').reverse().join('');
		}
	},

	/**
	 * 计算属性缓存 vs 方法
	 * 		你可能会疑问： 我们也可以通过在表达式中调用方法来达到同样的效果：
	 *
	 *  虽然达到的效果是相同的。然而不同的是 ** 计算属性是基于它们的响应式依赖进行缓存的。 ** 只在相关响应式依赖发生改变时，才会重新求值。
	 *  这意味着只要 message 还没有发生改变, 多次访问 reversedMessage 计算属性会立即返回之前的结果，而不必再次执行函数。
	 *
	 *  相比之下，每当重新触发渲染时，调用方法将总会执行函数。
	 */
	methods: {
		reversedMessageFun () {
			return this.message.split('').reverse().join('');
		}
	}
});

/**
 * 计算属性 vs 侦听属性
 *
 * 	 Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动: 侦听属性。
 * 	 但我们有一些数据要随着其他数据变动而变动时，你很容易滥用 watch.
 */

const app3 = new Vue({
	el: '#app-3',
	data: {
		firstName: 'Foo',
		lastName: 'Bar',
		fullName: 'Foo Bar'
  },
	watch: {
		firstName: function (val) {
			this.fullName = val + '' + this.lastName;
		},
		lastName: function (val) {
			this.fullName = this.firstName + '' + val;
		}
	}
})

// 上面的代码时命令式且重复的。将它与计算属性的版本进行比较
const app4 = new Vue({
	el: '#app-4',
	data: {
		firstName: 'Far',
		lastName: 'Bar'
	},
	computed: {
		fullName: function () {
			return this.firstName + ' ' + this.lastName;
		}
	}
})

/**
 * 计算属性的 setter
 *
 * 		计算属性默认只有 getter, 不过在需要时你也可以提供一个 setter:
 */

const app5 = new Vue({
	el: '#app-5',
	data: {
		firstName: 'Far',
		lastName: 'Bar'
	},
	computed: {
		fullName: {
			get: function () {
				return this.firstName + ' ' + this.lastName;
			},
			set: function (newValue) {
				var names = newValue.split(' ');
				this.firstName = names[0];
				this.lastName = names[names.length - 1];
			}
		}
	}
})

app5.fullName = 'xu lei'


/**
 * 侦听器：
 * 		虽然计算属性在大多数的情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue  通过 watch 选项提供了
 * 	一个更通用的方法，来响应数据的变化。
 * 		当需要在数据变化的时候执行异步或开销较大的操作时，这个方式是最有用的。
 */

const app6 = new Vue({
	el: '#app-6',
	data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!'
	},
	watch: {
		question: function (newQuestion, oldQuestion) {
			this.answer = 'Waiting for you to stop typing ...';
			this.debouncedGetAnswer();
		}
	},
	created: function () {
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
	},
	methods: {
		getAnswer: function () {
			if (this.question.indexOf('?') === -1) {
				this.answer = 'Question usually contain a question mark. ;-)';
				return;
			}
			this.answer = 'Thinking...';
			let vm = this;

			axios.get('https://yesno.wtf/api')
				.then(function (res) {
					vm.answer = _capitalize(res.data.answer);
				})
				.catch(function (error) {
					vm.answer = 'Error! Could not reach the API. ' + error;
				})
		}
	}
})