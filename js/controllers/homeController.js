app.controller('homeController', 
function ($scope, UsuarioService) {
    $scope.listarUsuario = function() {
		UsuarioService.listar(function(response){
			console.log(response);
		});
	}
});