/*
 * This program is part of the OpenLMIS logistics management information system platform software.
 * Copyright © 2013 VillageReach
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program.  If not, see http://www.gnu.org/licenses.  For additional information contact info@OpenLMIS.org. 
 */

 /*
    TODO: Procedurally generate this page
 */

(function() {

    'use strict';

	angular.module('openlmis', [
		'openlmis-404',
        'openlmis-500',
		'openlmis-forgot-password',
        'openlmis-fullfilment',
		'openlmis-home',
		'openlmis-header',
        'openlmis-i18n',
        'openlmis-navigation',
		'openlmis-requisitions',
		'openlmis-reset-password',
        'openlmis-table'
	]).config(defaultRoutes);

	defaultRoutes.$inject = ['$urlRouterProvider', '$qProvider'];

	function defaultRoutes($urlRouterProvider, $qProvider){
		$urlRouterProvider
		.when('', '/home')
		.when('/', '/home')
		.otherwise("/404");
	}

})();
