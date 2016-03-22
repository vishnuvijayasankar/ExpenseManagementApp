expenseManagementApp.factory('ExpenseDetailsService' ,['$http' ,'$q', function($http ,$q){
    return{
        fetchUserDetails: function() {
            return $http.get('app/json/expense_details.json')
                    .then(
                            function(response){
                                return response.data;
                            },
                            function(errResponse){
                                console.error('Error while fetching users');
                                return $q.reject(errResponse);
                            }
                    );
        }
    }
}]);