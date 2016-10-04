(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {

    $scope.lunchMenu="";
    $scope.countDishes = function () {

      var dishes= splitString($scope.lunchMenu,",");

      if (dishes<=3) {
        $scope.message="Enjoy!"
      } else {
        $scope.message="Too much food!"
      }
    };

    function splitString(stringToSplit, separator) {

      var count=0;
      var arrayOfStrings = stringToSplit.split(separator);
      for (var i = 0; i < arrayOfStrings.length; i++) {
        count++;
      }

      return count;
    }



  };




})();
