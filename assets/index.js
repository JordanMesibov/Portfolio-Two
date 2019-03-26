$(document).ready(function () {

    emailFunction = function() {

        document.getElementById("email-button").remove();

        $("#ContactMe").append("<h3>Thanks for visiting my Portfolio!</h3>");

        // myAlert = function() {
        //     alert("Thanks for considering reaching out to me. If you did, I'll get back to you as soon as I can. Have a great day!");
        // }

        // setTimeout(myAlert, 3000);

        // $("#email-button").click(function(){
        //     $(this).remove();
        // });

    }

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1600);
        }
    });

});





