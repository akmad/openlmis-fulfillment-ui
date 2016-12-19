(function() {

    'use strict';

    angular
        .module('openlmis.requisitions')
        .factory('Template', template);

    template.$inject = ['RequisitionColumn'];

    function template(RequisitionColumn) {

        Template.prototype.getColumns = getColumns;

        return Template;

        function Template(requisition) {
            this.showNonFullSupplyTab = requisition.program.showNonFullSupplyTab;

            var columns = [];
            angular.forEach(requisition.template.columnsMap, function(column) {
                columns.push(new RequisitionColumn(column, requisition));
            });
            this.columns = columns;
        }

        function getColumns(nonFullSupply) {
            var columns = [];
            this.columns.forEach(function(column) {
                if (column.display && (!nonFullSupply || !column.fullSupplyOnly)) {
                    columns.push(column);
                }
            });
            return columns;
        }
    }

})();
