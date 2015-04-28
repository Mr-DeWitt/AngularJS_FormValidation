var app = angular.module("form-validation", []);

app.directive('ensureUnique', function ($http) {
    return {
        require: 'ngModel',
        link: function (scope, ele, attrs, c) {
            scope.$watch(attrs.ngModel, function (n) {
                if (!n) return;
                if (c.$viewValue != "Szityu") {
                    c.$setValidity('unique', true);
                } else {
                    c.$setValidity('unique', false);
                }
            });
        }
    }
});

app.controller('signupController', function ($scope) {
    $scope.submitted = false;

    $scope.signupForm = function () {
        if ($scope.signup_form.$valid) {
            alert("Submitted!");
        } else {
            $scope.signup_form.submitted = true;
        }
    }
});

app.directive('ngFocus', [function () {
    var FOCUS_CLASS = "ng-focused";

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            ctrl.$focused = false;

            element.bind('focus', function (evt) {
                element.addClass(FOCUS_CLASS);
                ctrl.$focused = true;
            });

            element.bind('blur', function (evt) {
                element.removeClass(FOCUS_CLASS);
                ctrl.$focused = false;
            });

        }
    }
}]);
