module app.common{
	interface IDataAccessService {
		getProductResource(): ng.resource.IResourceClass<IProductResource>;
	}

	interface IProductResource extends ng.resource.IResource<app.models.IProduct> {

	}

	export class DataAccessService implements IDataAccessService {

		static $inject = ['$resource'];
		constructor(private $resource : ng.resource.IResourceService) {

		}

		getProductResource() : ng.resource.IResourceClass<IProductResource> {
			return this.$resource('/api/products/:productId');
		}
	}
	angular.module('app').service('dataAccessService', DataAccessService);
}