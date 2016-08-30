var myApp = angular.module("myApp", []);

myApp.factory("dataService", function () {
    return {
        question: {
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2013',
            answers:
            [{
                text: 'AngularJS!',
                author: 'Вова Сидоров',
                date: '20/10/2013',
                rate: 2
            }, {
                text: 'AngularJS лучше всех',
                author: 'Олег Кузнецов',
                date: '21/10/2013',
                rate: 3
            }]
        }
    };
});

myApp.controller('QuestionCtrl', function ($scope, dataService) {

    $scope.sortparam = 'rate';
    $scope.question = dataService.question;

    $scope.voteUp = function (answer) {
        answer.rate++;
    };
    $scope.voteDown = function (answer) {
        answer.rate--;
    };
    $scope.questColorClass = "questcolor";
    $scope.changeClass = function (e) {

        $scope.questColorClass = e.type == "mouseover" ? "questselectedcolor" : "questcolor";
    }
});

myApp.controller('Question2Ctrl',
    function QuestionController($scope, $http) {

        $scope.loaded = false;

        $scope.load = function () {
            $http.get('data.json').
             success(function (data) {
                 $scope.question = data.question;
                 $scope.loaded = true;
             })
        };
        $scope.voteUp = function (answer) {
            answer.rate++;
        };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
)

myApp.controller("AnswerCtrl", function ($scope) {
    $scope.save = function (answer, answerForm) {
        if (answerForm.$valid)
            alert(answer.author + ", Ваш ответ сохранён");
    };
});

myApp.filter("formatText", function () {
    return function (text) {
        if (text.indexOf("knockout") !== -1)
            return "######";
        else
            return text;
    }
});