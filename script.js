

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDP8SzXQQS1f494iLABCqtYvuXDMm18mkI",
    authDomain: "asp-stargazer.firebaseapp.com",
    databaseURL: "https://asp-stargazer.firebaseio.com",
    projectId: "asp-stargazer",
    storageBucket: "asp-stargazer.appspot.com",
    messagingSenderId: "382843231834"
};

firebase.initializeApp(config);

$("#submit-button").on("Click", function () {
    var canvas = $("#starmap_inner");
    var dataURL = canvas.toDataURL('image/jpeg', 1.0);
    console.log(dataURL)
});

$(".dropdown-trigger").dropdown();

$("#locator-button").on("click", function (event) {
    $("#locator-button-div").addClass("hide");
    $("#picture-div").removeClass("hide");
})
var x = document.getElementById("#body-header");
var y;
var z;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    y = position.coords.latitude;
    z = position.coords.longitude;
    console.log(y);
    console.log(z);


    S(document).ready(function () {

        var planetarium = S.virtualsky({
            mouse: false,
            keyboard: false,
            constellations: true,
            constellationlabels: true,
            id: 'starmap',
            projection: 'mollweide',
            latitude: y,
            longitude: z,
            cardinalpoints: true,


        });
    });
}


$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo",
    success: function (result) {
        if ("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
            $("#copyright").text("Image Credits: " + "Public Domain");
        }

        if (result.media_type == "video") {
            $("#apod_img_id").css("display", "none");
            $("#apod_vid_id").attr("src", result.url);
        }
        else {
            $("#apod_vid_id").css("display", "none");
            $("#apod_img_id").attr("src", result.url);
        }
        $("#reqObject").text(url);
        $("#returnObject").text(JSON.stringify(result, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
    }
});