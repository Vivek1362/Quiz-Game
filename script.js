var score =0;
function submit(){
    score++;
    document.querySelector("#point").innerHTML=score;
}
function closeall(){
    document.querySelectorAll(".ques").forEach(function(oneques){
        oneques.style.display="none"
    })
}
function change1(){
    closeall();
    document.querySelector("#ques2").style.display="block";
}

function change2(){
    closeall();
    document.querySelector("#ques3").style.display="block";
}

function change3(){
    closeall();
    document.querySelector("#ques4").style.display="block";
}

function change4(){
    closeall();
    document.querySelector("#ques5").style.display="block";
}

function change5(){
    closeall();
    document.querySelector("#ques6").style.display="block";
}

function change6(){
    closeall();
    document.querySelector("#ques7").style.display="block";
}

function change7(){
    closeall();
    document.querySelector("#ques8").style.display="block";
}

function change8(){
    closeall();
    document.querySelector("#ques9").style.display="block";
}

function change9(){
    document.querySelector("#welcome").style.display="none";
    document.querySelector("#quescontainer").style.display="none";
    document.querySelector("#finalresult").style.display="flex";
    document.querySelector("#answer").innerHTML=score;
}


function start(){
    document.querySelector("#welcome").style.display="none";
    document.querySelector("#quescontainer").style.display="block";
}