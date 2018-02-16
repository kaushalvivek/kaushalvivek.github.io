function intro() {
    $("#button_1").hide();
    $("#button_2").hide();
    $("#instructions").hide();
    $("#instructions_p").hide();

    window.setTimeout(
        function() {
            $('#main_title').addClass('fadeOut')
        }, 2000)
    window.setTimeout(
        function() {
            $("#main_title").html('How good are you at taking decisions?')
            $("#main_title").removeClass('fadeOut')
        }, 2800)
    window.setTimeout(
        function() {
            $('#button_1').show()
            $("#button_1").addClass('fadeIn')
        }, 3700)
}

function temp() {
    $('#button_1').hide()
    $("#button_2").hide();
    $("#instructions").hide();
    $("#instructions_p").hide();
    $('#main_title').addClass('fadeOut')

    window.setTimeout(
        function() {
            $("#main_title").html('Coming Soon')
            $("#main_title").removeClass('fadeOut')
        }, 1500)
}

function instruction() {
    $('#button_1').hide()
    $('#instructions_p').html('There will be three rounds, with five stages in each round.<br /><br /> In each stage, you will be given two job options, you have to select one.<br /><br />Every job requires you to perform well, your performance will be rated every year.<br /><br />If your annual performance is below the company\'s requirement, you\'ll be fired.<br /><br /> Getting fired results in $100,000 being deducted from your net worth, so choose wisely. </br><br /> The goal is to be as rich as possible at the end of the rounds.')
    $('#instructions').html('Remember these.')
    $('#main_title').addClass('fadeOut')

    window.setTimeout(
        function() {
            $('#instructions').addClass('fadeIn')
            $("#instructions").show()
        }, 1000)
    window.setTimeout(
        function() {
            $('#instructions_p').addClass('fadeIn')
            $("#instructions_p").show()
        }, 2000)

    window.setTimeout(
        function() {
            $("#button_2").addClass('fadeIn')
            $('#button_2').show()
        }, 3000)
}

intro();