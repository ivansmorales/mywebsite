(function ($) {
    "use strict";

    /*
        Function to hide navbar when scroll down and show navbar when scroll up.
    */
    var firstypos = window.pageYOffset;    
    $(window).scroll(function () {
        var currentypos = window.pageYOffset;
        if(currentypos === 0){
            $('.fixed-top').css("background-color", "#070707");
        }else if (firstypos > currentypos) {
            $('.fixed-top').fadeIn();
            $('.fixed-top').css("background-color", "#000");
        }else{
            $('.fixed-top').fadeOut();
        }
        firstypos = currentypos;
    });

    /*
        Animation for webpage
    */
    $(window).on("load", function () {
        
        $("#title .1").css('visibility','visible').hide(0).delay(800).slideDown();
        $("#title .2").css('visibility','visible').hide(0).delay(800).slideDown();
        $("#title .3").css('visibility','visible').hide(0).delay(800).slideDown();
        $("#title .4").css('visibility','visible').hide(0).delay(800).slideDown();
        $("#title .5").css('visibility','visible').hide(0).delay(800).slideDown();

        $('#title .principal').css('visibility','visible').hide(0).delay(1300).fadeIn();
        $('#title .header').css('visibility','visible').hide(0).delay(1400).fadeIn();
        $('#title .description').css('visibility','visible').hide(0).delay(1500).fadeIn();
        $('#title .paragraph').css('visibility','visible').hide(0).delay(1600).slideDown();

        var width = $(window).width();
        if (width < 400){
            $(".container-nav").hide(0);
        }else{
            $(".container-nav").css('visibility','visible').hide(0).delay(2200).fadeIn();
        }

        $("#about .title").css('visibility','visible').hide(0).delay(2200).fadeIn();
        $("#about .standard-p").css('visibility','visible').hide(0).delay(2400).fadeIn();
        $("#about img").css('visibility','visible').hide(0).delay(2600).fadeIn();
        $("#about ul").css('visibility','visible').hide(0).delay(2800).fadeIn();
        $("#education").css('visibility','visible').hide(0).delay(2800).fadeIn();
        $("#awards").css('visibility','visible').hide(0).delay(2800).fadeIn();
        $("#contact").css('visibility','visible').hide(0).delay(2800).fadeIn();
        $("#footer").css('visibility','visible').hide(0).delay(2800).fadeIn();

    });
    
    /* 
        Dissapear nav-left on mobile screens
    */


    /*
        Function to send email through a form.
    */

    $(document).ready(function () {
        $('.btn').click(function (event) {
            var name = $("#inputName").val()
            var email = $("#inputEmail").val()
            var text = $("#inputTextArea").val()
            var statusElementName = $(".aux-div")
            var statusElementEmail = $(".aux-div2")
            var statusElementText = $(".aux-div3")
            statusElementName.empty()
            statusElementEmail.empty()
            statusElementText.empty()

            if (name.length < 1) {
                event.preventDefault()
                statusElementName.append('Real name, please.').hide().fadeIn(500);
            }

            if (!validateEmail(email)) {
                event.preventDefault()
                statusElementEmail.append('Sorry. Email isnt valid.').hide().fadeIn(500);
            }

            if (text.length < 10) {
                event.preventDefault()
                statusElementText.append('I know you can type more!').hide().fadeIn(500);
            }
        })
    })
    /*
        Function to validate an email.
    */
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

})(jQuery);
