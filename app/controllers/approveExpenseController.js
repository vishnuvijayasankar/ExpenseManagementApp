expenseManagementApp.controller('approveExpenseController', function($scope, $state, $http, $rootScope){
	$scope.status_approver = false;
	$scope.checkbox = [];
	$scope.notePopup = true;
	$scope.indexArray = {};
	$scope.approve = [
		{val: 'Approve'}, 
		{val: 'Deny'}, 
		{val: 'More Details'}
	];
	$scope.approve_check = function(data, index, event) {
		$rootScope.approveindex = $rootScope.fullData.indexOf(data);
		if ($scope.approve.repeatSelect[index] == ' Approve ') {
			$rootScope.fullData[$rootScope.approveindex].status = 1;
			$scope.status_approver = true;
		}
		else if($scope.approve.repeatSelect[index] == ' Deny '){
			$rootScope.fullData[$rootScope.approveindex].status = 0;
			$scope.status_approver = true;	
		}
		else {
			$rootScope.fullData[$rootScope.approveindex].status = 2;
			$scope.status_approver = true;	
		}
		$scope.indexArray[index] = true;
	}
	$scope.submitNote = function(index) {
		$rootScope.fullData[index].note = $('#note').val();
		console.log($rootScope.fullData);
		$('.overlay').removeClass('display_block');
		$scope.notePopup = $scope.notePopup ? false : true;
	}
	$scope.openURL = function(curretObject){
        window.open(curretObject.invoice);   
    }
    $scope.test = function(data) {
        $rootScope.a = $rootScope.fullData.indexOf(data);
        $rootScope.singleData = $rootScope.fullData[$rootScope.a];
    }
});