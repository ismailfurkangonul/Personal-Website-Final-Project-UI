var app = angular.module('CertificatesApp', []);

app.controller("CertificatesController", function ($scope, $http) {

    $scope.GetCertificatesList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Certificates/CertificatesGetList",
        }).then(function (d) {
            $scope.CertificatesList = d.data.data;
            angular.element(document).ready(function () {
                $("#dtCertificates").DataTable({
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/tr.json"
                    }
                });
            });
        });
    }

    $scope.GetCertificatesList();


    $scope.CertificatesDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Certificates/CertificatesRemove",
            data: { id: id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetCertificatesList();
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



});