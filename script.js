var url = "https://api.nasa.gov/planetary/apod?api_key=p7MUUSZVg6s4kwwYrAJLEAfDVtbkOHY0xHgmGSh2";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
    $("body").css("background-image", "url("+result.url+")");
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
    $("body").css("background-image", "url("+result.url+")");
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explanation").text(result.explanation);
  $("#apod_title").text(result.title);
}
});