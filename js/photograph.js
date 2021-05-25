 //cible les éléments pour y mettre les données   
 const photoName = document.getElementById("photographer_name");
 const photoLocation = document.getElementById("photographer_location");
 const photoDescription = document.getElementById("photographer_description");
 const tagContainer= document.getElementsByClassName("main__presentation__photograph__tagsContainer");
 const photoPicture = document.getElementById("photographer_picture");
 const nameForm = document.getElementById("name_Modale")
 var pictureDiv = document.getElementsByClassName("main__photos__article");
 let heartFull = document.getElementsByClassName("heart_full");
 let photoContainerImage= document.getElementsByClassName("main__photos__article__container__img")
  let bigPicture= document.getElementsByClassName("big-picture")
  let bigPictureClose= document.getElementsByClassName("big-picture__container__cross")
  let bigPictureImg= document.getElementsByClassName("big-picture__container__img")
  let header = document.getElementsByTagName("header");
  let main = document.getElementsByTagName("main")
  let bigPictureTitle= document.getElementsByClassName("big-picture__container__title")
  let photoContainer= document.getElementsByClassName("main__photos__article__container")
  let priceTag= document.getElementsByClassName("main__like-price-button__price");
  let leftArrow= document.getElementsByClassName("big-picture__container__left-arrow");
  let rightArrow= document.getElementsByClassName("big-picture__container__right-arrow");
  let totalLike= document.getElementsByClassName("main__like-price-button__number");
  const likeButton = document.getElementsByClassName("main__photos__article__container__description__heart");
  const likeCount = document.getElementsByClassName("main__photos__article__container__description__like");
  let dateButton= document.getElementsByClassName("main__photos__allbutton__button__date");
  let titleButton= document.getElementsByClassName("main__photos__allbutton__button__title");
  let popButton= document.getElementsByClassName("main__photos__allbutton__button__popular")
  let allButton = document.getElementsByClassName("main__photos__allbutton")
 // récupère l'id dans l'url
 let urlId = window.location.search.slice(1);

fetch('js/FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    } else {alert ("test")}
  })

