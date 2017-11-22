var app = angular.module("myApp", []);
app.controller("myCtrl", ['$scope', function($scope) {
  $scope.invoice = {
    items: [{
    qty: 1,
    description: 'shoes',
    discount: 20,
    cost: 100,
    checked: true
  },
  {
     qty: 2,
     description: 'shirt',
     discount: 10,
     cost: 70,
     checked: true
   },
   {
     qty: 3,
     description: 'pants',
     discount: 20,
     cost: 100,
     checked: true
   },
   {
     qty: 2,
     description: 'sunglasses',
     discount: 15,
     cost: 130,
     checked: true
   },
   {
     qty:1,
     description: 'ties',
     discount: 0,
     cost: 45,
     checked: false

   }]
 };

  $scope.addItem = function(){
    $scope.invoice.items.push({
      qty: 1,
      description: "",
      discount: 0,
      cost: 0,
      checked: true
    });
  },
  $scope.removeItem = function(index){
    $scope.invoice.items.splice(index, 1);
  },
  $scope.total = function(){
    var total = 0;
    angular.forEach($scope.invoice.items, function(item){
      if(item.checked) {
        total += (item.qty * item.cost) * 1.06 * (1 - item.discount/100)
      }
      total += 0;
    })
    return total;
  }
}]);
