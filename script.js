let next = document.querySelector(".button1");
let imageOne= document.querySelector(".imageOne");
let imageTwo= document.querySelector(".imageTwo");
let back = document.querySelector(".button2");

next.onclick=function(){
  imageOne.style.display = "none";
  imageTwo.style.display = "block";
}

back.onclick=function(){
  imageOne.style.display = "block";
  imageTwo.style.display = "none";
}