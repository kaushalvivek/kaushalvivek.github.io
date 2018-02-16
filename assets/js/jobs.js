// Constants
// ---------------------------------------------------------------------------------------------------
var high_risk_sal = [150, 165, 170, 178, 190, 165, 170, 175, 182, 196, 152, 167, 172, 180, 192];
var low_risk_sal = [69, 74, 84, 79, 89, 74, 84, 89, 83, 91, 71, 76, 86, 81, 91];
var high_risk_req = [8, 7, 8, 7, 8, 8, 7, 8, 7, 8, 7, 8, 7, 8, 7];
var low_risk_req = [3, 3, 4, 3, 3, 3, 4, 3, 4, 4, 4, 4, 3, 3, 4];
var performance_score = [8, 5, 7, 9, 8, 8, 4, 7, 9, 4, 7, 6, 3, 8, 9]
var high_risk_co = ['Google Inc.', 'Amazon', 'Apple Inc.', 'Facebook Inc.', 'Microsoft', 'Capgemini', 'HCL Technologies', 'Tech Mahindra', 'Wipro', 'Honeywell Co.'];
var low_risk_co = ['Infosys', 'TCS', 'L&T Infotech', 'Accenture', 'Cognizant', 'Adobe', 'Intel', 'Uber', 'Samsung', 'Netflix'];

var high_good = [1, 4, 5, 6, 9, 11, 14, 15];

var high_high = ['Your risk paid off. Enjoy the cash!',
    'We are thoroughly impressed with your gut instincts.',
    'Your accuracy is uncanny, Great job.',
    'Congratulations! You kept your job.',
    'You survived the year! Well Done.'
]
var low_high = ['Gut instincts do not always pay off. You\'re fired.',
    'You are fired, sorry.',
    'We like the way you take risks, but your employer doesn\'t, sorry. You\'re fired.',
    'We see what you were trying to do, but it didn\'t work out. Fired.',
    'Risks are good. Too much of risk is a differnt story. Fired, sorry.'
]
var high_low = ['Playing Safe, are we? You kept you job though.',
    'Slow and steady don\'t win the race here, well, atleast you are not fired.',
    'Could have taken that high paying job, you did really well!',
    'Have more faith in your work! You could have taken the high paying job.',
    'You could have taken the high paying job, Your performance is off the charts!'
]

var low_low = ['You managed to save you job.',
    'Phew, that was close. You would have been fired at that high paying job.',
    'Not fired, was close though. Smart play to not take that high-paying job.',
    'You made it thorugh, had you taken that other job, you\'d have been fired.',
    'You performance was par, the company is not firing you. For now.'
]

// ---------------------------------------------------------------------------------------------------

// Variables 
// ---------------------------------------------------------------------------------------------------
var state = 0;
var stage = 0;
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
    if (chosen > 0)
        return
    $('#job2').hide();
    $('#job1').css('left', '36%');
    responses.push(1);
    chosen = 1;
    if (high_risk_req[state - 1] > performance_score[state - 1]) {
        net_worth -= 100;
    } else {
        net_worth += high_risk_sal[state - 1];
    }
}

function selected2() {
    if (chosen > 0)
        return
    $('#job1').hide();
    $('#job2').css('left', '36%');
    responses.push(2);
    chosen = 2;
    if (low_risk_req[state - 1] > performance_score[state - 1]) {
        net_worth -= 100;
    } else {
        net_worth += low_risk_sal[state - 1];
    }
}
// ---------------------------------------------------------------------------------------------------

