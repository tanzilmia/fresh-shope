$(document).ready(function(){
    $("#all-categories").click(function(){
        // after the click btn



        // chage option----
        $(".all-cetagories").css("display","block")
        $(".top-features").css("display","none")
        $(".best-seler").css("display","none")

    })

    // top features
    $("#top-features").click(function(){

        $(".top-features").css("display","block")
        $(".all-cetagories").css("display","none")
        $(".best-seler").css("display","none")
    })

    $("#best-seler").click(function(){
        $(".best-seler").css("display","block")
        $(".all-cetagories").css("display","none")
        $(".top-features").css("display","none")
        
    })
})