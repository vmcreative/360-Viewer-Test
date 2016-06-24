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
<<<<<<< HEAD
  window.addEventListener('deviceorientation', deviceOrientationHandler, false);
  document.getElementById("ui-notice").innerText = "";
=======
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    $("#photo_viewer h2").innerText = "state 2";
>>>>>>> origin/gh-pages
}

var deviceOrientationData;

<<<<<<< HEAD
function deviceOrientationHandler() {
  try {
    document.getElementById("ui-notice").innerText = "Drag to pan.";
  } catch (ex) {}
=======
function deviceOrientationHandler(evt) {
  deviceOrientationData = evt;
  try {} catch (ex) {
    $("#photo_viewer h2").innerText = "state 3";
  }
>>>>>>> origin/gh-pages
}
