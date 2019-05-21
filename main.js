
function goToByScroll(id){
    $('html,body').animate({
        scrollTop: $(id).offset().top},
    'slow');
}

$("a").click(function(e) { 
    // console.log("scroll", this, $(this).attr("href"));
    if ($(this).attr("href")[0] == "h") {
        return;
    }

    e.preventDefault(); 
    
    goToByScroll($(this).attr("href"));           
});