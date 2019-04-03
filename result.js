let itemLists = [];
let originalPrice = [];
let finalPrice1 = 0, finalPrice2 = 0, finalPrice3 = 0;
let realPrice1 = 0, realPrice2 = 0, realPrice3 = 0;
let SalesTaxes1 = 0, SalesTaxes2 = 0,SalesTaxes3 = 0;
let factor = 0.05;
//const exempt = ["book", "chocolate", "pills"];

const fs = require('fs');
fs.readFile('Input1.csv', 'utf-8', function(err, data) {
if (err) throw err;
//console.log("Input")
//console.log(data);
//console.log("Output")
processData(data);
});

function processData(allText) {
	let inputArray = allText.split(/\r\n|\n/);
	//console.log(inputArray);
  for (let i = 1; i < inputArray.length; i++) {
		let temp = inputArray[i].split(",");
		let temp2 = inputArray[i].split(",");
		itemLists.push(temp);
		//console.log(itemLists);
		originalPrice.push(temp2);
	}
	for (let i = 0; i < itemLists.length; i++) {
		let productName = itemLists[i][1];
		let price = parseFloat(itemLists[i][2]);
		if (productName.includes("chocolate") || productName.includes("book") || productName.includes("pills")) {
				itemLists[i][2] = price;
    } else if (productName.includes("imported")) {
			  if (productName.includes("perfume" || "music")) {
						price = price + price * 0.15;
						price = Math.ceil(price/factor) * factor;
						itemLists[i][2] = price;
						//console.log(productName)
					} else {
						price = price + price * 0.05;
						price = Math.ceil(price/factor) * factor;
						console.log(productName);
						//console.log(price);
						itemLists[i][2] = price;
					}
		}	else {
				price = price + price * 0.1;
				price = Math.ceil(price/factor) * factor;
				//console.log(price);
				itemLists[i][2] = price;
			}
			//console.log(productName);
			//console.log(price);
	}
 		finalPrice1 = itemLists[0][2] + itemLists[1][2] + itemLists[2][2];
 		realPrice1 = parseFloat(originalPrice[0][2]) + parseFloat(originalPrice[1][2]) + parseFloat(originalPrice[2][2]);
 		//console.log(SalesTaxes1 = finalPrice1 - realPrice1);
 		//console.log(finalPrice1);

 		finalPrice2 = itemLists[3][2] + itemLists[4][2];
 		realPrice2 = parseFloat(originalPrice[3][2]) + parseFloat(originalPrice[4][2]);
 		//console.log(SalesTaxes2 = finalPrice2 - realPrice2);
		//console.log(finalPrice2);

 		finalPrice3 = itemLists[5][2] + itemLists[6][2] + itemLists[7][2] + itemLists[8][2];
 		realPrice3 = parseFloat(originalPrice[5][2]) + parseFloat(originalPrice[6][2]) + parseFloat(originalPrice[7][2]) + parseFloat(originalPrice[8][2]);
 		//console.log(SalesTaxes3 = finalPrice3 - realPrice3);
 	  //console.log(finalPrice3);

 	  //console.log(finalPrice3);
 		//console.log(realPrice3);
  	//console.log(originalPrice);
}