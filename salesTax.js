const fs = require('fs');

fs.readFile('Input1.csv','utf-8', function(err, data) {  
  //console.log(data);
  processData(data);
});

function processData(allText) {

    //var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    //var test = allTextLines;
    var filtered = allTextLines.filter(function (el) {
      return el != '';
    });
    //console.log(filtered);
    for(var i = 1; i < filtered.length; i++ )
    {
      debugger
      //console.log(filtered[i].includes("book"));
      //console.log(filtered[0].split(","));
      var product_name = filtered[i].split(",")[1];
      //console.log(product_name);
      var price = parseFloat(filtered[i].split(",")[0])*parseFloat(filtered[i].split(",")[2])
      console.log(filtered[i]);
      console.log(price);
      switch( product_name ){
        case 0:
          product_name == "book"
            console.log(price);
          break;

        case 1:
          product_name == "chocolate"
            console.log(price);
          break;

        case 2:
          product_name == "pills"
            console.log(price);
          break;
        default:

      }

    }
    //var entries = allTextLines[0].split(',');
    //var lines = [];

    //var headings = entries.splice(0,record_num);
    //while (entries.length>0) {
    //    var tarr = [];
    //    for (var j=0; j<record_num; j++) {
    //        tarr.push(headings[j]+":"+entries.shift());
    //    }
    //    lines.push(tarr);
    //}
    // alert(lines);
}
//code




