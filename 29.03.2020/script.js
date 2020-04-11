let 
$("#play").click(function () {
    if (a) {
        $("#carouselExampleSlidesOnly").carousel('pause')
        a = false
    } else {
        $("#carouselExampleSlidesOnly").carousel('cycle')
        a = true
    };
})