app.controller('myctrl', function ($scope, myfactory) {
    $scope.show = function () {
        $scope.result = $scope.firstnumber + $scope.secondnumber;
    }
    $scope.print = function () {
        $scope.result2 = myfactory.add(100, 200);
    }
});