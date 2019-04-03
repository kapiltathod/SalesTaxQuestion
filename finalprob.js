let itemLists = [];
let salesTaxes = [];
let factor;
const exempt = ["book", "chocolate", "pills"];
//console.log("Input");

const fs = require('fs');
fs.readFile('Input1.csv', 'utf-8', function(err, data) {
	if (err) throw err;
	//console.log(data);
	processData(data);
});

function processData(allText) {
	let inputArray = allText.split(/\r\n|\n/);
	//console.log(inputArray);
  for (let i = 1; i < inputArray.length; i++) {
		let temp = inputArray[i].split(",");
		//console.log(temp);
		itemLists.push(temp);
	}

	for (let i = 0; i < itemLists.length; i++) {
		let productName = itemLists[i][1];
		let price = parseFloat(itemLists[i][2]);
		let quantity = parseFloat(itemLists[i][0]);
		//itemLists[i][0] = quantity;
		//console.log(price);
		//console.log(productName);
		if (productName.includes("chocolate")) {
			if (itemLists[i][1].includes("imported")) {
				console.log(itemLists[i][1]);
				let tax1 = price * 0.05;
				price = price + price * 0.05;
				factor = 0.05;
				price = Math.ceil(price/factor) * factor;
				//console.log(price);
				tax1 = Math.ceil(tax1/factor) * factor;
				salesTaxes.push(tax1);
				itemLists[i][2] = price;
				//console.log(itemLists[i][2]);
				//console.log(salesTaxes);
			} else {
				price = price;
				itemLists[i][2] = price;
				} //console.log(price);
      } else if (itemLists[i][1].includes("book")) {
				price = price;
				itemLists[i][2] = price;
				} else if (itemLists[i][1].includes("pills")) {
					price = price;
					itemLists[i][2] = price;
			} else if (itemLists[i][1].includes("perfume")) {
					if (itemLists[i][1].includes("imported")) {
						//console.log(itemLists[i][1]);
						tax1 = price * 0.15;
						price = price + price * 0.15;
						factor = 0.05;
						price = Math.ceil(price/factor) * factor;
						//console.log(price);
						tax1 = Math.ceil(tax1/factor) * factor;
						salesTaxes.push(tax1);
						itemLists[i][2] = price;
						//console.log(itemLists[i][2]);
						//console.log(salesTaxes);
					} else {
						tax1 = price * 0.1;
						price = price + price * 0.1;
						factor = 0.05;
						price = Math.ceil(price/factor) * factor;
						//console.log(price);
						tax1 = Math.ceil(tax1/factor) * factor;
						salesTaxes.push(tax1);
						itemLists[i][2] = price;
						//console.log(itemLists[i][2]);
						//console.log(salesTaxes);
					}

			}	else if (itemLists[i][1].includes("music")) {
				tax1 = price * 0.1;
				price = price + price * 0.1;
				factor = 0.05;
				price = Math.ceil(price/factor) * factor;
				//console.log(price);
				tax1 = Math.ceil(tax1/factor) * factor;
				salesTaxes.push(tax1);
				itemLists[i][2] = price;
				//console.log(itemLists[i][2]);
				//console.log(salesTaxes);
			}

	}
		//console.log(itemLists);
		//console.log(salesTaxes);

}