/*
 * This program is part of the OpenLMIS logistics management information system platform software.
 * Copyright © 2017 VillageReach
 *
 * This program is free software: you can redistribute it and/or modify it under the terms
 * of the GNU Affero General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU Affero General Public License for more details. You should have received a copy of
 * the GNU Affero General Public License along with this program. If not, see
 * http://www.gnu.org/licenses.  For additional information contact info@OpenLMIS.org. 
 */

(function() {

    'use strict';

    angular
        .module('shipment-view')
        .config(config);

    config.$inject = ['$stateProvider', 'FULFILLMENT_RIGHTS'];

    function config($stateProvider, FULFILLMENT_RIGHTS) {

        $stateProvider.state('openlmis.orders.shipmentView', {
            controller: 'ShipmentViewController',
            controllerAs: 'vm',
            label: 'shipmentView.viewShipment',
            showInNavigation: false,
            templateUrl: 'shipment-view/shipment-view.html',
            url: '/:id/shipment',
            accessRights: [
                FULFILLMENT_RIGHTS.PODS_MANAGE,
                FULFILLMENT_RIGHTS.ORDERS_VIEW
            ],
            areAllRightsRequired: false,
            resolve: {
                order: function(orderService, $stateParams) {
                    return orderService.get($stateParams.id);
                },
                stockCardSummaries: function(stockCardSummariesService, order) {
                    return stockCardSummariesService.getStockCardSummaries(
                        order.program.id,
                        order.supplyingFacility.id
                    );
                },
                shipment: function(shipmentFactory, order, stockCardSummaries) {
                    return shipmentFactory.getForOrder(order, stockCardSummaries);
                },
                orderFulfillmentLineItems: function(orderFulfillmentLineItemFactory, order, stockCardSummaries, shipment) {
                    return orderFulfillmentLineItemFactory.get(
                        order,
                        shipment,
                        stockCardSummaries
                    );
                }
            }
        });
    }
})();
