var app = angular.module('CertificatesAddApp', []);

app.controller("CertificatesAddController", function ($scope, $http) {


    $scope.CertificatesAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Certificates/CertificatesAdd",
            data: $scope.certificates
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});