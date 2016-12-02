(function() {

    'use strict';

    /**
     * @ngdoc controller
     * @name openlmis.requisitions.NonFullSupplyCtrl
     *
     * @description
     * Responsible for managing product grid for non full supply products.
     */
    angular
        .module('openlmis.requisitions')
        .controller('NonFullSupplyCtrl', nonFullSupplyCtrl);

    nonFullSupplyCtrl.$inject = ['requisition', 'requisitionValidator'];

    function nonFullSupplyCtrl(requisition, requisitionValidator) {
        var vm = this;

        vm.deleteLineItem = deleteLineItem;
        vm.displayAddProductButton = displayAddProductButton;

        /**
         * @ngdoc property
         * @propertyOf openlmis.requisitions.NonFullSupplyCtrl
         * @name requisition
         * @type {Object}
         *
         * @description
         * Holds requisition. This object is shared with the parent and fullSupply states.
         */
        vm.requisition = requisition;

        /**
         * @ngdoc property
         * @propertyOf openlmis.requisitions.NonFullSupplyCtrl
         * @name columns
         * @type {Array}
         *
         * @description
         * Holds the list of columns visible on this screen.
         */
        vm.columns = vm.requisition.$template.getColumns(true);

        /**
         * @ngdoc property
         * @propertyOf openlmis.requisitions.NonFullSupplyCtrl
         * @name lineItems
         * @type {Array}
         *
         * @description
         * The list of all line items.
         */
        vm.lineItems = vm.requisition.requisitionLineItems;

        /**
         * @ngdoc method
         * @methodOf openlmis.requisitions.NonFullSupplyCtrl
         * @name isLineItemValid
         *
         * @description
         * Checks whether any field of the given line item has any error. It does not perform any
         * validation. It is an exposure of the isLineItemValid method of the requisitionValidator.
         *
         * @param  {Object}  lineItem the line item ot be checked
         * @return {Boolean}          true if any of the fields has error, false otherwise
         */
        vm.isLineItemValid = requisitionValidator.isLineItemValid;

        /**
         * @ngdoc method
         * @methodOf openlmis.requisitions.NonFullSupplyCtrl
         * @name deleteLineItem
         *
         * @description
         * Deletes the given line item, removing it from the grid and returning the product to the
         * list od approved products.
         *
         * @param  {Object} lineItem   the line item to be deleted
         */
        function deleteLineItem(lineItem) {
            var lineItemId = vm.lineItems.indexOf(lineItem);
            vm.lineItems[lineItemId].orderableProduct.$visible = true;
            vm.lineItems.splice(lineItemId, 1);
        }

        function displayAddProductButton() {
            return !vm.requisition.$isApproved()
                && !vm.requisition.$isAuthorized();
        }
    }

})();