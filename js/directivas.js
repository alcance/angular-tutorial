angular.module('directivaSimple', [])

.controller('Controlador', function($scope){
    $scope.texto1 = {titulo: 'Directiva', subtitulo: 'AngularJS'};
    $scope.texto2 = {titulo: 'Otro Objeto', subtitulo: 'como parametro'};
})
/*
.controller('Controlador2', function($scope){
    $scope.texto = {titulo: 'Controlador', subtitulo: 'dos'};
})
*/

/*
Una Directiva es un bloque reusable de codigo en una vista (partial).
Permite mostrar datos de un controlador.
*/

.directive('miEncabezado', function() {
    return {
        restrict: 'E',
        scope: {
            textoVariable: '=texto'
        },
        templateUrl: 'mi-encabezado.html'
    }
});
