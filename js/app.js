/**
 * Created by mahesh_kp on 10/8/2015.
 */

var pageStats = angular.module("pageStats",[]);

pageStats.controller("PageStatsController",['$http','$scope',pageStatsController]);

function pageStatsController($http, $scope){
		
		//var url = "http://10.152.144.190/testmicro/rest/micrositevisitor?micrositeName=DOCKER";
       var url = "/microsites/rest/micrositevisitor/getVisitorStats/rest";
	   

        var visitorInfo = $http.get(url);
        visitorInfo.success(function (data, status, headers, config) {
            $scope.visitors = data;
        });

        visitorInfo.error(function (data, status, headers, config) {
            console.log(data + " " + status + " " + headers + " " + config);
        });
		
    var downloadStatsURL = "/microsites/rest/micrositepagevisit/getDownloadStats/rest";


    var downloadStatsInfo = $http.get(downloadStatsURL);
    downloadStatsInfo.success(function (data, status, headers, config) {
        $scope.downloadStats = data;
    });

    downloadStatsInfo.error(function (data, status, headers, config) {
        console.log(data + " " + status + " " + headers + " " + config);
    });



}