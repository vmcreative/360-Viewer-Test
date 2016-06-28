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

    $(".resource_name").addClass("expand");
    $(".resource_name").on("click", function(event) {
      $(this).siblings().toggle();
      $(this).toggleClass("collapse");
    });

    if (Modernizr.touch){
       document.getElementById("ui-notice").innerText = "";
    } else {
       document.getElementById("ui-notice").innerText = "Drag to pan.";
    }

});
