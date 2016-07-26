var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http) {
   var url = 'http://feeds.feedburner.com/tedtalks_video';
    $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url)).success(function (data) {
        $scope.responseData = data.responseData.feed.entries;
    });
});

myApp.filter('unsafe', function($sce) {

    return function(val) {

        return $sce.trustAsHtml(val);

    };

});
