numReviews = false;
highestReviews = false;
latestReview = false;

document.getElementById("numReviews").onclick = function () { //anonymous func
    numReviews = true;
    reInitMap();
};

document.getElementById("highestReviews").onclick = function () {
    highestReviews = true;
    reInitMap();
};

document.getElementById("latestReview").onclick = function () {
    latestReview = true;
    reInitMap();
}

document.getElementById("reset1").onclick = function () { //anonymous func
    numReviews = false;
    reInitMap();
};

document.getElementById("reset2").onclick = function () {
    highestReviews = false;
    reInitMap();
};

document.getElementById("reset3").onclick = function () {
    latestReview = false;
    reInitMap();
};

function reInitMap() {
    var uluru = new google.maps.LatLng(37.7749, -122.4194);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });

    $.getJSON('/listings', function (listings) { //jquery
        window.eqfeed_callback(listings);
    });

    window.eqfeed_callback = function (results) {

        //for numReviews:
        var maxNoReviews = parseInt(results[0].number_of_reviews);
        for (var i = 1; i < results.length; i++) {
            if (parseInt(results[i].number_of_reviews) > maxNoReviews) {
                maxNoReviews = parseInt(results[i].number_of_reviews);
            }
        }
        var increment = 1 / maxNoReviews;


        //for highestReviews:
        var goldStar = {
            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
            fillColor: 'gold',
            fillOpacity: 0.8,
            scale: .1,
            strokeColor: 'black',
            strokeWeight: 1
        };
        var h = document.getElementById("btn2form");
        if (!((h.elements[0].value >= 0) && (h.elements[0].value <= 100))) {
            document.getElementById("display_error1").innerHTML = "Please input a number between 0" + 
                " and 100, inclusive.";
        } else document.getElementById("display_error1").innerHTML = "";


        //for latestReview:
        document.getElementById("display_error2").innerHTML = "";

        var ly = document.getElementById("btn3form_year");
        if (!((ly.elements[0].value >= 0) && (ly.elements[0].value <= 2017) &&
            (Number.isInteger(parseInt(ly.elements[0].value))) ) ) {
            document.getElementById("display_error2").innerHTML = "Please input an integer between 0" + 
                " and 2017, inclusive, for the year.";
        }

        var lm = document.getElementById("btn3form_month");
        if (!((lm.elements[0].value >= 1) && (lm.elements[0].value <= 12) &&
            (Number.isInteger(parseInt(lm.elements[0].value))) ) ) {
            document.getElementById("display_error2").innerHTML = "Please input an integer between 1" + 
                " and 12, inclusive, for the month.";
        }

        var ld = document.getElementById("btn3form_day");
        if (!((ld.elements[0].value >= 1) && (ld.elements[0].value <= 31) &&
            (Number.isInteger(parseInt(ld.elements[0].value))) ) ) {
            document.getElementById("display_error2").innerHTML = "Please input an integer between 1" + 
                " and 31, inclusive, for the day.";
        }

        var inputDate = (parseInt(ly.elements[0].value) * 10000) + (parseInt(lm.elements[0].value)
            * 100) + parseInt(ld.elements[0].value);


        for (var i = 0; i < results.length; i++) {

            var lat = results[i].latitude;
            var long = results[i].longitude;
            var latLong = new google.maps.LatLng(lat, long);

            //for numReviews:
            var opac;
            if (numReviews) {
                opac = results[i].number_of_reviews * increment; //adjusts opacity of each marker
            } else {
                opac = 1;
            }

            //for highestReviews:
            var ico = ""; //expects string
            if (highestReviews) {
                if (results[i].review_scores_rating == "") {
                    opac = 0;
                }
                if (parseInt(results[i].review_scores_rating) >= parseInt(h.elements[0].value)) {
                    ico = goldStar;
                }
            }

            var marker = new google.maps.Marker({
                position: latLong,
                opacity: opac,
                icon: ico,
                map: map
            });

            //for latestReview:
            if (latestReview) {
                var latestRevDate = results[i].last_review;
                latestRevDate = parseInt(latestRevDate.replace(/-/g, ""));
                if (latestRevDate >= inputDate) {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
        }
    }
}