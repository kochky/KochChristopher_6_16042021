let contactButton= document.getElementsByClassName("main__presentation__photograph__button");
let contactEl = document.getElementsByClassName("contact")
let contactForm =document.getElementsByClassName("contact__form")
let closeButton = document.getElementsByClassName("contact__form__cross");
let headerTest = document.getElementsByClassName("main__presentation__photograph__name");
let mainDiv = document.getElementsByTagName("html");

// OPEN MODAL
contactButton[0].addEventListener("click",function(e){
    e.stopPropagation();
    
    contactEl[0].style.display = "block";

});
//CLOSE MODAL
/// WITH THE X
closeButton[0].addEventListener("click",function(){
    contactEl[0].style.display= "none"
   });
/// WHEN CLICK OUTSIDE THE MODAL
mainDiv[0].addEventListener("click", function(e){
    console.log(e.target.parentNode.parentNode)
    if (e.target.parentNode == contactForm[0] || e.target.parentNode.parentNode  == contactForm[0]) {
    
    } else { contactEl[0].style.display= "none"}
})
