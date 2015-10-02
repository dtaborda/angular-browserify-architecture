var homeRouter = function ($stateProvider) {
		$stateProvider
			.state('home',{
				url:'/',
				controller: require("./home.controller.js"),
				controllerAs: 'ctrl',
				bindToController: true,
				templateUrl: 'app/router/home/home.template.html',
				title:'Home'
			});
	};

module.exports = homeRouter;