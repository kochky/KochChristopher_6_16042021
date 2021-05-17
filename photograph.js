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




 
fetch('FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    } else {alert ("test")}
  })
  .then(function(value) {
    var urlId = window.location.search.slice(1);

     
      let test3= value.photographers.find(x => x.id == urlId);

      
   const photoName = document.getElementById("photographer_name");
   const photoLocation = document.getElementById("photographer_location");
   const photoDescription = document.getElementById("photographer_description");
   const tagContainer= document.getElementsByClassName("main__presentation__photograph__tagsContainer");
   const photoPicture = document.getElementById("photographer_picture");
   const nameForm = document.getElementById("name_Modale")

   photoName.innerHTML = test3.name;
   photoLocation.innerHTML= test3.city+","+test3.country;
   photoDescription.innerHTML= test3.tagline;
   photoPicture.setAttribute("src", "/images/sample photos/Photographers ID Photos/"+test3.portrait)
   var numberOfPhotographersTags = test3.tags.length;
   nameForm.innerHTML= "Contactez-moi" + "<br />" +test3.name
   
   for (var x=0; x < numberOfPhotographersTags; x++) {
         
    var tags2 = document.createElement("div");
    tagContainer[0].appendChild(tags2);
    tags2.classList.add("main__presentation__photograph__tags");
    tags2.innerHTML= "#"+test3.tags[x];
    
   }





   var spaceLastname = test3.name.indexOf(" ");
   var lastname = test3.name.substr(0,spaceLastname);

   let numberOfPicture= value.media.filter(x => x.photographerId == urlId);

   for (var p=0; p < numberOfPicture.length; p++) {
       console.log("test")
       var newPicture= document.createElement("div");
       var pictureDiv = document.getElementsByClassName("main__photos__article");
       pictureDiv[0].appendChild(newPicture);
       newPicture.classList.add("main__photos__article__container")
    
     newImage = document.createElement("img");
    newImage.classList.add("main__photos__article__container__img");
    newPicture.appendChild(newImage);
     newImage.setAttribute("src", "/images/sample photos/"+lastname+"/"+numberOfPicture[p].image);
     
     newContainerDescription = document.createElement("div");
     newContainerDescription.classList.add("main__photos__article__container__description");
     newPicture.appendChild(newContainerDescription);

     newContainerDescriptionName = document.createElement("span");
     newContainerDescription.appendChild(newContainerDescriptionName);
     newContainerDescriptionName.classList.add("main__photos__article__container__description__name");
     newContainerDescriptionName.innerHTML = numberOfPicture[p].title


    newDiv= document.createElement("div");
     newContainerDescription.appendChild(newDiv);
     newSpan= document.createElement("span");
      newSpan.classList.add("main__photos__article__container__description__like");
      newDiv.appendChild(newSpan);
      newSpan.innerHTML = "12"
       newSpan2= document.createElement("span");
      newSpan2.classList.add("main__photos__article__container__description__heart");
  newDiv.appendChild(newSpan2);
     
     newI= document.createElement("i")
      newSpan2.appendChild(newI);
      newI.classList.add("fas");
      newI.classList.add("fa-heart")




}  


   })
    
 

   .catch(function(err) {
    
    
});
