angular.module('myFormApp', [])
	// .run(function($rootScope){

	// 	})
	.controller('RegisterFormctrl', ['$scope', function($scope){

		$scope.submitRegistration = function(e, form){
			e.preventDefault();
			console.log(form);
		}
	}])
	.controller('ReportFormCtrl', ['$scope', function($scope){

		$scope.submitReport = function(e, form){
			e.preventDefault();
			console.log(form);
		}

	}]);