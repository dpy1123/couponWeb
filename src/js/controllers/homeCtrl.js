app.controller('homeCtrl', ['$scope', 'remoteServ', function($scope, remoteServ) {

    var list = function(){
    	var url = 'http://127.0.0.1:8877/v1/smzdm_data/list';
    	
		var params = {
			"page" : 1,
			"size" : 10,
			"query" :'{"article_date_full":{"$gt":"2016-02-03"}}',
			"sort":'{"article_date_full":-1}'
		}
		
        var promise = remoteServ.httpGet(url, params);

		promise.then(function (data) {  // 调用承诺API获取数据 .resolve
            $scope.list = data.data;
            console.log($scope.list)
        }, function (data) {  // 处理错误 .reject

        });
        
        
    }
    list();
  }]);