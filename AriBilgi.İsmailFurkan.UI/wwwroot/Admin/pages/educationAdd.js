var app = angular.module('EducationAddApp', []);

app.controller("EducationAddController", function ($scope, $http) {


    $scope.EducationAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Education/EducationAdd",
            data: $scope.education
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});