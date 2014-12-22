angular.module('todoApp', [])

.controller('ControladorTareas', function ($scope) {
    $scope.tareas = [
        {texto: 'Ser superman en Angujar', hecho: true},
        {texto: 'Crear una app Todo', hecho: false},
        {texto: 'Comprar un Avión', hecho: false}
    ];
    $scope.agregarTarea = function() {
        $scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false});
        $scope.textoNuevaTarea = '';
    };

    $scope.restantes = function() {
        var cuenta = 0;
        angular.forEach($scope.tareas, function(tarea) {
            // le sumamos 1 si la tarea fue hecha y 0 si no fue hecha
            cuenta += tarea.hecho ? 0 : 1;
        });
        return cuenta;
    };

    $scope.eliminar = function() {
        var tareasViejas = $scope.tareas;
        $scope.tareas = [];
        angular.forEach(tareasViejas, function(tarea) {
            if (!tarea.hecho) $scope.tareas.push(tarea);
        });
    };
});
