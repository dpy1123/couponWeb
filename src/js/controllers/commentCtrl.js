app.controller('commentCtrl', ['$scope', '$routeParams', 'remoteServ', function($scope, $routeParams, remoteServ) {

	var site = $routeParams.site;
	var article_id = $routeParams.article_id;
	
	console.log("log: ",site,article_id);
	
	
    var list = function(){
    	var url = 'http://127.0.0.1:8877/v1/smzdm_comment/list';
    	
		var params = {
			"page" : 1,
			"size" : 20,
			"query" :'{"article_id": "'+article_id+'"}',
			"sort": '{"create_date": -1}'
		}
		
        var promise = remoteServ.httpGet(url, params);

		promise.then(function (data) {  // 调用承诺API获取数据 .resolve
            $scope.list = data.data;
        }, function (data) {  // 处理错误 .reject

        });
        
        
    }
    list();
}]);