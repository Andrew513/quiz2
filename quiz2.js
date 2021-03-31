var tags = "cat";
var dataUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?";
var data = $.getJSON(dataUrl);
data.done( function(msg) {
      $.each(msg.items, function(i,item){
      $("#contain").html();
      $("#contain").append($("<img/>").attr("src",item.media.m));
    })
});
data.fail( function(msg) {
    console.log("msg");
    $("#contain").html("fail getting data");
});