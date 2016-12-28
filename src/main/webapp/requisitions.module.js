(function() {

    "use strict";

    angular.module('openlmis-requisitions', [
        'admin-template',
        'admin-template-list',
        'angular.filter',
        'ngBootbox',
        'ngSanitize',
        'openlmis-core',
        'openlmis-templates',
        'requisition',
        'requisition-approval',
        'requisition-calculations',
        'requisition-constants',
        'requisition-convert-to-order',
        'requisition-full-supply',
        'requisition-initiate',
        'requisition-non-full-supply',
        'requisition-search',
        'requisition-template',
        'requisition-validation',
        'requisition-view',
        'ui.router'
    ]);

})();
