let contactButton= document.getElementsByClassName("main__presentation__photograph__button");
let contactEl = document.getElementsByClassName("contact")
let contactForm =document.getElementsByClassName("contact__form")
let closeButton = document.getElementsByClassName("contact__form__cross");
let headerTest = document.getElementsByClassName("main__presentation__photograph__name");
let mainDiv = document.getElementsByTagName("html");
let body= document.getElementsByTagName("body");
let submit = document.getElementsByTagName("form")
let inputs= document.getElementsByTagName("input")
const textArea= document.getElementsByTagName("textarea")
// OPEN MODAL
contactButton[0].addEventListener("click",function(e){
    e.stopPropagation();
    contactEl[0].style.display = "block";
    body[0].setAttribute("aria-hidden","true");
    contactEl[0].setAttribute("aria-hidden","false")
    closeButton[0].focus()
});
//CLOSE MODAL
/// WITH THE X
function ariaHidden (){
    body[0].setAttribute("aria-hidden","false");
    contactEl[0].setAttribute("aria-hidden","true");

}
closeButton[0].addEventListener("click",function(){
    contactEl[0].style.display= "none";
    ariaHidden()
   });
/// WHEN CLICK OUTSIDE THE MODAL
mainDiv[0].addEventListener("click", function(e){
    if (e.target.parentNode == contactForm[0] || e.target.parentNode.parentNode  == contactForm[0]) {
    } else { 
    ariaHidden()
    contactEl[0].style.display= "none";}
})

document.addEventListener("keydown", function(evt){
    if (evt.key === "Escape") {
        ariaHidden();
        contactEl[0].style.display= "none";
    }
}
);
                
submit[0].addEventListener("submit",function(e){
e.preventDefault();
validation();
})
function validation (){
    for(var i=0; i< inputs.length -1; i++) {
        if( inputs[i].value !=undefined)
        { 
            contactEl[0].style.display= "none";
            inputs[i].value="";
            textArea[0].value="";
    }
    }
}