/**
 * Created by Jonathan on 3/8/2017.
 */
var q1 = [
    'What is 5 x 10?',
    'What is the square root of 169?',
    'What is the length of the hypotenuse of a right triangle whose legs have a length of 3 and 4?',
    'How many degrees are there in square?'
];
var q2 = [
    'What part of speech is the word \'for\'?',
    'What part of the sentence does the main noun go in?',
    'Does a fantasy book fall under non-fiction or fiction?',
    'What part of speech is the word \'person\'?'
];
var q3 = [
    'How many bases are there in DNA?',
    'What is the acceleration due to Gravity (nearest whole number) in meters per seconds squared?',
    'What is the pH value of pure water?',
    'How many layers does the Earth have?'
];
var q4 = [
    'What year did Columbus sail the ocean blue?',
    'What Ancient country (IE: China, Rome, Persia, Mongilia) is still around today?',
    'What Roman Emperor made Roman Catholicism the official religion of the Roman Empire?',
    'What Country first settled the USA?'
];

var x;
var y;
var ques;
var ans;
var uans;
var uansr;
var cor = 0;
var quesa = 0;
var score;
var name;

function qtype() {
    x = Math.floor(Math.random() * 4) + 1;
    document.getElementById('check').innerHTML = '<br>';
    document.getElementById('ans').reset();
    if (x == 1) {
        question1();
    } else if (x == 2) {
        question2();
    } else if (x == 3) {
        question3();
    } else if (x == 4) {
        question4();
    }

}

function qans() {
    uansr = document.getElementById('answer').value;
    uans = uansr.toLowerCase();
    if (uans == ans) {
        cor = cor + 1;
        document.getElementById('check').innerHTML = "Correct";
    } else if (uans != ans) {
        document.getElementById('check').innerHTML = "Wrong";
    }
}


function question1() {
    ques = Math.floor(Math.random() * 4) + 1;
    if (ques == 1) {
        ans = '50';
    } else if (ques == 2) {
        ans = '13';
    } else if (ques == 3) {
        ans = '5';
    } else if (ques == 4) {
        ans = '360';
    }
    document.getElementById('q').innerHTML = q1[ques - 1];
    quesa = quesa + 1;
}

function question2() {
    ques = Math.floor(Math.random() * 4) + 1;
    if (ques == 1) {
        ans = 'conjunction';
    } else if (ques == 2) {
        ans = 'subject';
    } else if (ques == 3) {
        ans = 'fiction';
    } else if (ques == 4) {
        ans = 'noun';
    }
    document.getElementById('q').innerHTML = q2[ques - 1];
    quesa = quesa + 1;
}

function question3() {
    ques = Math.floor(Math.random() * 4) + 1;
    if (ques == 1) {
        ans = '4';
    } else if (ques == 2) {
        ans = '10';
    } else if (ques == 3) {
        ans = '7';
    } else if (ques == 4) {
        ans = '4';
    }
    document.getElementById('q').innerHTML = q3[ques - 1];
    quesa = quesa + 1;
}

function question4() {
    ques = Math.floor(Math.random() * 4) + 1;
    if (ques == 1) {
        ans = '1492';
    } else if (ques == 2) {
        ans = 'china';
    } else if (ques == 3) {
        ans = 'constantine';
    } else if (ques == 4) {
        ans = 'great britain';
    }
    document.getElementById('q').innerHTML = q4[ques - 1];
    quesa = quesa + 1;
}

function end() {
    name = document.getElementById('name').value;
    score = (cor / quesa) * 100;
    document.getElementById('sco').innerHTML = name + ', you scored a ' + Math.round(score);
}

function no() {
    window.alert('You have to take the Quiz someday');
    document.getElementById('no').disabled = true;
}