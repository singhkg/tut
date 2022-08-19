(function () {
'use strict';
var x1 = function () {
  // do something, PLEASE!
  return "Blah!";
};

angular.module('FirstAngular', [])

.controller('firstController', function ($scope){
$scope.name="gaurav";

});
})();
