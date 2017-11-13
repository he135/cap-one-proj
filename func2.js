function priceFunc() {
    document.getElementById("price").innerHTML="Loading...";
    document.getElementById("price").disabled = true;

    var x = document.getElementById("form1"); //inputs will be put into array
    var y = document.getElementById("form1b");
    var text = "";
    var avgPrice;

    $.getJSON('/listings', function (listings) {
        var closeArrayIdx = []; //array of IDX of values
        for (var i = 0; i < listings.length; i++) {
            var latDist = listings[i].latitude - parseFloat(x.elements[0].value);
            var longDist = listings[i].longitude - parseFloat(y.elements[0].value);
            var distance = Math.sqrt(Math.pow(latDist,2) + Math.pow(longDist,2));

            if (distance<.018) { //approx .125 mile radius (.25 mile diameter)
                closeArrayIdx.push(i);
            }
        }

        var totalPrice = 0;
        for (var i = 0; i < closeArrayIdx.length; i++) {
            var price;
            var idx = closeArrayIdx[i];
            if (listings[idx].weekly_price != "") { //"", not null
                price = listings[idx].weekly_price;
                price = price.replace(/[$,]+/g,"");
                price = parseFloat(price);
            } else {
                price = listings[idx].price;
                price = price.replace(/[$,]+/g,"");
                price = 7.0*parseFloat(price);
            }
            totalPrice += price;
        }

        avgPrice = totalPrice/closeArrayIdx.length;
        if (closeArrayIdx.length == 0) {
            text += "You are a little bit far from San Francisco Airbnb homes." + 
                " Perhaps try another location?";
            document.getElementById("display").innerHTML = text;
        } else {
            text += parseFloat(Math.round(avgPrice * 100) / 100).toFixed(2);
            document.getElementById("display").innerHTML = "$" + text;
        }
        
        document.getElementById("price").innerHTML="Submit";
        document.getElementById("price").disabled = false;

    });
}