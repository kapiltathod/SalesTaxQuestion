const exempt = ["book", "chocolate", "pills"];
const inputGiven = ['Input1.csv', 'Input2.csv', 'Input3.csv']
const output = ["Output 1", "Output 2", "Output 3"]
let finalOutput = [];
let m = 0;
const fs = require('fs');
finalOutput.push("Output1")
for (let k = 0; k < inputGiven.length; k++) {
	fs.readFile(inputGiven[k], 'utf-8', function(err, data) {
		if (err) throw err;
		//console.log(data)
		processData(data);
	});
}

function processData(allText) {
	let itemLists = [];
	let inputArray = allText.split(/\r\n|\n/);
	//console.log(inputArray)
  for (let i = 2; i < inputArray.length; i++) {
		let temp = inputArray[i].split(",");
		itemLists.push(temp);
	}
	//console.log(itemLists)
	//console.log(output[m]);
	m++;
	totalSalesTax = 0
	totalAmount = 0

	function roundOff (value) {
    return (Math.ceil(value / 0.05) * 0.05);
	}

	for (let i = 0; i < itemLists.length; i++) {
		let taxToBeApplied = 0;
		let isExempt = false;
		const quantity = itemLists[i][0];
		const productName = itemLists[i][1];
		const productCost = parseFloat(itemLists[i][2]);

		for (let j = 0; j < exempt.length; j++) {
			if (productName.includes(exempt[j])) {
				isExempt = true;
				break;
			}
		}

    if(!isExempt) {
    	taxToBeApplied += 10;
    }

		if (productName.includes('imported')) {
			taxToBeApplied += 5;
		}
		const totalCost = quantity * productCost;
		const totalTax = (totalCost * taxToBeApplied / 100);
		const totalPrice = roundOff(totalTax + totalCost);
		totalSalesTax += roundOff(totalTax);
		totalAmount += roundOff(totalPrice);

		const data1 = [
			{
				head: "Output 1",
				name : productName
			}, {
				quan : quantity,
				name : productName
			}

		]
		const fastcsv = require('fast-csv');
		const ws = fs.createWriteStream("out.csv");
		fastcsv
  	.write(data1)
 		.pipe(ws);

	//console.log(quantity, productName, totalPrice);

	}
	//console.log(finalOutput)
	//console.log("Sales Taxes :", totalSalesTax);
	//console.log("Total :", totalAmount);
}







//fs.writeFile("output.json", JSON.stringify(finalOutput), function (err){
		//if (err) throw err;
		//console.log('Saved!');
 // });