 var player ={ score: 0}
 var count  = 0;
 var score = 0;
 var wbtn1 = document.querySelector('.wans1');
 var wbtn2 = document.querySelector('.wans2');
 var wbtn3 = document.querySelector('.wans3');
 //var wbtn  = wbtn1 + wbtn2 +wbtn3;
 var rbtn = document.querySelector('.rans1');
 function exam(){
    
    
}
function wrong(){
    count = count + 1;
    console.log("wrong");
    nextquest(count);
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
    nextquest(count);
    return count;
    
    
}
function nextquest(count){
    var questions = new Array('HTML stands for', 'WWW stands for', 'HTTP stands for');
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
    document.querySelector('.hidden').style.display = 'block';
    var count = 0;
    nextquest(count);
    // var a = new Date();
    // console.log(a)
    setInterval(function(){
        var day = new Date();
        console.log(day)
        var sec = day.getMinutes() * 60 + day.getSeconds();
        var settime = 60 * 5;
        var countdown = settime - sec % settime;
        var final = parseInt(countdown / 60) + ':' + countdown % 60;
        document.querySelector('.timer').innerHTML = final; 
    },500); 
}

// var d = new Date();
// console.log(d)
console.log(player.score)
btn.addEventListener('click',show)
rbtn.addEventListener('click', function (){console.log( "main" + count); count = right(count, player.score); console.log( "after" + count);});
wbtn1.addEventListener('click', function(){count = wrong(count);})
wbtn2.addEventListener('click', function(){count = wrong(count);})
wbtn3.addEventListener('click', function(){count = wrong(count);})

