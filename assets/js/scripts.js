var player = {
    name: 'hello',
    score: 0
}
var btn = document.querySelector('#generate')
var count = 0;
var score = 0;
var wrbtn = document.querySelectorAll('.wrbtn');
var wbtn1 = document.querySelector('.wans1');
var wbtn2 = document.querySelector('.wans2');
var wbtn3 = document.querySelector('.wans3');
var rbtn = document.querySelector('.rans1');
var totaltime = 20;
var len = '';
var end = document.querySelector('.end');
// var lsnames = '';
var sbbtn = document.querySelector('#sub')

function wrong() {
    count = count + 1;

    document.createElement('p').innerHTML = 'correct'
    totaltime = totaltime - 4;

    var correct = 'wrong';
    document.querySelector('.right').innerHTML = correct;
    nextquest(count);

    return count;
}
function right(count) {
    count = count + 1;
    player.score = player.score + 1;
    document.querySelector('.score').innerHTML = player.score;
    var correct = 'correct';
    document.querySelector('.right').innerHTML = correct;
    if(count >= questions.length){
        endgame();
        tstfnc();
    }else{
        nextquest(count);
    }
    
    
    return count;


}
var questions = new Array('HTML stands for', 'WWW stands for', 'HTTP stands for');

function nextquest(count) {
    var wans1 = new Array('Hypo text made up language', 'World Wide Weapon', 'Hyper text Traditional Protocol');
    var wans2 = new Array('Heuristic language', 'World Wide Windows', ' Hyper Text Transfer Program');
    var wans3 = new Array('Hypertext Manipulation language', 'World Wide Writers', 'Hypertext Transmission Protocol');
    var rans1 = new Array('Hypertext markup language', 'World Wide Web', 'Hypertext Transfer Protocol');
    document.querySelector('.question').innerHTML = questions[count];
    document.querySelector('.wans1').innerHTML = wans1[count];
    document.querySelector('.wans2').innerHTML = wans2[count];
    document.querySelector('.wans3').innerHTML = wans3[count];
    document.querySelector('.rans1').innerHTML = rans1[count];
}

function show() {
    document.querySelector('.butn').style.display = 'none';
    document.querySelector('.hidden').style.display = 'block';
    tstfnc();
    nextquest(count);
}
function tstfnc(){
    var timer = setInterval(function () {
        totaltime--
        var minutes = Math.floor(totaltime / 60);
        var secs = totaltime % 60;
        if (count >= questions.length || totaltime <= 0) {
            clearInterval(timer);
            endgame();

        }
        document.querySelector('.timer').innerHTML = minutes + ':' + secs;
    }, 1000);

}
function gtinfo(e) {
    e.preventDefault()
    len = document.querySelector('#len').value;
    player.name = len;
    var tweb = 'your score is: ' + player.score;
    document.querySelector('.end p').innerHTML = tweb;
    lsnames = localStorage.getItem('playername');
    lsscores = localStorage.getItem('playerscore');
    if (lsnames === null) {
        localStorage.setItem('playername', player.name);
        localStorage.setItem('playerscore', player.score);
    }
    cleanup();

}
function endgame(timer) {

    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.end').style.display = 'block';

}

function cleanup() {
    lsnames = localStorage.getItem('playername');
    lsscores = localStorage.getItem('playerscore');
    document.querySelector('.end').style.display = 'none';
    document.querySelector('.final').style.display = 'block';
    document.querySelector('#cscore').innerText = player.name + ": " + player.score;
    document.querySelector('#last').innerText = lsnames + ": " + lsscores;
    localStorage.setItem('playername', player.name);
    localStorage.setItem('playerscore', player.score);
}


btn.addEventListener('click', show)
rbtn.addEventListener('click', function () {  count = right(count, player.score); });
wbtn1.addEventListener('click', function () { count = wrong(count); })
wbtn2.addEventListener('click', function () { count = wrong(count); })
wbtn3.addEventListener('click', function () { count = wrong(count); })
sbbtn.addEventListener('click', gtinfo);
