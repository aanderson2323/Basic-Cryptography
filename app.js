angular.module("basicCryptography", []);

basicCryptography.controller('ceasarCipherController', function($scope){
	$scope.message = "Ceasar Cipher App goes here";
});

basicCryptography.controller('vigenereController', function($scope){
	$scope.message = "Vigenere Cipher App goes here";
});

basicCryptography.controller('polybiusController', function($scope){
	$scope.message = "Polybius Square App goes here";
});