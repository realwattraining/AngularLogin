var app = angular.module("myapp", []);
app.controller("mycontroller", ["$scope",
    function($scope) {

        $scope.name = "Mai Veasna";
        $scope.sex = "Male";
        $scope.age = 22;
        $scope.sum = function(a, b) {
            return a + b;
        }
        $scope.devide = function(c, d) {
            return c - d;
        }

    }
]);

app.controller("mycon", ["$scope", function($scope) {
    $scope.class = "E1";
    $scope.year = "y3";
}]);

app.controller("reNameStudent", function($scope) {
    $scope.student = {
        firstName: "Mai",
        lastName: "Veasna",
        fullName: function() {
            var objstu = $scope.student;
            return objstu.firstName + "  " + objstu.lastName;

        },



    }
});

// function studentController($scope, $http) {
//     var url = "/data.txt"; //file data include

//     $http.get(url).then(function(response) {
//         $scope.students = response.data;
//     });
// }