



 
fetch('js/FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    } else {alert ("test")}
  })
  .then(function(value) {



    
// récupère l'id dans l'url
    var urlId = window.location.search.slice(1);

     //cible les média qqui ont l'id correspondant
      let test3= value.photographers.find(x => x.id == urlId);





   //cible les éléments pour y mettre les données   
   const photoName = document.getElementById("photographer_name");
   const photoLocation = document.getElementById("photographer_location");
   const photoDescription = document.getElementById("photographer_description");
   const tagContainer= document.getElementsByClassName("main__presentation__photograph__tagsContainer");
   const photoPicture = document.getElementById("photographer_picture");
   const nameForm = document.getElementById("name_Modale")

   //insérer les données du json pour remplir la page
   photoName.innerHTML = test3.name;
   photoLocation.innerHTML= test3.city+","+test3.country;
   photoDescription.innerHTML= test3.tagline;
   photoPicture.setAttribute("src", "/images/sample photos/Photographers ID Photos/"+test3.portrait)
   var numberOfPhotographersTags = test3.tags.length;
   nameForm.innerHTML= "Contactez-moi" + "<br />" +test3.name
   
   //créer les tags selon leur nombre
   for (var x=0; x < numberOfPhotographersTags; x++) {
         
    var tags2 = document.createElement("div");
    tagContainer[0].appendChild(tags2);
    tags2.classList.add("main__presentation__photograph__tags");
    tags2.innerHTML= "#"+test3.tags[x];
    
   }




//garde le prénom du photographe pour créer le lien vers leur dossier image
   var spaceLastname = test3.name.indexOf(" ");
   var lastname = test3.name.substr(0,spaceLastname);

//cible les média par rapport au id du photographe
   let numberOfPicture= value.media.filter(x => x.photographerId == urlId);
   let totalLike= document.getElementsByClassName("main__like-price-button__number");
   const likeButton = document.getElementsByClassName("main__photos__article__container__description__heart");
   const likeCount = document.getElementsByClassName("main__photos__article__container__description__like");

   //tableau 
   var imageArray= [];
   var mp4Array=[];
   var resultLike = 0
   
   //boucle pour connaitre le nombre de média( image+video)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  for (var p=0; p < numberOfPicture.length; p++) {
   
    //fait le total des likes à afficher en bas
  resultLike +=numberOfPicture[p].likes
      
  totalLike[0].innerHTML = resultLike + "<i class='fas fa-heart main__like-price-button__number__heart'></i>";
     


  //CLICK SUR COEUR FAIT MONTER LIKE

 
  

    
     console.log("test")
   //créer les div des images
    if (numberOfPicture[p].image !=undefined) {
    

  
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
    newSpan.innerHTML = numberOfPicture[p].likes;
      newSpan2= document.createElement("span");
    newSpan2.classList.add("main__photos__article__container__description__heart");
    newDiv.appendChild(newSpan2);

    newI= document.createElement("i")
    newSpan2.appendChild(newI);
    newI.classList.add("fas");
    newI.classList.add("fa-heart")
    newI.classList.add("heart_full")

    newI2= document.createElement("i")
    newSpan2.appendChild(newI2);
    newI2.classList.add("far");
    newI2.classList.add("fa-heart")
    newI2.classList.add("heart_empty")
      
      
  }

//créer les div des video
    else if (numberOfPicture[p].video !=undefined) {
   
   
    
    var newPicture= document.createElement("div");
    var pictureDiv = document.getElementsByClassName("main__photos__article");
    pictureDiv[0].appendChild(newPicture);
    newPicture.classList.add("main__photos__article__container")
 
  newVideo = document.createElement("video");
 newVideo.setAttribute("controls","");
 newVideo.classList.add("main__photos__article__container__img");
 newPicture.appendChild(newVideo);
 newSource= document.createElement("source");
 newVideo.appendChild(newSource)
 
 
  newSource.setAttribute("src", "/images/sample photos/"+lastname+"/"+numberOfPicture[p].video);
  newSource.setAttribute("type", "video/mp4");
  
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
   newSpan.innerHTML = numberOfPicture[p].likes
    newSpan2= document.createElement("span");
   newSpan2.classList.add("main__photos__article__container__description__heart");
newDiv.appendChild(newSpan2);
  
newI= document.createElement("i")
newSpan2.appendChild(newI);
newI.classList.add("fas");
newI.classList.add("fa-heart")
newI.classList.add("heart_full")

newI2= document.createElement("i")
newSpan2.appendChild(newI2);
newI2.classList.add("far");
newI2.classList.add("fa-heart")
newI2.classList.add("heart_empty")
  }
    
  } //FIN BOUCLE



//AUgmente les likes des photos ou diminue au2eme click
let heartFull = document.getElementsByClassName("heart_full");
for (var i=0; i < numberOfPicture.length; i++){
 
   
  (function (i){

  likeButton[i].addEventListener("click", function(e){
  
     if (likeCount[i].innerHTML== numberOfPicture[i].likes) {
      resultLike ++;
      totalLike[0].innerHTML = resultLike + "<i class='fas fa-heart main__like-price-button__number__heart'></i>";
       likeCount[i].innerHTML ++; 
       heartFull[i].style.opacity= 1;
       heartFull[i].style.transform= "scale(1.1, 1.1)";
     } else {
      resultLike --;
      totalLike[0].innerHTML = resultLike + "<i class='fas fa-heart main__like-price-button__number__heart'></i>";
       likeCount[i].innerHTML --;
       heartFull[i].style.opacity= 0;
       
     }
   
    })

  })
  (i)
};
    
    
            

  // remplir le bouton rose prix
  let priceTag= document.getElementsByClassName("main__like-price-button__price");
  priceTag[0].innerHTML= test3.price+ "€/jour";
  
  

  
  
  
 
  
   })

    
 

   .catch(function(err) {
    
    
});
