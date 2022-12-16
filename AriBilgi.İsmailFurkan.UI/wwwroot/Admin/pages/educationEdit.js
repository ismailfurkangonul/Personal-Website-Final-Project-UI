var app = angular.module('EducationEditApp', []);

app.controller("EducationEditController", function ($scope, $http) {


    angular.element(document).ready(function () {
        $scope.EducationGet();
    });


    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
    }

    $scope.EducationGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Education/EducationGet",
            data: { id: $scope.GetUrlParameter("Id") }
        }).then(function (d) {
            $scope.education = d.data.data;
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



    $scope.EducationEdit = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Education/EducationUpdate",
            data: $scope.education
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});