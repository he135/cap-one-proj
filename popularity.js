function popularity() {
    document.getElementById("pop").innerHTML="Loading...";
    document.getElementById("pop").disabled = true;

    // add scores of rated homes into separate arrays, sorted by neighborhood, use contains str method
    var neighborhoods = [];

    var Bayview = [];
    var BernalHeights = [];
    var Castro = [];
    var Chinatown = [];
    var CrockerAmazon = [];
    var DiamondHeights = [];
    var Downtown = [];
    var Excelsior = [];
    var FinancialDistrict = [];
    var GlenPark = [];
    var GoldenGate = [];
    var HaightAshbury = [];
    var InnerRichmond = [];
    var InnerSunset = [];
    var Lakeshore = [];
    var Marina = [];
    var Mission = [];
    var NobHill = [];
    var NoeValley = [];
    var NorthBeach = [];
    var OceanView = [];
    var OuterMission = [];
    var OuterRichmond = [];
    var OuterSunset = [];
    var PacificHeights = [];
    var Parkside = [];
    var PotreroHill = [];
    var Presidio = [];
    var PresidioHeights = [];
    var RussianHill = [];
    var Seacliff = [];
    var SouthofMarket = [];
    var TreasureIsland = [];
    var TwinPeaks = [];
    var VisitacionValley = [];
    var WestofTwin = [];
    var WesternAddition = [];
    
    neighborhoods.push(Bayview);
    neighborhoods.push(BernalHeights);
    neighborhoods.push(Castro);
    neighborhoods.push(Chinatown);
    neighborhoods.push(CrockerAmazon);
    neighborhoods.push(DiamondHeights);
    neighborhoods.push(Downtown);
    neighborhoods.push(Excelsior);
    neighborhoods.push(FinancialDistrict);
    neighborhoods.push(GlenPark);
    neighborhoods.push(GoldenGate);
    neighborhoods.push(HaightAshbury);
    neighborhoods.push(InnerRichmond);
    neighborhoods.push(InnerSunset);
    neighborhoods.push(Lakeshore);
    neighborhoods.push(Marina);
    neighborhoods.push(Mission);
    neighborhoods.push(NobHill);
    neighborhoods.push(NoeValley);
    neighborhoods.push(NorthBeach);
    neighborhoods.push(OceanView);
    neighborhoods.push(OuterMission);
    neighborhoods.push(OuterRichmond);
    neighborhoods.push(OuterSunset);
    neighborhoods.push(PacificHeights);
    neighborhoods.push(Parkside);
    neighborhoods.push(PotreroHill);
    neighborhoods.push(Presidio);
    neighborhoods.push(PresidioHeights);
    neighborhoods.push(RussianHill);
    neighborhoods.push(Seacliff);
    neighborhoods.push(SouthofMarket);
    neighborhoods.push(TreasureIsland);
    neighborhoods.push(TwinPeaks);
    neighborhoods.push(VisitacionValley);
    neighborhoods.push(WestofTwin);
    neighborhoods.push(WesternAddition);

    //array of neighborhood names
    var names = [];

    names.push("Bayview");
    names.push("Bernal Heights");
    names.push("Castro/Upper Market");
    names.push("Chinatown");
    names.push("Crocker Amazon");
    names.push("Diamond Heights");
    names.push("Downtown/Civic Center");
    names.push("Excelsior");
    names.push("Financial District");
    names.push("Glen Park");
    names.push("Golden Gate Park");
    names.push("Haight Ashbury");
    names.push("Inner Richmond");
    names.push("Inner Sunset");
    names.push("Lakeshore");
    names.push("Marina");
    names.push("Mission");
    names.push("Nob Hill");
    names.push("Noe Valley");
    names.push("North Beach");
    names.push("Ocean View");
    names.push("Outer Mission");
    names.push("Outer Richmond");
    names.push("Outer Sunset");
    names.push("Pacific Heights");
    names.push("Parkside");
    names.push("Potrero Hill");
    names.push("Presidio");
    names.push("Presidio Heights");
    names.push("Russian Hill");
    names.push("Seacliff");
    names.push("South of Market");
    names.push("Treasure Island/YBI");
    names.push("Twin Peaks");
    names.push("Visitacion Valley");
    names.push("West of Twin Peaks");
    names.push("Western Addition");
    

    $.getJSON('/listings', function (listings) {
        for (var i = 0 ; i < listings.length; i++) {
            switch (listings[i].neighbourhood_cleansed) {
                case "Bayview":
                    if (listings[i].review_scores_rating != "") {
                        Bayview.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Bernal Heights":
                    if (listings[i].review_scores_rating != "") {
                        BernalHeights.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Castro/Upper Market":
                    if (listings[i].review_scores_rating != "") {
                        Castro.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Chinatown":
                    if (listings[i].review_scores_rating != "") {
                        Chinatown.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Crocker Amazon":
                    if (listings[i].review_scores_rating != "") {
                        CrockerAmazon.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Diamond Heights":
                    if (listings[i].review_scores_rating != "") {
                        DiamondHeights.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Downtown/Civic Center":
                    if (listings[i].review_scores_rating != "") {
                        Downtown.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Excelsior":
                    if (listings[i].review_scores_rating != "") {
                        Excelsior.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Financial District":
                    if (listings[i].review_scores_rating != "") {
                        FinancialDistrict.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Glen Park":
                    if (listings[i].review_scores_rating != "") {
                        GlenPark.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Golden Gate Park":
                    if (listings[i].review_scores_rating != "") {
                        GoldenGate.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Haight Ashbury":
                    if (listings[i].review_scores_rating != "") {
                        HaightAshbury.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Inner Richmond":
                    if (listings[i].review_scores_rating != "") {
                        InnerRichmond.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Inner Sunset":
                    if (listings[i].review_scores_rating != "") {
                        InnerSunset.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Lakeshore":
                    if (listings[i].review_scores_rating != "") {
                        Lakeshore.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Marina":
                    if (listings[i].review_scores_rating != "") {
                        Marina.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Mission":
                    if (listings[i].review_scores_rating != "") {
                        Mission.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Nob Hill":
                    if (listings[i].review_scores_rating != "") {
                        NobHill.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Noe Valley":
                    if (listings[i].review_scores_rating != "") {
                        NoeValley.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "North Beach":
                    if (listings[i].review_scores_rating != "") {
                        NorthBeach.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Ocean View":
                    if (listings[i].review_scores_rating != "") {
                        OceanView.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Outer Mission":
                    if (listings[i].review_scores_rating != "") {
                        OuterMission.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Outer Richmond":
                    if (listings[i].review_scores_rating != "") {
                        OuterRichmond.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Outer Sunset":
                    if (listings[i].review_scores_rating != "") {
                        OuterSunset.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Pacific Heights":
                    if (listings[i].review_scores_rating != "") {
                        PacificHeights.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Parkside":
                    if (listings[i].review_scores_rating != "") {
                        Parkside.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Potrero Hill":
                    if (listings[i].review_scores_rating != "") {
                        PotreroHill.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Presidio":
                    if (listings[i].review_scores_rating != "") {
                        Presidio.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Presidio Heights":
                    if (listings[i].review_scores_rating != "") {
                        PresidioHeights.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Russian Hill":
                    if (listings[i].review_scores_rating != "") {
                        RussianHill.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Seacliff":
                    if (listings[i].review_scores_rating != "") {
                        Seacliff.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "South of Market":
                    if (listings[i].review_scores_rating != "") {
                        SouthofMarket.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Treasure Island/YBI":
                    if (listings[i].review_scores_rating != "") {
                        TreasureIsland.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Twin Peaks":
                    if (listings[i].review_scores_rating != "") {
                        TwinPeaks.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Visitacion Valley":
                    if (listings[i].review_scores_rating != "") {
                        VisitacionValley.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "West of Twin Peaks":
                    if (listings[i].review_scores_rating != "") {
                        WestofTwin.push(parseInt(listings[i].review_scores_rating));
                    } break;
                case "Western Addition":
                    if (listings[i].review_scores_rating != "") {
                        WesternAddition.push(parseInt(listings[i].review_scores_rating));
                    } break;
                default:
                    console.log(listings[i].neighbourhood_cleansed);
                    break;
            }
        }

        // find "avg" of each array/neighborhood
        // console.log(neighborhoods[0]);
        var avgArray = [];
        for (var i = 0; i < neighborhoods.length; i++) {
            var totalSum = 0;
            for (var j = 0; j < neighborhoods[i].length; j++) {
                totalSum += neighborhoods[i][j];
            }
            avgArray.push(totalSum / neighborhoods[i].length);
        }

        // highest avg -> stored to text
        var max = avgArray.reduce(function (a, b) {
            return Math.max(a, b);
        });
        var maxIdx = avgArray.indexOf(max);

        //to get 2nd/3rd highest vals, must COPY array and find respective indices
        var clone = avgArray.slice(0);
        clone.splice(maxIdx,1); //removes max1
        var max2 = clone.reduce(function (a, b) { //finding max of clone
            return Math.max(a, b);
        });
        var maxIdx2 = avgArray.indexOf(max2);

        //3rd highest:
        var clone2 = clone.slice(0);
        clone2.splice(maxIdx2,1);
        var max3 = clone2.reduce(function (a, b) {
            return Math.max(a, b);
        });
        var maxIdx3 = avgArray.indexOf(max3);

        document.getElementById("display3").innerHTML = names[maxIdx] + " has the largest percentage " +
            "of high reviews, with a " + Math.round(max) + "% average review score out of " + neighborhoods[maxIdx].length +
            " rated homes.<br><br>" + names[maxIdx2] + " has the second largest precentage of high reviews, with" +
            " a " + Math.round(max2) + "% average review score out of " + neighborhoods[maxIdx2].length + " rated" +
            " homes.<br><br>" + names[maxIdx3] + " has the third largest percentage of high reviews, with a " + 
            Math.round(max3) + "% average review score out of " + neighborhoods[maxIdx3].length + " homes.";
            //recall that since using innerHTML, can use <br> tags

        document.getElementById("pop").disabled = false;
        document.getElementById("pop").innerHTML="Click here to find out!";
    });
    

    //TESTING:
    // console.log('hi!!!');
    // var bigArray = [];
    // var smolArray1 = [];
    // // smolArray1.push(1);
    // // smolArray1.push(2);
    // // smolArray1.push(8);
    // // smolArray1.push(5);
    // bigArray.push(smolArray1);
    // bigArray[0].push(1);
    // bigArray[0].push(2);
    // bigArray[0].push(8);
    // bigArray[0].push(5);
    // console.log(bigArray[0][2]); //8
    // console.log(bigArray[0].length); //4
}