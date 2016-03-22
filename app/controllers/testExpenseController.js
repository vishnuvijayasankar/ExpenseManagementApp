expenseManagementApp.controller('testExpenseController', function($scope, $state, $rootScope, $http, $parse, $timeout){
	$http.get('app/json/expense_details.json').success(function(response) {
	    $rootScope.user1=response.user1[0].name;
	    $rootScope.user2=response.user2[0].name;
    })
   $rootScope.reimburse = [];
	$scope.showAddTestExpense = true;

	// $scope.reimburse = function(modelName, index) {
	// 	$rootScope.modelName = modelName;
	// 	$rootScope.index_reimburse = index;
	// 	$('.shadow-div').addClass('display_block');
 //        $scope.showAddTestExpense = $scope.showAddTestExpense ? false : true;
	// };
	$scope.submit_reimburse = function() {
		debugger;
		$rootScope.fullData[$rootScope.index_reimburse].reimburse = $scope.amount;
		$scope.amount = "";
		$scope.showAddTestExpense = $scope.showAddTestExpense ? false : true;
		$('.shadow-div').removeClass('display_block');
	};
	$scope.cancel_reimburse = function() {
		$scope.showAddTestExpense = true;
		$('.shadow-div').removeClass('display_block');
	};	
	$scope.test = function(data) {
        $rootScope.a = $rootScope.fullData.indexOf(data);
        $rootScope.singleData = $rootScope.fullData[$rootScope.a];
        console.log($rootScope.singleData);
    }
    $scope.reimburse_amount = function(data) {
    	$rootScope.index_reimburse = $rootScope.fullData.indexOf(data);
    	var amnt = $rootScope.fullData[$rootScope.index_reimburse].reimburse;
    	$('#reimburse_text').val(amnt);
    	$('.shadow-div').addClass('display_block');
        $scope.showAddTestExpense = $scope.showAddTestExpense ? false : true;
    }
});