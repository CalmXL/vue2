// var data = {
// 	a : 1
// };
//
// var vm = new Vue({
// 	el: '#app',
// 	data: data,
// 	methods: {
// 		change () {
// 			this.a = 100;
// 			this.b = 123;
// 		}
// 	}
// });
//
// console.log(vm.a == data.a); // => true

// 设置 property 会影响到原始数据
// vm.a = 2;
// console.log(data.a); // => 2

// 反之亦然
// data.a = 3;
// console.log(vm.a); // => 3

// 注意：只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。
// vm.b = 'hi';

// setTimeout(() => {
// 	vm.b = 'hello';
// 	vm.a = '100';
// }, 1000)


// var obj = {
// 	foo: 'bar'
// };
//
// Object.freeze(obj);
//
// new Vue({
// 	el: '#app',
// 	data: obj
// })


/**
 * Vue 实例还暴露了一些有用的实例 property 与方法，它们都有前缀 $. 以便与用户定义的 property 进行区分。
 */

// var data = { a : 1 };
// var vm = new Vue({
// 	el: '#example',
// 	data: data
// });
//
// console.log(vm.$data === data); // => true
// console.log(vm.$el === document.getElementById('example')); // => true
//
// vm.$watch('a', function (newVal, oldVal) {
// 	console.log(newVal, oldVal)
// });



// 实例的生命周期钩子
new Vue({
	data: {
		a: 1
	},
	created: function () {
		console.log('a is : ' + this.a);
	}
})

