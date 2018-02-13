// Constants
// ---------------------------------------------------------------------------------------------------
var high_risk_sal = [150, 165, 170, 178, 190, 165, 170, 175, 182, 196];
var low_risk_sal = [69, 74, 84, 79, 89, 74, 84, 89, 83, 91];
var high_risk_req = [8, 7, 8, 7, 8, 8, 7, 8, 7, 8];
var low_risk_req = [3, 3, 4, 3, 3, 3, 4, 3, 4, 4];
var performance_score = [8, 5, 7, 9, 8, 8, 5, 7, 9, 4]
var high_risk_co = ['Google Inc.', 'Amazon', 'Apple Inc.', 'Facebook Inc.', 'Microsoft'];
var low_risk_co = ['Infosys', 'TCS', 'L&T Infotech', 'Accenture', 'Cognizant'];

var high_good = ['Your risk paid off. Enjoy the cash!',
    'We are thoroughly impressed with your gut instincts.',
    'Your accuracy is uncanny, Great job.',
    'Congratulations! You kept your job.',
    'You survived the year! Well Done.'
]
var high_bad = ['Gut instincts do not always pay off. You\'re fired.',
    'You are fired, sorry.',
    'We like the way you take risks, but your employer doesn\'t, sorry. You\'re fired.',
    'We see what you were trying to do, but it didn\'t work out. Fired.',
    'Risks are good. Too much of risk is a differnt story. Fired, sorry.'
]
var low = ['Playing Safe, are we?'

]

// ---------------------------------------------------------------------------------------------------

// Variables 
// ---------------------------------------------------------------------------------------------------
var state = 0;
var chosen = -1;
// ---------------------------------------------------------------------------------------------------

