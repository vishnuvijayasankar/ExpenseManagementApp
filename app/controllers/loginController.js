expenseManagementApp.controller('loginController', function ($scope, $location, $state, $rootScope, $http, ExpenseDetailsService) {
    $scope.submitForm = function () {

        $http({
            url: 'http://localhost/ExpenseManagementApp/login.php',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param({email: $scope.email, password: $scope.password})
        }).
                success(function (data) {
                    // here the data from the api is assigned to a variable named users
                    $scope.users = data;
                    $rootScope.singleData = [];
                    $rootScope.fullData = [];
                    ExpenseDetailsService.fetchUserDetails().then(function (response) {

                        for (var i = 0; i < response.user1.length; i++) {
                            $rootScope.fullData.push(response.user1[i]);
                        }
                        ;
                    })
                    if ($scope.email == "" || $scope.password == "" || $scope.email == undefined || $scope.password == undefined) {

                        $('#show_error').show();
                        $('#show_error').html('Enter all details..');
                        return false;
                    }
                    else if($scope.users=="")
                    {
                        $('#show_error').show();
                        $('#show_error').html('Incorrect user credentials..');
                        return false;
                    }
                    else {
                        var email = $scope.users[0].email;
                        var password = $scope.users[0].password;
                        var username = $scope.users[0].username;
                        var user_id = $scope.users[0].user_id;
                        if ($scope.email.indexOf('@') == -1) {
                            $('#show_error').show();
                            $('#show_error').text('Enter a valid email');
                            return false;
                        } else {
                            if ($scope.email == email && $scope.password == password) {

                                $rootScope.user = username;
                                localStorage.setItem("name", username);
                                localStorage.setItem("user_type", "user");
                                $state.go('/expense');
                            }
                            else if ($scope.email == "test@qburst.com" && $scope.password == "test") {
                                $rootScope.total = 0;
                                $rootScope.total2 = 0;
                                for (var i = 0; i < $rootScope.fullData.length; i++) {
                                    if ($rootScope.fullData[i].name == 'lavya') {
                                        if ($rootScope.fullData[i].status == 1) {
                                            $rootScope.total += $rootScope.fullData[i].rate;
                                        }
                                    } else if ($rootScope.fullData[i].name == 'vishnu') {
                                        if ($rootScope.fullData[i].status == 1) {
                                            $rootScope.total2 += $rootScope.fullData[i].rate;
                                        }
                                    }
                                    ;
                                }
                                ;
                                $rootScope.user = 'admin';
                                localStorage.setItem("name", "admin");
                                localStorage.setItem("user_type", "admin");
                                $state.go('/testexpense');
                            }
                            else if ($scope.email == "nishin@qburst.com" && $scope.password == "nishin") {
                                $rootScope.user = 'nishin';
                                localStorage.setItem("name", "nishin");
                                localStorage.setItem("user_type", "approver");
                                $state.go('/approverexpense');
                            }
                            else {
                                $('#show_error').html('Enter correct details..');
                                $('#email').val("");
                                $('#password').val("");
                            }
                        }
                    }
                    
                });
        ;
    };
});