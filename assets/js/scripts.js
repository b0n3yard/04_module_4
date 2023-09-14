 var player ={ 
    name: 'hello',
    score: 0}
 var count  = 0;
 var score = 0;
 var wrbtn = document.querySelectorAll('.wrbtn');
 var wbtn1 = document.querySelector('.wans1');
 var wbtn2 = document.querySelector('.wans2');
 console.log(wrbtn)
 var wbtn3 = document.querySelector('.wans3');
 var rbtn = document.querySelector('.rans1');
 var totaltime = 30;
 var end = document.querySelector('.end');
 function exam(){
    
    
}
function wrong(){
    count = count + 1;
    console.log("wrong");
    document.createElement('p').innerHTML = 'correct'
    totaltime = totaltime - 4;
    console.log(totaltime)
    var correct = 'wrong';
    document.querySelector('.right').innerHTML = correct;
    nextquest(count);
    console.log("wrong cont: " + count)
    return count;
}
function right(count){
    console.log(count);
    console.log(player.score)
    count = count + 1;
    player.score = player.score + 1;
    console.log(count);
    console.log("right");
    document.querySelector('.score').innerHTML = player.score;
    var correct = 'correct';
    document.querySelector('.right').innerHTML = correct;
    
    nextquest(count);
    return count;
    
    
}
var questions = new Array('HTML stands for', 'WWW stands for', 'HTTP stands for');

function nextquest(count){
    // var questions = new Array('HTML stands for', 'WWW stands for', 'HTTP stands for');
    var wans1 = new Array('Hypo text made up language', 'World Wide Weapon', 'Hyper text Traditional Protocol');
    var wans2 = new Array('Heuristic language', 'World Wide Windows', ' Hyper Text Transfer Program');
    var wans3 = new Array('Hypertext Manipulation language', 'World Wide Writers','Hypertext Transmission Protocol');
    var rans1 = new Array('Hypertext markup language', 'World Wide Web', 'Hypertext Transfer Protocol');
    document.querySelector('.question').innerHTML = questions[count];
    document.querySelector('.wans1').innerHTML = wans1[count];
    document.querySelector('.wans2').innerHTML = wans2[count];
    document.querySelector('.wans3').innerHTML = wans3[count];
    document.querySelector('.rans1').innerHTML = rans1[count];
}   
var btn = document.querySelector('#generate')

function show(){
    document.querySelector('.butn').style.display = 'none';
    document.querySelector('.hidden').style.display = 'block';
    var timer = setInterval(function(){
        totaltime--
        console.log("totaltime: " + totaltime)
        console.log("cont: " + count)
        var minutes = Math.floor(totaltime / 60);
        var secs = totaltime % 60;
        if ( count >= questions.length || totaltime <= 0){
            clearInterval(timer);
            endgame();

        }
        document.querySelector('.timer').innerHTML = minutes + ':' + secs; 
    },1000); 
    
    nextquest(count);
}
function endgame(timer){
    
    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.end').style.display = 'block';
    var len = document.querySelector('#len');
    console.log("hi");
      
    // player.name =  prompt('enter name');
    var tweb = 'your score is: ' + player.score;

     document.querySelector('.end p').innerHTML = tweb;
    
    // var strinfo = info.toString();
    // console.log("stringinfo: " + strinfo);
    localStorage.setItem('playername', player.name);
    localStorage.setItem('playerscore', player.score);
    lsnames = localStorage.getItem('playername');
    lsscores = localStorage.getItem('playerscore');
    console.log(lsnames + ': '+ lsscores);

}

// var d = new Date();
// console.log(d)
console.log(player.score)
btn.addEventListener('click',show)
rbtn.addEventListener('click', function (){console.log( "main" + count); count = right(count, player.score); console.log( "after" + count);});
// console.log('hi')
// wrbtn.forEach(function(i){
//         var test = wrbtn[i];
//         console.log(test)
//         test.addEventListener('click', function(){count = wrong(count);})
// });
wbtn1.addEventListener('click', function(){count = wrong(count);})
wbtn2.addEventListener('click', function(){count = wrong(count);})
wbtn3.addEventListener('click', function(){count = wrong(count);})
lsnames = localStorage.getItem('playername');
lsscores = +localStorage.getItem('playerscore');
console.log(lsnames + ': '+ lsscores)
