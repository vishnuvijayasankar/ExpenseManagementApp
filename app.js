var expenseManagementApp = angular.module('expenseManagementApp', ['datatables', 'ui.router']);
expenseManagementApp.controller('intialiseController', function($scope, $http, $rootScope, ExpenseDetailsService){
        $rootScope.singleData = [];
	$rootScope.fullData = [];
	});