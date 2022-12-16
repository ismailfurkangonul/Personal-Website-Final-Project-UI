var app = angular.module('AboutEditApp', []);

app.controller("AboutEditController", function ($scope, $http) {


    angular.element(document).ready(function () {
        $scope.AboutGet();
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

    $scope.AboutGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/About/AboutGet",
            data: { id: $scope.GetUrlParameter("Id") }
        }).then(function (d) {
            $scope.about = d.data.data;
        }, function (d) {
            alert(d.data.errors.Name[0]);
        });
    }



    $scope.AboutEdit = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/About/AboutUpdate",
            data: $scope.about
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Name[0]);
        });
    }

});