// Output Variables
// ---------------------------------------------------------------------------------------------------
var responses = []
var net_worth = 0;
var idkey = (randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// ---------------------------------------------------------------------------------------------------

// Functions for selections
// ---------------------------------------------------------------------------------------------------
function selected1() {
    if (chosen > 0) {
        return
    }
    $('#job2').hide();
    $('#job1').css('left', '36%');
    responses.push(1);
    chosen = 1;
    if (high_risk_req[state - 1] > performance_score[state - 1]) {
        net_worth -= 150;
    } else {
        net_worth += high_risk_sal[state - 1];
    }
}

function selected2() {
    if (chosen > 0) {
        return
    }
    $('#job1').hide();
    $('#job2').css('left', '36%');
    responses.push(2);
    chosen = 2;
    if (low_risk_req[state - 1] > performance_score[state - 1]) {
        net_worth -= 200;
    } else {
        net_worth += low_risk_sal[state - 1];
    }
}
// ---------------------------------------------------------------------------------------------------

// Main 'Generator' button Function
// ---------------------------------------------------------------------------------------------------
function generate() {
    if (state == 10 && chosen == 3) {
        handle_send();
        $("#job1").hide();
        $("#job2").hide();
        $('#worth').hide();
        $("#instruction").hide();
        $("#generator").hide();
        $('#main_title').hide();
        $('#score').hide();
        $('#stage').hide();
        window.location.href = "https://goo.gl/forms/4qj1YDNmrWHvhfUy2";
        return
    }
    if (state == 10 && chosen == 0) {
        send_data();
        return;
    } else if (state == 5 && chosen == 0) {
        console.log('okay')
        $("#main_title").html('Round 2');
        $("#job1").hide();
        $("#job2").hide();
        $('#worth').hide();
        $("#instruction").hide();
        $("#generator").hide();
        intro();
        return;
        // intro();
    } else if (chosen == -1) {
        return
    } else if (chosen == 0) {
        job_manager();
        return
    } else if (chosen == 1) {
        performance_cutoff = high_risk_req[state - 1];
    } else {
        performance_cutoff = low_risk_req[state - 1];
    }
    $("#job1").hide();
    $("#job2").hide();
    $('#worth').hide();
    $("#instruction").hide();
    $("#instruction").html('Your performance score for the year is:');
    $("#instruction").addClass('fadeIn');
    $("#instruction").show();
    $("#generator").hide();
    $('#score').html(performance_score[state - 1]);
    window.setTimeout(
        function() {
            $('#score').removeClass('fadeOut');
            $('#score').addClass('fadeIn');
            $('#score').show();
        }, 1000
    )
    if (performance_score[state - 1] < performance_cutoff) {
        $('#main_title').html('Sorry, you got fired.')
    } else {
        $('#main_title').html('Congratulations! You kept your job.')
    }
    $('#worth').html('Net Worth: $' + net_worth + ',000');
    window.setTimeout(
        function() {
            $('#main_title').removeClass('fadeOut');
            $('#main_title').addClass('fadeIn');
            $('#main_title').show();
            $('#worth').removeClass('fadeOut');
            $('#worth').addClass('fadeIn');
            $('#worth').show();
            $("#stage").addClass('fadeIn');
            $('#stage').show();
        }, 2000
    )
    window.setTimeout(
        function() {
            $('#generator').html('Proceed');
            chosen = 0;
            $('#generator').removeClass('fadeOut');
            $('#generator').addClass('fadeIn');
            $('#generator').css('left', '45%');
            $('#generator').show();
        }, 3000
    )
}
// ---------------------------------------------------------------------------------------------------

// Reset to Normal
// ---------------------------------------------------------------------------------------------------
function reset() {
    $('#job1').show();
    $('#job2').show();
    $('#job1').css('left', '20%');
    $('#job2').css('left', '50%');
}
// ---------------------------------------------------------------------------------------------------

// Introductory Function, First to run
// ---------------------------------------------------------------------------------------------------
function intro() {
    $("#job1").hide();
    $("#stage").hide();
    $("#job2").hide();
    $("#worth").hide();
    $("#score").hide();
    $("#instruction").hide();
    $("#generator").hide();
    window.setTimeout(
        function() {
            $('#main_title').addClass('fadeOut');
        }, 2000)
    window.setTimeout(
        function() {
            $("#job1").addClass('fadeIn');
            $("#job2").addClass('fadeIn');
            $("#stage").addClass('fadeIn');
            $("#worth").addClass('fadeIn');
            $("#instruction").addClass('fadeIn');
            $("#generator").addClass('fadeIn');
            $("#job1").show();
            $("#job2").show();
            $("#worth").show();
            $("#stage").show();
            $("#instruction").show();
            $("#generator").show();
            job_manager();
        }, 3000)
}
// ---------------------------------------------------------------------------------------------------

// Job Manager Function
// ---------------------------------------------------------------------------------------------------
function job_manager() {
    chosen = -1;
    $('#main_title').hide();
    $('#score').hide();
    $('#instruction').html('Choose One of the following Jobs');
    $('#generator').html('See Your Performance Score');
    $('#generator').css('left', '40%');
    if (state == 10) {
        return
    } else if (state >= 5) {
        $('#job1').html(high_risk_co[state - 5] + '<br /><br />Salary: $' + high_risk_sal[state] + ',000<br/><br/>Required Performance: ' + high_risk_req[state])
        $('#job2').html(low_risk_co[state - 5] + '<br /><br />Salary: $' + low_risk_sal[state] + ',000<br/><br/>Required Performance: ' + low_risk_req[state])
    } else {
        $('#job1').html('Salary: $' + high_risk_sal[state] + ',000<br/><br/>Required Performance: ' + high_risk_req[state])
        $('#job2').html('Salary: $' + low_risk_sal[state] + ',000<br/><br/>Required Performance: ' + low_risk_req[state])
    }
    state += 1;
    $("#stage").html('Stage: ' + state + "/10")
    reset();
}
// ---------------------------------------------------------------------------------------------------

// Final Function, last to run
// ---------------------------------------------------------------------------------------------------
function send_data() {
    chosen = 3;
    $("#job1").hide();
    $("#job2").hide();
    $("#worth").hide();
    $("#score").hide();
    $("#instruction").hide();
    $("#generator").hide();
    $('#main_title').html('Almost Done, great going!')
    $('#main_title').hide();
    $("#instruction").html('Your KEY is : ' + idkey + '<br/><br/> It has already been copied to your clipboard.');
    copyToClipboard(idkey);
    $('#instruction').css('font-size', '18px');
    $('#instruction').css('right', '0%');
    $('#instruction').css('left', '0%');
    $('#instruction').css('top', '40%');
    $('#main_title').css('top', '20%');
    $('#generator').css('top', '60%');
    $('#generator').css('right', '0%');
    $('#generator').css('left', '47%');
    $('#generator').html('Continue');
    window.setTimeout(
        function() {
            $('#main_title').addClass('fadeIn');
            $('#main_title').show();
        }, 1000)
    window.setTimeout(
        function() {
            $('#instruction').addClass('fadeIn');
            $('#instruction').show();
        }, 2000)
    window.setTimeout(
        function() {
            $('#generator').addClass('fadeIn');
            $('#generator').show();
        }, 3000)
}
// ---------------------------------------------------------------------------------------------------

// Function to Send Mail
// ---------------------------------------------------------------------------------------------------
function getData() {
    var data = {
        KEY: idkey,
        sequence: responses,
        worth: net_worth,
    };
    console.log(data);
    return data;
}

function handle_send() {
    var data = getData();
    var url = "https://script.google.com/macros/s/AKfycbzE1030v0R1CnEpxGatJ1aAKGL-Ixfvwk4nldj_PvQH3TAOy5iv/exec";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log(xhr.status, xhr.statusText)
        console.log(xhr.responseText);
        return;
    };
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
}
// ---------------------------------------------------------------------------------------------------

// Function to Copy to Clipboard
// ---------------------------------------------------------------------------------------------------
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    // $temp.val($(element).text()).select();
    $temp.val(element).select();
    document.execCommand("copy");
    $temp.remove();
}
// ---------------------------------------------------------------------------------------------------

// Function to Generate Special Identification Key
// ---------------------------------------------------------------------------------------------------
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}
// ---------------------------------------------------------------------------------------------------

// Calling functions
// ---------------------------------------------------------------------------------------------------
intro();