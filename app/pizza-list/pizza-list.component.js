'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('pizzaList').
component('pizzaList', {
    templateUrl: 'pizza-list/pizza-list.template.html',
    controller: ['$http', function PhoneListController($http) {
        var self = this;
        self.orderProp = 'prijs', "calorien";

        $http.get('pizzas/pizzas.json').then(function(response) {
            self.pizzas = response.data;
        });
            self.getTotal = function(){
                console.log("gettotal function called");
            }
    }]
});