.then(function(value) {

  //cible les média qqui ont l'id correspondant
    let test3= value.photographers.find(x => x.id == urlId);
  
  //cible les média par rapport au id du photographe
    let numberOfPicture= value.media.filter(x => x.photographerId == urlId);
  
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
  // remplir le bouton rose prix
      priceTag[0].innerHTML= test3.price+ "€/jour";

  //garde le prénom du photographe pour créer le lien vers leur dossier image
    var spaceLastname = test3.name.indexOf(" ");
    var lastname = test3.name.substr(0,spaceLastname);

   //tableau 
   var resultLike =0;
  
// structure des images 
   function mediaMaker(p){
    
      var newPicture= document.createElement("div");
      
      pictureDiv[0].appendChild(newPicture);
      newPicture.classList.add("main__photos__article__container")
      newPicture.appendChild(newMedia);
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

   /////boucle création de média +likes///////////////////////////////////////////////////////////////////////////////////

   function pageMedia () {
  for (var p=0; p < numberOfPicture.length; p++) {
          
      
          //créer les div des images
            if (numberOfPicture[p].image !=undefined) {
            newMedia = document.createElement("img");
            newMedia.classList.add("main__photos__article__container__img");
            newMedia.setAttribute("src", "/images/sample photos/"+lastname+"/"+numberOfPicture[p].image);
           
          }

        //créer les div des video
            else if (numberOfPicture[p].video !=undefined) {

          newMedia = document.createElement("video");
        newMedia.setAttribute("controls","");
        newMedia.classList.add("main__photos__article__container__img");
        newSource= document.createElement("source");
        newMedia.appendChild(newSource)
          newSource.setAttribute("src", "/images/sample photos/"+lastname+"/"+numberOfPicture[p].video);
          newSource.setAttribute("type", "video/mp4");
          
          
          
          
          }
          mediaMaker(p)
    
  } 
}
function allLikes() {
  resultLike=0;
for (var y=0; y<numberOfPicture.length; y++) {
  resultLike +=numberOfPicture[y].likes;
}
totalLike[0].innerHTML = resultLike + "<i class='fas fa-heart main__like-price-button__number__heart'></i>";
}
function alreadyClick(i) {
 
    if (numberOfPicture[i].alreadyLike) {
      heartFull[i].style.opacity= 1
    }else {
      heartFull[i].style.opacity= 0;
    }
  
}
function likeClick(i){
  likeButton[i].addEventListener("click", function(){
  if (numberOfPicture[i].alreadyLike){
    numberOfPicture[i].likes --;
    numberOfPicture[i].alreadyLike= false;
    heartFull[i].style.opacity= 0; 

  }else {
    numberOfPicture[i].likes ++;
    numberOfPicture[i].alreadyLike= true;
    heartFull[i].style.opacity= 1; 
    heartFull[i].style.transform= "scale(1.1, 1.1)";
   }
   likeCount[i].innerHTML=numberOfPicture[i].likes;
   allLikes()
  })
}
function imgListener(i){
  photoContainerImage[i].addEventListener("click",function(){
  
    bigPicture[0].style.display="flex";
    header[0].style.opacity="0.1";
    main[0].style.opacity="0.1";
    bigPictureImg[0].src= photoContainerImage[i].src
    bigPictureTitle[0].innerHTML= numberOfPicture[i].title
    return imageResult= i
    })
}


////function qui détruit les médias créés


function deleteMedia(){
  
  for (d=0; d< numberOfPicture.length; d++){
   photoContainer[0].remove()
  }
}

//////////////////////////////////////////////////////////////////////
///// Bouton filtre par titre!////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function filterBy(e) {
  resultLike=0;
  numberOfPicture.sort(e)
  deleteMedia()
  pageMedia();
  for (var i=0; i<numberOfPicture.length;i++) {
    (function (i){
    imgListener(i);
    likeClick(i);
    alreadyClick(i)
    })(i)
    }
}


      //function filtre les objet selon leur titre
      function compareTitle(a,b){
        if (a.title < b.title)
        return -1;
        if (a.title >b.title)
        return 0;
      }
      ///EventListener du bouton titre qui trie les objets et les recrééer
      titleButton[0].addEventListener("click",function(){
          filterBy(compareTitle);
          allButton[0].insertBefore(titleButton[0],allButton[0].children[0]);
          allButton[0].insertBefore(allButton[0].children[2],allButton[0].children[1]);
          radiusButton ()
      })
    


      //function filtre les objets selon leur DATE
      function compareDate(a,b){
        return new Date(b.date) - new Date(a.date)
      }
      ///EventListener du bouton date qui trie les objets et les recrééer
      dateButton[0].addEventListener("click",function(){
        filterBy(compareDate);
        allButton[0].insertBefore(dateButton[0],allButton[0].children[0]);
        allButton[0].insertBefore(allButton[0].children[2],allButton[0].children[1]);
        radiusButton ()

        })



      //// Trier selon le nombre de likes////
      function compareLikes(a,b){
        if (a.likes < b.likes)
        return 0
        if (a.likes >b.likes)
        return -1;
      } 
      ///EventListener du bouton populaire qui trie les objets et les recrééer
      popButton[0].addEventListener("click",function(){
        filterBy(compareLikes);
        allButton[0].insertBefore(popButton[0],allButton[0].children[0]);
        allButton[0].insertBefore(allButton[0].children[2],allButton[0].children[1]);
        radiusButton ()
        })

function radiusButton () {

  allButton[0].children[0].style.borderTopLeftRadius= "5px";
  allButton[0].children[0].style.borderTopRightRadius= "5px";
  allButton[0].children[2].style.borderBottomLeftRadius= "5px";
  allButton[0].children[2].style.borderBottomRightRadius= "5px";
  allButton[0].children[1].style.borderTopLeftRadius= "0px";
  allButton[0].children[1].style.borderTopRightRadius= "0px";
  allButton[0].children[1].style.borderBottomLeftRadius= "0px";
  allButton[0].children[1].style.borderBottomRightRadius= "0px";
  allButton[0].children[0].style.borderBottomLeftRadius= "0px";
  allButton[0].children[0].style.borderBottomRightRadius= "0px";
  allButton[0].children[2].style.borderTopLeftRadius= "0px";
  allButton[0].children[2].style.borderTopRightRadius= "0px";
}
///////////////////////////////////////////////////////////////////////////////
//Function qui se lance au lancement de la page////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
numberOfPicture.sort(compareLikes);
pageMedia();
allLikes();
radiusButton ();
for (var i=0; i < numberOfPicture.length; i++){
  (function (i){
    likeClick(i);
    imgListener(i);
    
  })
  (i)
};

//////////////////////////////////////////////////////////////////////
//////ZONE IMAGE AGRANDIE/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//ferme l'image
bigPictureClose[0].addEventListener("click",function(){

  bigPicture[0].style.display="none";
  header[0].style.opacity="1";
    main[0].style.opacity="1";
})
function srcTitle(){
  bigPictureImg[0].src= photoContainerImage[imageResult].src;
  bigPictureTitle[0].innerHTML= numberOfPicture[imageResult].title ;
}


function videoInMedia () {
  
  if (numberOfPicture[imageResult].image==undefined){// si l'image précédente est une video
    
    bigPictureImg[1].style.display="block";
    bigPictureImg[0].style.display="none";
    bigPictureImg[1].firstElementChild.src= photoContainerImage[imageResult].firstElementChild.src;
    bigPictureImg[1].load();

  }else {
    bigPictureImg[1].style.display="none";
    bigPictureImg[0].style.display="block";
  }
  
  
}
leftArrow[0].addEventListener("click",function(){

        if(imageResult<=0){
          imageResult += numberOfPicture.length -1;
        }else {
        imageResult --
        }
        videoInMedia()
        srcTitle()
  
})

rightArrow[0].addEventListener("click",function(){
  
      if (imageResult==numberOfPicture.length -1){
        imageResult =0;
        }else {
      imageResult ++
      }
      srcTitle()
      videoInMedia()
})





  })

