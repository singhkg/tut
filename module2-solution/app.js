(function () {
'use strict';
angular.module('ShopList', [])
.controller('ShopListController', ShopListController)
.controller('ShopListShowController', ShopListShowController)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('BuyService',BuyService);

ToBuyController.$inject=['BuyService'];
ShopListShowController.$inject=['BuyService'];

function ShopListShowController(BuyService){
  var showlist = this;
  showlist.itemstobuy=BuyService.getitem();
}

function ToBuyController(BuyService){
  var service = this;
  var itemtoadd = this;
  itemtoadd.additem = function () {
    BuyService.additem();
  };

function BuyService(){
  var itemstobuy = [];
  service.additem = function () {
  itemstobuy.push({'Rice', 10});
  itemstobuy.push({'Dal', 10});
  itemstobuy.push({'roti', 10});
  itemstobuy.push({'namkeen', 10});
  itemstobuy.push({'cookie', 10});
};
service.getitem = function () {
  return itemstobuy;
};
}
$scope.itemstobuy=itemstobuy;
});();
