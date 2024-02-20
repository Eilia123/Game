try{

// variable
let scoreBox = document.getElementById("score")
let score = 0;
scoreBox.innerHTML = `Your score is ${score}`
let index = 1;
let movemusic = document.getElementById("movemusic")
let losemusic = document.getElementById("losemusic")
let stopmusic = document.getElementById("stopmusic")
let winnigmusic = document.getElementById("winmusic")
 // addeventlis
 function creatBoard(){
    for(let i = 1 ; i<26 ; i++){
        let square = document.createElement("div")
        square.className = "square";
        document.getElementById("container").appendChild(square)
        square.id= "square"+i

        let img = document.createElement("img")
        img.setAttribute("src" , "./img/dummy.png")
        img.id = "dummy"+i
        img.className = "dummy"
        document.getElementById("square"+i).appendChild(img)
    }
}
creatBoard()




    function checkWin(){
        scoreBox.innerHTML = `Your score is ${score}`
        if(score>15){
            winnig()
            winingMusic()
        }
        
    }


    let Random_Number1 = Math.floor( Math.random() * (25 - 1) ) + 1;
    let Random_Number2 = Math.floor( Math.random() * (25 - 1) ) + 1;
    let Random_Number3 = Math.floor( Math.random() * (25 - 1) ) + 1;
    let Random_Number4 = Math.floor( Math.random() * (25 - 1) ) + 1;
    let Random_Number5 = Math.floor( Math.random() * (25 - 1) ) + 1;

    function randomBomB(){
            let bomb = document.createElement("img")
            bomb.setAttribute("src" , "./img/bomb.png")
            bomb.id = "bomb"+1
            bomb.className = "bomb"

            let bomb2 = document.createElement("img")
            bomb2.setAttribute("src" , "./img/bomb.png")
            bomb2.id = "bomb"+2
            bomb2.className = "bomb"

            let bomb3 = document.createElement("img")
            bomb3.setAttribute("src" , "./img/bomb.png")
            bomb3.id = "bomb"+3
            bomb3.className = "bomb"

            let bomb4 = document.createElement("img")
            bomb4.setAttribute("src" , "./img/bomb.png")
            bomb4.id = "bomb"+4
            bomb4.className = "bomb"


            let bomb5 = document.createElement("img")
            bomb5.setAttribute("src" , "./img/bomb.png")
            bomb5.id = "bomb"+5
            bomb5.className = "bomb"
            document.getElementById("square"+Random_Number1).appendChild(bomb)
            document.getElementById("square"+Random_Number2).appendChild(bomb2)
            document.getElementById("square"+Random_Number3).appendChild(bomb3)
            document.getElementById("square"+Random_Number4).appendChild(bomb4)
            document.getElementById("square"+Random_Number5).appendChild(bomb5)
         }

        randomBomB()





document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        goTop()
    }
    else if (e.keyCode == '40') {
        // down arrow
        goDown()
    }
    else if (e.keyCode == '37') {
       // left arrow
       goLeft()
    }
    else if (e.keyCode == '39') {
       // right arrow
       goRight()
    }
}



function goRight(){
    // left:;
    cleanBoard()
    switch (true) {
        case(index == 5):
            index= 4
            stopMusic()
            break;

        case(index == 10):
            index= 9
            stopMusic()

            break;
            
        case(index == 15):
            index= 
            stopMusic()

            break;
        case(index == 20):
            index= 19
            stopMusic()

            break;

        case(index == 25):
            index= 24
            stopMusic()

            break;
        default:

            break;
    }
    index +=1


    if(index==Random_Number1 ||index==Random_Number2 ||index==Random_Number3 ||index==Random_Number4 ||index==Random_Number5){
        showBomb()
        loseMusic()
        document.getElementById("dummy"+index).style.display = "inline"
    }
    else{
        if(document.getElementById("square"+index).style.backgroundColor == "rgb(74, 160, 74)"){
            document.getElementById("dummy"+index).style.display = "inline"
            moveMusic()
        }
        else{
            document.getElementById("square"+index).style.backgroundColor = "rgb(74, 160, 74)"
            document.getElementById("dummy"+index).style.display = "inline"
            score++
            moveMusic()
        }
        checkWin()
    }
}

function goLeft(){
    cleanBoard()
    switch (true) {
        case(index == 1):
            index= 2
            stopMusic()
            break;

        case(index == 6):
            index= 7
            stopMusic()
            break;
            
        case(index == 11):
            index= 12
            stopMusic()
            break;

        case(index == 16):
            index= 17
            stopMusic()
            break;

        case(index == 21):
            index= 22
            stopMusic()
            break;
        default:
            break;
    }
    index -=1

    if(index==Random_Number1 ||index==Random_Number2 ||index==Random_Number3 ||index==Random_Number4 ||index==Random_Number5){    
        showBomb()
        loseMusic()
        document.getElementById("dummy"+index).style.display = "inline"
    }
    else{
        if(document.getElementById("square"+index).style.backgroundColor == "rgb(74, 160, 74)"){
            document.getElementById("dummy"+index).style.display = "inline"
            moveMusic()
        }
        else{
            document.getElementById("square"+index).style.backgroundColor = "rgb(74, 160, 74)"
            document.getElementById("dummy"+index).style.display = "inline"
            score++
            moveMusic()
        }
        checkWin()
    }
}
function goTop(){
    cleanBoard()
    switch (true) {
        case(index == 1):
            index= 6
            stopMusic()

            break;

        case(index == 2):
            index= 7
            stopMusic()

            break;
            
        case(index == 3):
            index= 8
            stopMusic()

            break;
        case(index == 4):
            index= 9
            stopMusic()

            break;

        case(index == 5):
            index= 10
            stopMusic()

            break;
        default:
            break;
    }
    index -=5;
    if(index==Random_Number1 ||index==Random_Number2 ||index==Random_Number3 ||index==Random_Number4 ||index==Random_Number5){
        showBomb()
        loseMusic()
        document.getElementById("dummy"+index).style.display = "inline"
    }
    else{
        if(document.getElementById("square"+index).style.backgroundColor == "rgb(74, 160, 74)"){
            document.getElementById("dummy"+index).style.display = "inline"
            moveMusic()
        }
        else{
            document.getElementById("square"+index).style.backgroundColor = "rgb(74, 160, 74)"
            document.getElementById("dummy"+index).style.display = "inline"
            score++
            moveMusic()
        }
        checkWin()
    }
}

