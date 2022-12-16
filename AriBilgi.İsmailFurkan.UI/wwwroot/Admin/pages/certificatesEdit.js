var app = angular.module('CertificatesEditApp', []);

app.controller("CertificatesEditController", function ($scope, $http) {


    angular.element(document).ready(function () {
        $scope.CertificatesGet();
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

    $scope.CertificatesGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Certificates/CertificatesGet",
            data: { id: $scope.GetUrlParameter("Id") }
        }).then(function (d) {
            $scope.certificates = d.data.data;
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



    $scope.CertificatesEdit = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Certificates/CertificatesUpdate",
            data: $scope.certificates
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});