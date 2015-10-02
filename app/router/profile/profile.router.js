var profileRouter = function ($stateProvider) {
		$stateProvider
			.state('profile',{
				url:'/profile',
				controller: require("./profile.controller.js"),
				controllerAs: 'ctrl',
				bindToController: true,
				templateUrl: 'app/router/profile/profile.template.html',
				title:'Profile'
			});
	};

module.exports = profileRouter;