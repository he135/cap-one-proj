function bookFunc() {
    document.getElementById("book").innerHTML="Loading...";
    document.getElementById("book").disabled = true;

    var x = document.getElementById("form2"); //inputs will be put into array
    var y = document.getElementById("form2b");
    var text2;

    $.getJSON('/listings', function (listings) {
        var closeArrayIdx = []; //array of IDX of values
        for (var i = 0; i < listings.length; i++) {
            var latDist = listings[i].latitude - parseFloat(x.elements[0].value);
            var longDist = listings[i].longitude - parseFloat(y.elements[0].value);
            var distance = Math.sqrt(Math.pow(latDist, 2) + Math.pow(longDist, 2));

            if (distance<.018) { //approx .125 mile radius (.25 mile diameter)
                closeArrayIdx.push(i);
            }
        }

        //find which idx of closeArrayIdx yields highest no. reviews
        //take into account same no. reviews
        if (closeArrayIdx.length != 0) {
            var maxRev = parseInt(listings[closeArrayIdx[0]].number_of_reviews);
            var maxRevIdx = [];
            maxRevIdx.push(0);
            for (var i = 1; i < closeArrayIdx.length; i++) {
                var currNoRev = parseInt(listings[closeArrayIdx[i]].number_of_reviews);
                if (currNoRev === maxRev) {
                    maxRevIdx.push(closeArrayIdx[i]);
                }
                if (currNoRev > maxRev) {
                    for (var i = 0; i < maxRevIdx.length; i++) {
                        maxRevIdx = [];
                    }
                    maxRevIdx.push(closeArrayIdx[i]);
                    maxRev = currNoRev;
                }
            }
        }

        if (closeArrayIdx.length === 0) {
            text2 = "You are a little bit far from San Francisco Airbnb homes." + 
                " Perhaps try another location?";
        } else {
            if (maxRevIdx.length === 1) {
                var price = listings[maxRevIdx[0]].price;
                price = price.replace(/[$,]+/g, "");
                text2 = "The most reviewed Airbnb host home in your area charges $" +
                    parseFloat(Math.round(price * 100) / 100).toFixed(2) + " per night.";
            } else {
                var totalPrice = 0.0;
                for (var i = 0; i < maxRevIdx.length; i++) {
                    totalPrice += parseFloat(listings[maxRevIdx[i]].price.replace(/[$,]+/g, ""));
                }
                var avgPrice = totalPrice / maxRevIdx.length;

                text2 = "There are " + maxRevIdx.length + " Airbnb host homes in your area that have" +
                    " the most reviews. On average, they charge $" + parseFloat(Math.round(avgPrice * 100)
                        / 100).toFixed(2) + ".";
            }
        }
        document.getElementById("display2").innerHTML = text2;

        document.getElementById("book").innerHTML="Submit";
        document.getElementById("book").disabled = false;
    });
}