// Main 'Generator' button Function
// ---------------------------------------------------------------------------------------------------
function generate() {

    if (state == 15 && chosen == 3) {
        handle_send();
        animation1();
        $('#main_title').hide();
        window.location.href = "https://goo.gl/forms/4qj1YDNmrWHvhfUy2";
        return
    }
    if (state == 15 && chosen == 0) {
        send_data();
        return;
    } else if (state == 10 && chosen == 0) {
        stage = 0;
        $("#main_title").html('Round 3');
        intro();
        return;
    } else if (state == 5 && chosen == 0) {
        stage = 0;
        $("#main_title").html('Round 2');
        intro();
        return;
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
    animation2();
    $("#instruction").html('Your performance score for the year is:');
    $("#instruction").addClass('fadeIn');
    $("#instruction").show();
    $('#score').html(performance_score[state - 1]);
    window.setTimeout(
            function() {
                $('#score').removeClass('fadeOut');
                $('#score').addClass('fadeIn');
                $('#score').show();
            }, 1000
        )
        // if (performance_score[state - 1] < performance_cutoff) {
        //     $('#main_title').html('Sorry, you got fired.')
        // } else {
        //     $('#main_title').html('Congratulations! You kept your job.')
        // }
    user_feedback();
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
            $("#highscore").addClass('fadeIn');
            $('#highscore').show();
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

// User Feedback Function
// ---------------------------------------------------------------------------------------------------
function user_feedback() {
    var flag1, flag2, feedback_choices, feedback;
    if ((state % 5 == 0 || state % 5 == 4 || state % 5 == 1) && (state != 10)) {
        flag1 = 1;
    } else flag1 = 2;
    flag2 = chosen;
    if (flag1 == 1 && flag2 == 1) {
        feedback_choices = high_high;
        console.log('high_high')
    } else if (flag1 == 1 && flag2 == 2) {
        feedback_choices = high_low;
        console.log('high_low')
    } else if (flag1 == 2 && flag2 == 1) {
        feedback_choices = low_high;
        console.log('low_high')
    } else {
        feedback_choices = low_low;
        console.log('low_low')
    }
    feedback = feedback_choices[Math.floor(Math.random() * feedback_choices.length)];
    $('#main_title').html(feedback)
}
// ---------------------------------------------------------------------------------------------------

// Introductory Function, First to run
// ---------------------------------------------------------------------------------------------------
function intro() {
    animation1();
    window.setTimeout(
        function() {
            $('#main_title').addClass('fadeOut');
        }, 2000)
    window.setTimeout(
        function() {
            $("#job1").addClass('fadeIn');
            $("#job2").addClass('fadeIn');
            $("#stage").addClass('fadeIn');
            $("#highscore").addClass('fadeIn');
            $("#worth").addClass('fadeIn');
            $("#instruction").addClass('fadeIn');
            $("#generator").addClass('fadeIn');
            $("#job1").show();
            $("#job2").show();
            $("#worth").show();
            $("#stage").show();
            $("#highscore").show();
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
    if (state == 15) {
        return
    } else if (state >= 5) {
        $('#job1').html(high_risk_co[state - 5] + '<br /><br />Salary: $' + high_risk_sal[state] + ',000<br/><br/>Required Performance: ' + high_risk_req[state])
        $('#job2').html(low_risk_co[state - 5] + '<br /><br />Salary: $' + low_risk_sal[state] + ',000<br/><br/>Required Performance: ' + low_risk_req[state])
    } else {
        $('#job1').html('Salary: $' + high_risk_sal[state] + ',000<br/><br/>Required Performance: ' + high_risk_req[state])
        $('#job2').html('Salary: $' + low_risk_sal[state] + ',000<br/><br/>Required Performance: ' + low_risk_req[state])
    }
    state += 1;
    stage += 1;
    $("#stage").html('Stage: ' + stage + "/5")
    reset();
}
// ---------------------------------------------------------------------------------------------------

// Final Function, last to run
// ---------------------------------------------------------------------------------------------------
function send_data() {
    chosen = 3;
    animation1();
    $('#main_title').html('Almost Done, great going!')
    $("#instruction").html('Your KEY is : ' + idkey + '<br/><br/> It has already been copied to your clipboard.');
    copyToClipboard(idkey);
    animation3();
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

// Animations
// ---------------------------------------------------------------------------------------------------
function animation1() {
    $("#job1").hide();
    $("#job2").hide();
    $('#worth').hide();
    $("#instruction").hide();
    $("#generator").hide();
    $('#score').hide();
    $('#stage').hide();
    $('#highscore').hide();
}

function animation2() {
    $("#job1").hide();
    $("#job2").hide();
    $('#worth').hide();
    $("#instruction").hide();
    $("#generator").hide();
}

function animation3() {
    $('#instruction').css('font-size', '18px');
    $('#instruction').css('right', '0%');
    $('#instruction').css('left', '0%');
    $('#instruction').css('top', '40%');
    $('#main_title').css('top', '20%');
    $('#generator').css('top', '60%');
    $('#generator').css('right', '0%');
    $('#generator').css('left', '47%');
}
// ---------------------------------------------------------------------------------------------------
// Calling functions
// ---------------------------------------------------------------------------------------------------
intro();