var itemLists = [];
var salesTaxes = [];
var sum = 0;
const fs = require('fs');
fs.readFile('Input1.csv', 'utf-8', function(err, data) {
if (err) throw err;
//console.log(data);
processData(data);
});

function processData(allText) {
var inputArray = allText.split(/\r\n|\n/);
//console.log(inputArray);
  for (var i = 1; i < inputArray.length; i++) {
    var temp = inputArray[i].split(",");
    //console.log(temp);
    itemLists.push(temp);
    //var productName = inputArray[i].split(",")[1];
    //console.log(productName);
  }
}
    console.log(itemLists);
    /*for (var i = 0; i < itemLists.length; i++){
    var productName = itemLists[i][1];
    var price = parseFloat(itemLists[i][2]);
    var quantity = parseFloat(itemLists[i][0]);
    itemLists[i][0] = quantity;
    console.log(price);
    console.log(productName);
      if (itemLists[i][1].includes("chocolate")) {
        if (itemLists[i][1].includes("imported")) {
          console.log(itemLists[i][1]);
          var tax1 = price * 0.05;
        //console.log(salesTaxes);
          price = price + price * 0.05;
          var factor = 0.05;
          price = Math.round(price/factor) * factor;
          console.log(price);
          tax1 = Math.round(tax1/factor) * factor;
          salesTaxes.push(tax1);
          itemLists[i][2] = price;
        //console.log(itemLists[i][2]);
        } else {
          price = price;
          itemLists[i][2] = price;
       }
          else if (itemLists[i][1].includes("book")) {
          price = price;
          itemLists[i][2] = price;
      }   else if (itemLists[i][1].includes("pills")) {
          price = price;
          itemLists[i][2] = price;
    }     else if (itemLists[i][1].includes("perfume"))  {
           if (itemLists[i][1].includes("imported")) {
            //console.log(itemLists[i][1]);
          var salesTaxes = price * 0.15;
          var tax1 = price * 0.15;
        //console.log(salesTaxes);
          price = price + price * 0.15;
          var factor = 0.05;
          price = Math.round(price/factor) * factor;
            //console.log(price);
          tax1 = Math.round(tax1/factor) * factor;
          salesTaxes.push(tax1);
          itemLists[i][2] = price;
        } else {
             //console.log(itemLists[i][1]);
          //var salesTaxes = price * 0.15;
          var tax1 = price * 0.1;
        //console.log(salesTaxes);
          price = price + price * 0.1;
          var factor = 0.05;
          price = Math.round(price/factor) * factor;
            //console.log(price);
          tax1 = Math.round(tax1/factor) * factor;
          salesTaxes.push(tax1);
          itemLists[i][2] = price;
          }
      } else if(itemLists[i][1].includes("music")) {
          //var salesTaxes = price * 0.1;
          var tax1 = price * 0.1;
        //console.log(salesTaxes);
          price = price + price * 0.1;
          var factor = 0.05;
          price = Math.round(price/factor) * factor;
          tax1 = Math.round(tax1/factor) * factor;
          salesTaxes.push(tax1);
          itemLists[i][2] = price;
      }

      else {
        price = price;
        itemLists[i][2] = price;
        var tax1 = price * 0;
        salesTaxes.push(tax1);
        //console.log(salesTaxes);
      }



    //if (itemLists[i][1].includes("imported")) {
  	 //console.log(itemLists[i][1]);
    //price = price + price * 0.15;
    //console.log(price);
    //itemLists[i][2] = price;
    //console.log(itemLists[i][2]);
    //var salesTaxes = price * 0.15;
    //console.log(salesTaxes);
     //else if (itemLists[i][1].includes("perfume" || "imported perfume")) {
    //console.log(itemLists[i][1]);
    //price = price + price * 0.10;
    //itemLists[i][2] = price;
    //console.log(price);.
    //}


  }
   //console.log(sum);
   //console.log(salesTaxes);
   //console.log(itemLists);
}


/* logic for round off

var factor = 0.05
x = Math.round(x/factor)*factor */




















    /*for(var i = 1; i < inputArray.length; i++) {
	    var price = parseFloat(inputArray[i][0])*parseFloat(inputArray[i][2]);
	    console.log(price);
	    if(inputArray[i][1] == "book"){
		    Exempt.push(inputArray[i][1]);
		    console.log(Exempt);
	    } else if (inputArray[i][1] == "chocolate") {
        Exempt.push(inputArray[i][1]);
	  }
  }*/