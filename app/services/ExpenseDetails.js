expenseManagementApp.factory('ExpenseDetailsService', ['$http', '$q', function ($http, $q) {
        return{
            fetchUserDetails: function () {
                return $http.get('http://localhost/ExpenseManagementApp/expense_details.php')
                        .then(
                                function (response) {
                                    console.log(response.data);
                                    return response.data;
                                },
                                function (errResponse) {
                                    console.error('Error while fetching users');
                                    return $q.reject(errResponse);
                                }
                        );

            }
        }
    }]);