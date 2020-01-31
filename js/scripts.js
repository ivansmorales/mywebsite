(function ($) {
    "use strict";

    /*
        Function to hide navbar when scroll down and show navbar when scroll up.
    */
    var firstypos = window.pageYOffset;    
    $(window).scroll(function () {
        var currentypos = window.pageYOffset;
        if (firstypos > currentypos) {
            $('.fixed-top').fadeIn();
            $('.fixed-top').css("background-color", "#000");
        }else{
            $('.fixed-top').fadeOut();
            //$('.fixed-top').css("background-color", "#000");
        }
        firstypos = currentypos;
    });

    /*
        Animation for navbar
    */
    $(window).on("load", function () {
        $('#title .1').css('color', '#000');
        $('#title .2').css('color', '#000');
        $('#title .3').css('color', '#000');
        $('#title .4').css('color', '#000');
        $('#title .5').css('color', '#000');

        setTimeout(function () {
            $('#title .1').css("color", "#BBCDE5");
        }, 1000);
        setTimeout(function () {
            $('#title .2').css("color", "#BBCDE5");
        }, 1300);
        setTimeout(function () {
            $('#title .3').css("color", "#BBCDE5");
        }, 1600);
        setTimeout(function () {
            $('#title .4').css("color", "#BBCDE5");
        }, 1900);
        setTimeout(function () {
            $('#title .5').css("color", "#BBCDE5");
        }, 2200);

        /*
        $('#title .1').fadeOut('fast').delay(1000).fadeIn('fast');
        $('#title .2').fadeOut('fast').delay(1100).fadeIn('fast');
        $('#title .3').fadeOut('fast').delay(1200).fadeIn('fast');
        $('#title .4').fadeOut('fast').delay(1300).fadeIn('fast');
        $('#title .5').fadeOut('fast').delay(1400).fadeIn('fast'); */
        //$('.container-fluid .principal').fadeOut('fast').delay(1000).fadeIn('fast');
	});

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