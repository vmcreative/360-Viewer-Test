$(document).ready(function(){
    $("#podium_view").hide();
    $("#map_view").hide();

    $("#view1").click(function(){
        $("#classroom_view").show();
        $("#podium_view").hide();
        $("#map_view").hide();
        $("#photo_viewer h2").show();
    });
    $("#view2").click(function(){
      $("#classroom_view").hide();
      $("#podium_view").show();
      $("#map_view").hide();
      $("#photo_viewer h2").show();
    });
    $("#view3").click(function(){
      $("#classroom_view").hide();
      $("#podium_view").hide();
      $("#map_view").show();
      $("#photo_viewer h2").hide();
    });

    $(".map-container")
    	.click(function(){
    			$(this).find("iframe").addClass("clicked")})
    	.mouseleave(function(){
    			$(this).find("iframe").removeClass("clicked")});

});

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    document.getElementById("doeSupported").innerText = "VR NOT SUPPORTED";
}

var deviceOrientationData;
function deviceOrientationHandler(evt) {
  deviceOrientationData = evt;
  try {
  } catch (ex) {
    document.getElementById("ui_notice").addClass("hidden");
    document.getElementById("doeSupported").innerText = "VR IS SUPPORTED";

  }
}
