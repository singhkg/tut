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
ShopListController.$inject=['BuyService'];

function ShopListController(BuyService){
  // $scope.name="Hello";
}

function AlreadyBoughtController(BuyService){
    // console.log(itemstobuy);
}


function ShopListShowController(BuyService){
  var showlist = this;
  showlist.itemstobuy=BuyService.getbuyitem();
  showlist.boughtitem=function (item, index) {

//    console.log(showlist.itemsbought);
  showlist.itemsalreadybought= BuyService.buyitem(item, index);
  showlist.itemsbought=BuyService.getboughtitem();
  showlist.itemstobuyempty=BuyService.checkempty(showlist.itemstobuy);
  console.log("itemstobuyempty status", showlist.itemstobuyempty);
  };
  console.log("itemstobuyempty",BuyService.checkempty(showlist.itemstobuy));
  console.log("added item in ShopList", showlist.itemsbought);

}

function ToBuyController(BuyService){
  var itemtoadd = this;

  itemtoadd.additem = function () {
    BuyService.additem();
  };
}

function BuyService(){
  var service=this;
  var itemstobuy = [];
  var itemsbought = [];
  var itemstobuyempty= false;
  var itemsalreadybought = false;

  service.additem = function () {
    itemstobuy.push('Rice');
    itemstobuy.push('Dal');
    itemstobuy.push('roti');
    itemstobuy.push('namkeen');
    itemstobuy.push('cookie');
    console.log("added item", itemsbought);
   };

 service.getbuyitem = function () {
   console.log(itemstobuy);
   return itemstobuy;
  };

  service.getboughtitem = function () {
    console.log(itemsbought);
    return itemsbought;
   };


 service.buyitem = function (item, itemindex) {
   itemsbought.push(item);
   itemstobuy.splice(itemindex,1);
   itemsalreadybought = true;
   console.log("itemsalreadybought status in buy function", itemsalreadybought);
   return itemsalreadybought;
    //checkempty(itemstobuy);
     // the array is defined and has no elements
 };

 service.checkempty = function () {
  if (typeof itemstobuy !== 'undefined' && itemstobuy.length === 0) {
     itemstobuyempty= true;
     return itemstobuyempty;
   }
 };

  console.log("added item after splice", itemsbought);
};


}
// $scope.itemstobuy=itemstobuy;
)();