function goDown(){
    cleanBoard()
    switch (true) {
        case(index == 21):
            index= 16
            stopMusic()

            break;

        case(index == 22):
            index= 17
            stopMusic()

            break;
            
        case(index == 23):
            index= 18
            stopMusic()

            break;
        case(index == 24):
            index= 19
            stopMusic()

            break;

        case(index == 25):
            index= 20
            stopMusic()

            break;
        default:
            break;
    }
    index +=5
    if(index==Random_Number1 ||index==Random_Number2 ||index==Random_Number3 ||index==Random_Number4 ||index==Random_Number5){
        showBomb()
        document.getElementById("dummy"+index).style.display = "inline"
        loseMusic()
    }
    else{
        if(document.getElementById("square"+index).style.backgroundColor == "rgb(74, 160, 74)"){
            document.getElementById("dummy"+index).style.display = "inline"
            moveMusic()
        }
        else{
            document.getElementById("square"+index).style.backgroundColor = "rgb(74, 160, 74)"
            document.getElementById("dummy"+index).style.display = "inline"
            score++
            moveMusic()
        }
        checkWin()
    }
}

function cleanBoard(){
    document.getElementById("dummy1").style.display = "none"
    document.getElementById("dummy2").style.display = "none"
    document.getElementById("dummy3").style.display = "none"
    document.getElementById("dummy4").style.display = "none"
    document.getElementById("dummy5").style.display = "none"
    document.getElementById("dummy6").style.display = "none"
    document.getElementById("dummy7").style.display = "none"
    document.getElementById("dummy8").style.display = "none"
    document.getElementById("dummy9").style.display = "none"
    document.getElementById("dummy10").style.display = "none"
    document.getElementById("dummy11").style.display = "none"
    document.getElementById("dummy12").style.display = "none"
    document.getElementById("dummy13").style.display = "none"
    document.getElementById("dummy14").style.display = "none"
    document.getElementById("dummy15").style.display = "none"
    document.getElementById("dummy16").style.display = "none"
    document.getElementById("dummy17").style.display = "none"
    document.getElementById("dummy18").style.display = "none"
    document.getElementById("dummy19").style.display = "none"
    document.getElementById("dummy20").style.display = "none"
    document.getElementById("dummy21").style.display = "none"
    document.getElementById("dummy22").style.display = "none"
    document.getElementById("dummy23").style.display = "none"
    document.getElementById("dummy24").style.display = "none"
    document.getElementById("dummy25").style.display = "none"
}

function showBomb(){
    document.getElementById("dummy"+index).style.display = "inline"
    document.getElementById("bomb1").style.display = "inline"
    document.getElementById("bomb2").style.display = "inline"
    document.getElementById("bomb3").style.display = "inline"
    document.getElementById("bomb4").style.display = "inline"
    document.getElementById("bomb5").style.display = "inline"
    document.getElementById("square"+Random_Number1).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number2).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number3).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number4).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number5).style.backgroundColor = "rgb(211, 96, 96)"

    setTimeout(rest,2000)
     function rest(){
        location.reload();
    }

    setTimeout(alertBox,100)
    function alertBox(){
        alert("You lose")
    }
}

function winnig(){
    document.getElementById("dummy"+index).style.display = "inline"
    document.getElementById("bomb1").style.display = "inline"
    document.getElementById("bomb2").style.display = "inline"
    document.getElementById("bomb3").style.display = "inline"
    document.getElementById("bomb4").style.display = "inline"
    document.getElementById("bomb5").style.display = "inline"
    document.getElementById("square"+Random_Number1).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number2).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number3).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number4).style.backgroundColor = "rgb(211, 96, 96)"
    document.getElementById("square"+Random_Number5).style.backgroundColor = "rgb(211, 96, 96)"

    setTimeout(rest,2000)
     function rest(){
        alert("You won")

        location.reload();
    }
}



document.getElementById("square1").style.backgroundColor = "rgb(74, 160, 74)"
function bombNeuter(){
    if(Random_Number1 == 1 || Random_Number2==1 || Random_Number3 == 1 || Random_Number4 == 1 || Random_Number5 == 1){
        location.reload();
    }
}

bombNeuter()

function moveMusic(){
    movemusic.play()
}
function loseMusic(){
    losemusic.play()
}
function stopMusic(){
    stopmusic.play()
}
function winingMusic(){
    winnigmusic.play()
}
}


























catch{
    console.log(Error)
}