myApp.directive("answerList", function () {
    return {
        link: function (scope, element, attrs) {

            scope.data = scope[attrs["answerList"] || attrs["source"]];
        },
        restrict: "A",
        templateUrl: "templates/answersTemplate.html"
    }
});