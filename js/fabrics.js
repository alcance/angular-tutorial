var fabricApp = angular.module('fabricApp', []);

//fabrica con metodo compartido a controladores
fabricApp.factory('Fabrica', function() {
    var servicio = {
        objeto: {mensaje: 'Saludos desde la Fabrica'},
        msjInicial: function() {
            servicio.objeto['mensaje'] = 'Saludos desde la Fabrica (msjInicial) '
        },
        msjNuevo: function(msj) {
            servicio.objeto.mensaje = msj;
        }
    };

    return servicio;
});

//controlador utilizando facatory con Dato prestablecido
fabricApp.controller('FabricaUno', function($scope, Fabrica){
    $scope.nuevo = function() {
        Fabrica.msjNuevo($scope.nuevoMensaje);
    };
    $scope.dato = Fabrica.objeto;
});

fabricApp.controller('FabricaDos', function($scope, Fabrica) {
    $scope.nuevo = function() {
        Fabrica.msjNuevo($scope.nuevoMensaje);
    };
    $scope.dato = Fabrica.objeto;
});

fabricApp.controller('FabricaTres', function($scope, Fabrica){
    $scope.resetear = function() {
        Fabrica.msjInicial();
    };
});

fabricApp.controller('ControladorUno', function($scope) {
    $scope.dato = {mensaje: 'Saludos desde el Conotrolador Uno'};
});

fabricApp.controller('ControladorDos', function($scope) {
    $scope.dato = {mensaje: 'Saludos desde el Controlador Dos'};
});
