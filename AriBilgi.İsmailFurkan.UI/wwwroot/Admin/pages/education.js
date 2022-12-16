var app = angular.module('EducationApp', []);

app.controller("EducationController", function ($scope, $http) {

    $scope.GetEducationList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Education/EducationGetList",
        }).then(function (d) {
            $scope.EducationList = d.data.data;
            angular.element(document).ready(function () {
                $("#dtEducation").DataTable({
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/tr.json"
                    }
                });
            });
        });
    }

    $scope.GetEducationList();


    $scope.EducationDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44337/Api/Education/EducationRemove",
            data: { id: id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetEducationList();
        }, function (d) {
            alert(d.data.errors.Name[0]);
        });
    }



});