let first = document.querySelector("#uniq1");
let second= document.querySelector("#uniq2");
let third = document.querySelector("#uniq3");


function openForm_1(){
  first.style.visibility = "visible";
}
 function openForm_2(){
  second.style.visibility = "visible";
}
function openForm_3(){
  third.style.visibility = "visible";
}



first.onclick = function(){
  first.style.visibility = "hidden";
}
second.onclick = function(){
  second.style.visibility = "hidden";
}
third.onclick = function(){
  third.style.visibility = "hidden";
}