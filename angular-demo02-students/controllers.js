angular.module('MyStudentsControllers', [])

.controller('operation', function($scope) {

    $scope.sum = function() {
        var op1 = parseInt($scope.op1)
        var op2 = parseInt($scope.op2)
        return op1 + op2
    }

    $scope.sumPow = function() {
        var op1 = Math.pow($scope.op1, 2)
        var op2 = Math.pow($scope.op2, 2)
        return op1 + op2
    }

})


.controller('StudentsController', function($scope) {
    var students = ['Carles', 'Jonas', 'Bijay', 'Josep', 'Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']
    $scope.students = students

    $scope.addStudent = function(e) {
        e.preventDefault()
        console.log($scope.name)
        $scope.students.push($scope.name)
        $scope.name = ""
    }

    $scope.removeStudent = function(index) {
        $scope.students.splice(index, 1)
    }
})


.controller('studentsSearchController', function($scope) {
    var studList = [{
        "id": "1",
        "name": "Stívali Serna",
        "mail": "stivaliserna08@gmail.com",
        "github": "https://github.com/stivaliserna"
    }, {
        "id": "2",
        "name": "Xavier Meroño",
        "mail": "x.merono@gmail.com",
        "github": "https://github.com/xmero"
    }, {
        "id": "3",
        "name": "Bijay Timilsina",
        "mail": "bjtimi.007@hotmail.com",
        "github": "https://github.com/bijay007"
    }, {
        "id": "4",
        "name": "Ernesto Parra",
        "mail": "ernesto-parra@hotmail.com",
        "github": "https://github.com/ERPG"
    }, {
        "id": "5",
        "name": "Francisco Lopez",
        "mail": "frans.lopez.m@gmail.com",
        "github": "https://github.com/FransLopez"
    }, {
        "id": "6",
        "name": "Ignasi Amargos",
        "mail": "amargos.ignasi@gmail.com",
        "github": "https://github.com/IggyA/js-exercises"
    }, {
        "id": "7",
        "name": "Jonas Rodon",
        "mail": "jonasrodon@gmail.com",
        "github": "https://github.com/JonasRodon"
    }, {
        "id": "8",
        "name": "Josep Otal",
        "mail": "j.otal.pares@gmail.com",
        "github": "https://github.com/josepotal"
    }, {
        "id": "9",
        "name": "Oscar Viciana",
        "mail": "vicfer.oscar@gmail.com",
        "github": "https://github.com/oviciana"
    }, {
        "id": "10",
        "name": "Alejandro Vazquez",
        "mail": "alejovp@gmail.com",
        "github": "https://github.com/alejovp"
    }, {
        "id": "11",
        "name": "Carles Far",
        "mail": "litulandio@gmail.com",
        "github": "https://github.com/LITULANDIO"
    }, {
        "id": "12",
        "name": "Ezequiel Cucchiararo",
        "mail": "ezequiel.cucchiararo@gmail.com",
        "github": "https://github.com/EzequielGomezCucchiararo"
    }]

    $scope.studList = studList

    console.log(studList)


})



