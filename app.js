var player = new Audio();


$(document).on("click", ".s_middle", function() {
    var src = $(this).parent().attr("url");
    player.src = src;
    player.play();
});
$(document).on("click", ".clk", function() {
    var src = $(this).attr("url");
    player.src = src;
    player.play();
});


