var app = angular.module('AboutAddApp', []);

app.controller("AboutAddController", function ($scope, $http) {


    $scope.AboutAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/About/AboutAdd",
            data: $scope.about
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Name[0]);
        });
    }

});