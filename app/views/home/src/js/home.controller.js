
/**
 * 
 */
(function(angular) {  
'use strict';

angular
   .module('home.view.controller', [])
.controller('homeController', homeController);

homeController.$inject = [ 
'$scope',
'$timeout'
];

function homeController($scope, $timeout) {
   
$scope.departamentos = [{
      "id": 1,
      "cod": "01",
      "nombre": "Lima"
    }, {
      "id": 2,
      "cod": "02",
      "nombre": "Arequipa"
    }];

 $scope.provincias = [{
      "id": 1,
      "cod":"50",
      "nombre": "Lima",
      "id_dep":1

    }, {
      "id": 2,
      "cod":"51",
      "nombre": "Barranca",
      "id_dep":1
    },
    {
      "id": 3,
      "cod":"63",
      "nombre": "Arequipa",
      "id_dep":2
    },
    {
      "id": 4,
      "cod":"64",
      "nombre": "Caylloma",
      "id_dep":2
    }];

    $scope.distritos = [{
      "id": 1,
      "cod":"202",
      "nombre": "La Molina",
      "id_prov":1
    }, {
      "id": 2,
      "cod":"203",
      "nombre": "San Isidro",
      "id_prov":1
    },
    {
      "id": 2,
      "cod":"267",
      "nombre": "Cercado",
      "id_prov":3
    }];

    activate();

    function activate() {

$scope.provincias.map(function(p) {
p.departamento = $scope.departamentos.filter(function(d) { return d.id == p.id_dep})[0]
});

$scope.distritos.map(function(d) {
d.provincia = $scope.provincias.filter(function(p) { return p.id == d.id_prov})[0]
});

    }

   
}
})(angular);