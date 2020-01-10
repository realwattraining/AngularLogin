var app = angular.module("myapp", []);
app.controller("con", ["$scope", function($scope) {
    $scope.errorEmail = false;
    $scope.errorPassword = false;
    $scope.errorConfirm = false;
    $scope.title = "Log In";
    $scope.changNameBtnRegister = "Register"

    $scope.changNameBtn = "Log In";
    // user Data  login
    $scope.users = [
        { email: "veasna@gmail.com", password: "123" },
        { email: "nana@gmail.com", password: "1234" },
        { email: "tata@gmail.com", password: "12345" },
    ];
    //function save or Log In 
    $scope.user = function() {
            if ($scope.changNameBtn === "Log In") {
                $scope.login();
            } else {
                $scope.registerUser();
            }
        }
        // Creat Function log in use in Button Log In
    $scope.login = function() {
            $scope.nullValue();
            if ($scope.errorEmail === true) {
                $scope.errorEmail = "Please Enter Email";
            } else if ($scope.errorPassword === true) {
                $scope.errorPassword = "Please Enter Password";
            } else {
                $scope.errorEmail = false;
                $scope.errorPassword = false;
                if ($scope.validationUser($scope.email, $scope.password) === true) {
                    alert("Login Successfull");
                } else {
                    alert("User not found plese try again");
                }
            }
        }
        // validation email and Password Null Value
    $scope.nullValue = function() {
            //alert($scope.email);
            if ($scope.email == undefined || $scope.email === "") {
                $scope.errorEmail = true;
                $scope.errorPassword = false;
            } else if ($scope.password == undefined || $scope.password === "") {
                $scope.errorEmail = false;
                $scope.errorPassword = true;
            } else if ($scope.changNameBtn != "Log In") {
                if ($scope.confirm == undefined || $scope.confirm === "") {
                    $scope.errorEmail = false;
                    $scope.errorPassword = false;
                    $scope.errorConfirm = true;
                }
            }

        }
        // Validation User log In
    $scope.validationUser = function(txtEmail, txtPassword) {
        var vali = false;
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === txtEmail && $scope.users[i].password === txtPassword) {
                vali = true;
                break;
            } else {
                vali = false;
            }
        }
        return vali;
    }

    // Greate function Event Click Register User Account
    $scope.EventRegister = function() {
            console.log($scope.confirm);
            $scope.title = "Register";
            $scope.changNameBtn = "Save";
            $scope.ClearText();
            if ($scope.changNameBtnRegister === "Back") {
                window.location.reload();
            }
            $scope.changNameButton();
            $scope.confirmm = true;

        }
        //Create Function Register User
    $scope.registerUser = function() {
        $scope.nullValue();
        if ($scope.errorEmail === true) {
            $scope.errorEmail = "Please Enter Email";
        } else if ($scope.errorPassword === true) {
            $scope.errorPassword = "Please Enter Password";
        } else if ($scope.confirm == true) {
            $scope.errorConfirm = "Please Confirm Password";
        } else if ($scope.confirm != $scope.password) {
            $scope.errorConfirm = "Confirm Password correct";
            $scope.confirm = "";
        } else {
            $scope.errorEmail = false;
            $scope.errorPassword = false;
            $scope.errorConfirm = false;
            alert("Email :" + $scope.email + " Password :" + $scope.password + " Confirm Password :" + $scope.confirm + "");
            $scope.ClearText();
        }
    }

    //Function Clear Input Text Went U Click register
    $scope.ClearText = function() {
            $scope.email = "";
            $scope.password = "";
            $scope.confirm = "";
            $scope.errorEmail = false;
            $scope.errorPassword = false;
            $scope.errorConfirm = false;
        }
        // Create Function Chang Button Name
    $scope.changNameButton = function() {
        if ($scope.changNameBtn != "Log In") {
            $scope.changNameBtnRegister = "Back";
        }
    }


}]);