var panelApp = angular.module('panelApp', ['ngRoute']);

panelApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/inicio.html'
    })
    .when('/tareas', {
        controller: 'ControladorTareas',
        templateUrl: 'partials/tareas.html'
    })
    .when('/empleados', {
        controller: 'ControladorEmpleados',
        templateUrl: 'partials/empleados.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

panelApp.factory('Empleados', function(){
    return [
      {
        nombre:'Ana', paterno: 'Guzman', materno: 'Guzman', primerDia: new Date(),
        salario: 12000, telefono:'5587687687', bono: 1.456789
      },
      {
        nombre:'Adrian', paterno: 'Romero', materno: 'Paez', primerDia:  new Date(),
        salario: 12000, telefono:'5512345678', bono: 9.654321
      },
      {
        nombre:'Rodolfo', paterno: 'Solares', materno: 'Madero', primerDia:  new Date(),
        salario: 14000, telefono:'5587654321', bono: 7.333333
      },
      {
        nombre:'Manuel', paterno: 'Perez', materno: 'Solin', primerDia:  new Date(),
        salario: 11000, telefono:'5518273645', bono: 5.272727
      },
      {
        nombre:'Dana', paterno: 'Roman', materno: 'Herrera', primerDia:  new Date(),
        salario: 20000, telefono:'5581726354', bono: 1.444444
      },
      {
        nombre:'Alejandro', paterno: 'Mena', materno: 'Morales', primerDia:  new Date(),
        salario: 5000, telefono:'5512312312', bono: 12.989898
      },
      {
        nombre:'Ivan', paterno: 'Martinez', materno: 'Agüero', primerDia:  new Date(),
        salario: 50000, telefono:'5512315312', bono: 20.989898
      }
    ];
});

panelApp.factory('Tareas', function(){
    return [
        {texto: 'Ser superman en Angujar', hecho: true},
        {texto: 'Crear una app Todo', hecho: false},
        {texto: 'Comprar un Avión', hecho: false}
    ];
});

panelApp.controller('ControladorTareas', function($scope, Tareas){
    $scope.tareas = Tareas;

    $scope.agregarTarea = function() {
        $scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false});
        $scope.textoNuevaTarea = ''
    };

    $scope.restantes = function() {
        var cuenta = 0;
        angular.forEach($scope.tareas, function(tarea) {
            // le sumamos 1 si la tarea fue hecha y 0 si no fue hecha
            cuenta += tarea.hecho ? 0 : 1;
        });
        return cuenta
    };

    $scope.eliminar = function() {
        var tareasViejas = $scope.tareas;
        $scope.tareas = [];
        angular.forEach(tareasViejas, function(tarea) {
            if (!tarea.hecho) $scope.tareas.push(tarea);
        });
    };
});

panelApp.controller('ControladorEmpleados', function($scope, Empleados){
    $scope.empleados = Empleados;

    $scope.ordenarPor = function(orden) {
        $scope.ordenSeleccionado = orden;
    };
});
