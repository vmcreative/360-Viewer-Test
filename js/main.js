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
        document.getElementById("ui-notice").innerText = "";
      }

var deviceOrientationData;

      function deviceOrientationHandler(evt) {
        deviceOrientationData = evt;
        try {
          timestamp.innerText = new Date(evt.timeStamp);
          alpha.innerText = evt.alpha.toFixed(fixed);
          beta.innerText = evt.beta.toFixed(fixed);
          gamma.innerText = evt.gamma.toFixed(fixed);
          var rotation = "rotate("+ evt.alpha +"deg) rotate3d(1,0,0, "+ (evt.gamma * -1)+"deg)";
          h5logo.style.webkitTransform = rotation;
          h5logo.style.transform = rotation;
        } catch (ex) {
          document.getElementById("ui-notice").innerText = "DRAG TO PAN";
          //document.getElementById("doeSupported").hide();
        }
      }
