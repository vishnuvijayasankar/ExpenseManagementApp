expenseManagementApp.controller('expenseController', function($scope, $state, $http, ExpenseDetailsService, $rootScope, $timeout){
    $scope.showAddExpense = true;
    $scope.notePopup = true;
    $rootScope.user = localStorage.getItem("name");
    $rootScope.user_type = localStorage.getItem("user_type");
    $scope.checked = true;
    $scope.detail_edit_save = false;
     $scope.popup = function() {
        $('.overlay').addClass('display_block');
        $scope.notePopup = $scope.notePopup ? false : true;   
    }
    $scope.popupClose = function() {
        $('.overlay').removeClass('display_block');
        $scope.notePopup = $scope.notePopup ? false : true;
    }
    $scope.test = function(data) {
        $rootScope.a = $rootScope.fullData.indexOf(data);
        $rootScope.singleData = $rootScope.fullData[$rootScope.a];
    }
    $scope.submitNote = function() {
        $scope.note_model = $('#note').val();
        $scope.d = new Date();
        $scope.date_time = $scope.d.toDateString() + ' ' + $scope.d.toTimeString().split(" ")[0];
        console.log($scope.date_time);
        debugger
        $rootScope.fullData[$rootScope.a].note_array.push({ 'note':$scope.note_model, 'user':$rootScope.user, 'time': $scope.date_time });
        $rootScope.singleData = $rootScope.fullData[$rootScope.a];
        $scope.popupClose();
        $('#note').val('');
    }
    $scope.submit_detailpage = function() {
        $scope.checked = true;
        $scope.singleData.date = $('#date_detail').val();
        if ($scope.singleData.pm == 'Nishin') {
            $rootScope.fullData[$rootScope.a] = $scope.singleData;
        }else {
            $rootScope.fullData[$rootScope.a] = $scope.singleData;
        }
    }
    $scope.edit_click = function() {
        $scope.detail_edit_save = true;
        $( "#date_detail" ).datepicker({ dateFormat: 'dd-mm-yy' });
        $scope.checked = false;
    }
    $scope.showAddForm = function() {
        $scope.date = "";
        $scope.purpose = "";
        $scope.pm = "";
        $scope.rate = "";
        $( "#datepicker" ).datepicker({ dateFormat: 'dd-mm-yy' });
        $('.add_error').hide();
        $('.shadow-div').addClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
    $scope.submitAdd = function() {
        $scope.invoice = 'No file chosen';
        $scope.date = $('#datepicker').val();
        if ($scope.currency == '$') {
            $scope.rate = Math.round($scope.rate * 66.41 * 100) / 100;
        }
        else if ($scope.currency == '£') {
            $scope.rate = Math.round($scope.rate * 95.91 * 100) / 100;
        }
        else{
            $scope.rate = $scope.rate * 1;
        }
        if ($scope.date == "" || $scope.purpose ==" " || $scope.pm == "" || $scope.rate == "") {
            $('.add_error').show();
            $('.add_error').html('Enter all details..');
            return false;
        } else {
            if( $rootScope.user == "lavya") {
                if ($scope.pm== 'Nishin') {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 0, 'reimburse' : '', 'invoice' : $scope.invoice, 'note_array' : [{"note" :"0"}]});
                }else {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 1, 'reimburse' : '', 'invoice' : $scope.invoice, 'note_array' : [{"note" :"0"}]});
                }
            }else if( $rootScope.user == "vishnu") {
                if ($scope.pm== 'Nishin') {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 0, 'reimburse' : '', 'invoice' : $scope.invoice, 'note_array' : [{"note" :"0"}]});
                }else {
                    $rootScope.fullData.push({ 'date':$scope.date, 'purpose': $scope.purpose,'project':$scope.project, 'pm':$scope.pm, 'rate':$scope.rate, 'name' : $rootScope.user, 'status' : 1, 'reimburse' : '', 'invoice' : $scope.invoice, 'note_array' : [{"note" :"0"}]});
                }
            }
            $('.shadow-div').removeClass('display_block');
            $scope.showAddExpense = $scope.showAddExpense ? false : true;
        }
        console.log($scope.currency);
    }
    $scope.hideAdd = function() {
        $('.shadow-div').removeClass('display_block');
        $scope.showAddExpense = $scope.showAddExpense ? false : true;
    }
    $scope.readURL = function( element, currentObj){
        if (element.files && element.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $scope.invoice = e.target.result;
                    // $timeout(function(){
                        $rootScope.$apply(function() {
                            currentObj.invoice = $scope.invoice;
                        });
                // });
            }
        reader.readAsDataURL(element.files[0]);
        }
    }
    $scope.openURL = function(curretObject) {
        window.open(curretObject.invoice);   
    }
});