let contactButton= document.getElementsByClassName("main__presentation__photograph__button");
let  contactEl = document.getElementsByClassName("contact")
let closeButton = document.getElementsByClassName("contact__form__cross");
let headerTest = document.getElementsByClassName("main__presentation__photograph__name");


contactButton[0].addEventListener("click",function(){
    contactEl[0].style.display = "block";

});
closeButton[0].addEventListener("click",function(){
    contactEl[0].style.display= "none"
   
   
   });