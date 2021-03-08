$(document).ready(function () {

    //accordion animation style drop-down menu
    $('#accordion ul').slideUp();
    $("#accordion > li > span").hover(function () {
        $(this).next().slideToggle(300);
    });


    //a chained effect animation to slide all images on page landing
    function imageSlider() {

        $("img").slideUp(0.1).slideDown(700);
    }
    imageSlider();

    // toggle hide and show Testimonials and creates a spin animation effect with the testimonial images by adding a class to the image elemets. css transforms a 360deg spin
    $("#hideandshow").click(function () {
        $(".Testimonials").toggle(700);
        $(".testoImages").addClass("change").delay(5000).queue(function () {
            $(".testoImages").removeClass("change").dequeue();
        });
    });

    //On mouse over creates a spin animation effect with the testimonial images by adding a class to the image elemets. css transforms a 360deg spin
    $(".testoImages").mouseenter(function () {
        $(this).addClass("change").delay(5000).queue(function () {
            $(this).removeClass("change").dequeue();
        });

    });

});



