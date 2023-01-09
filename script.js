let question=document.getElementsByClassName("question");
let answer =document.getElementsByClassName("answers");

for(let i=0;i<=question.length;i++){
    question[i].addEventListener("click", function(){
        answer[i].classList.toggle("ans");
            question[i].classList.toggle("click");
    })
}










