var app = angular.module('AboutApp', []);

app.controller("AboutController", function ($scope, $http) {

    $scope.GetAboutList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/About/AboutGetList",
        }).then(function (d) {
            $scope.AboutList = d.data.data;
            angular.element(document).ready(function () {
                $("#dtAbout").DataTable({
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/tr.json"
                    }
                });
            });
        });
    }

    $scope.GetAboutList();


    $scope.AboutDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/About/AboutRemove",
            data: { id: id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetAboutList();
        }, function (d) {
            alert(d.data.errors.Name[0]);
        });
    }



});