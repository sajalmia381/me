import _ from 'lodash';

class TiUtils {
	static setRoutes(config, defaultAuth) {
		let routes = [...config.routes];

		routes = routes.map(route => {
			let auth = config.auth || config.auth === null ? config.auth : defaultAuth || null;
			auth = route.auth || route.auth === null ? route.auth : auth;
			const settings = _.merge({}, config.settings, route.settings);

			return {
				...route,
				settings,
				auth
			};
		});

		return [...routes];
	}

	static generateRoutesFromConfigs(configs, defaultAuth) {
		let allRoutes = [];
		configs.forEach(config => {
			allRoutes = [...allRoutes, ...this.setRoutes(config, defaultAuth)];
		});
		return allRoutes;
	}

	static findById(obj, id) {
		let i;
		let childObj;
		let result;

		if (id === obj.id) {
			return obj;
		}

		for (i = 0; i < Object.keys(obj).length; i += 1) {
			childObj = obj[Object.keys(obj)[i]];

			if (typeof childObj === 'object') {
				result = this.findById(childObj, id);
				if (result) {
					return result;
				}
			}
		}
		return false;
	}
}

export default TiUtils;
