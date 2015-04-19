angular.module('userCtrl', ['userService'])

.controller('UserController', function(User) {
	var vm = this;
	// vm.processing = true;
	User.all()
		.success(function(data) {
			vm.users = data;
		})
})

.controller('UserCreateController', function(User,$location,$window) {
	var vm = this;
	vm.signupUser = function(){
		vm.message = '';
		User.create(vm.userData)
			.then(function(repsonse) {
				vm.userData = {};
				vm.message = repsonse.data.message;
				$window.localStorage.setItem('token', repsonse.data.token);
				$location.path('/');
			})
	}
})