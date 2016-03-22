expenseManagementApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
    .state('/', {
        url: "/",
        templateUrl: 'app/views/login.html',
        controller : 'loginController'
    })
    .state('/expense', {
        url: "/expense",
        templateUrl: 'app/views/expense.html',
        controller : 'expenseController'
    })
    .state('/testexpense', {
        url: "/testexpense",
        templateUrl: 'app/views/testexpense.html',
        controller : 'testExpenseController',
    })
    .state('/approverexpense', {
        url: "/approverexpense",
        templateUrl: 'app/views/approveExpense.html',
        controller : 'approveExpenseController',
    })
    .state('/details_page', {
        url: "/details_page",
        templateUrl: 'app/views/details_page.html',
        controller : 'expenseController',
    })
    // $locationProvider.html5Mode(true);
});
