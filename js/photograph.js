 //cible les éléments pour y mettre les données   
 const photoName = document.getElementById("photographer_name");
 const photoLocation = document.getElementById("photographer_location");
 const photoDescription = document.getElementById("photographer_description");
 const tagContainer= document.getElementsByClassName("main__presentation__photograph__tagsContainer");
 const photoPicture = document.getElementById("photographer_picture");
 const nameForm = document.getElementById("name_Modale")
 var pictureDiv = document.getElementsByClassName("main__photos__article");
 let heartFull = document.getElementsByClassName("heart_full");
 let photoContainerImage= document.getElementsByClassName("main__photos__article__container__img");
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
  let allButton = document.getElementsByClassName("main__photos__allbutton");
  let buttonLightbox= document.getElementsByClassName("openLightbox");
  let arrowButton= document.getElementsByClassName("arrow");
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
    photoPicture.setAttribute("src", "/images/sample_photos/Photographers_ID_Photos/"+test3.portrait)
    photoPicture.setAttribute("alt","photo de "+test3.name)
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
  

   /////boucle création de média +likes///////////////////////////////////////////////////////////////////////////////////

   function pageMedia () {
  for (var p=0; p < numberOfPicture.length; p++) {
   
      
          //créer les div des images
            if (numberOfPicture[p].image !=undefined) {
              pictureDiv[0].innerHTML+="<article class=main__photos__article__container aria-label='"+numberOfPicture[p].title+"'><img alt='"+numberOfPicture[p].alt+"' src=/images/sample_photos/"+lastname+"/"+numberOfPicture[p].image+" class=main__photos__article__container__img><div class=main__photos__article__container__description><h2 class=main__photos__article__container__description__name >"+numberOfPicture[p].title+"</h2><div><h2 class=main__photos__article__container__description__like>"+numberOfPicture[p].likes+"</h2><button aria-label='Ouvrir la photo "+numberOfPicture[p].title +" en grand' class=openLightbox></button><button aria-label='Aimer la photo' class=main__photos__article__container__description__heart><i class='fas fa-heart heart_full'></i><i class='far fa-heart heart_empty'></i></button></div></div></article>"

          }

        //créer les div des video
            else if (numberOfPicture[p].video !=undefined) {
              pictureDiv[0].innerHTML+="<article class=main__photos__article__container aria-label='"+numberOfPicture[p].title+"'><video  controls class=main__photos__article__container__img><source src=/images/sample_photos/"+lastname+"/"+numberOfPicture[p].video+ " type=video/mp4></video><div class=main__photos__article__container__description><h2 class=main__photos__article__container__description__name >"+numberOfPicture[p].title+"</h2><div><h2 class=main__photos__article__container__description__like>"+numberOfPicture[p].likes+"</h2><button aria-label='Ouvrir la photo "+numberOfPicture[p].title +" en grand' class=openLightbox></button><button aria-label='Aimer la video' class=main__photos__article__container__description__heart><i class='fas fa-heart heart_full'></i><i class='far fa-heart heart_empty'></i></button></div></div></article>"

          
          }
      
          
    
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



////function qui détruit les médias créés


function deleteMedia(){
  
  for (d=0; d< numberOfPicture.length; d++){
   photoContainer[0].remove()
  }
}

//////////////////////////////////////////////////////////////////////
///// Bouton filtre ////////////////////////////////////////
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

//////Animation bouton filtre
let clicked;
function animationButton(){
  
  for (var u=0; u< allButton[0].children.length -1; u++){
  allButton[0].children[u].addEventListener("focus",function(){
  
    if (clicked!=true){
      clicked= true;
      allButton[0].children[0].style.transform="scaleY(1)"
       arrowButton[0].style.transform="rotate(-180deg)"
       allButton[0].children[1].style.transitionDelay=" 0ms";
        allButton[0].children[2].style.transitionDelay="200ms";
       allButton[0].children[1].style.transform="scaleY(1)"
       allButton[0].children[2].style.transform="scaleY(1)"
      } 
  
  })
  document.addEventListener("keydown",function(e){
    
    if(e.which=== 27 ){
        clicked=false;
    
       allButton[0].children[1].style.transitionDelay=" 200ms";
       allButton[0].children[2].style.transitionDelay="0ms";
       allButton[0].children[1].style.transform='scaleY(0)';
       allButton[0].children[2].style.transform="scaleY(0)";
       arrowButton[0].style.transform="rotate(0deg)"
    }
  })
}

allButton[0].children[0].addEventListener("click",function(){
  
  if (clicked!=true){
  clicked= true;
  allButton[0].children[0].style.transform="scaleY(1)"
   arrowButton[0].style.transform="rotate(-180deg)"
   allButton[0].children[1].style.transitionDelay=" 0ms";
    allButton[0].children[2].style.transitionDelay="200ms";
   allButton[0].children[1].style.transform="scaleY(1)"
   allButton[0].children[2].style.transform="scaleY(1)"
  } 

})

body[0].addEventListener("click",function(e){

  if (e.target== allButton[0].children[0]){}
  else  {
    clicked=false;
    allButton[0].children[1].style.transitionDelay=" 200ms";
    allButton[0].children[2].style.transitionDelay="0ms";
    allButton[0].children[1].style.transform='scaleY(0)';
    allButton[0].children[2].style.transform="scaleY(0)";
    arrowButton[0].style.transform="rotate(0deg)"
  
  }
  
  
  
  })
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
        if ( titleButton[0] !== allButton[0].children[0])
          filterBy(compareTitle);
          allButton[0].insertBefore(titleButton[0],allButton[0].children[0]);
          radiusButton ();
          animationButton();
      })        
    


      //function filtre les objets selon leur DATE
      function compareDate(a,b){
        return new Date(b.date) - new Date(a.date)
      }
      ///EventListener du bouton date qui trie les objets et les recrééer
      dateButton[0].addEventListener("click",function(){
        console.log("ok")
        if ( dateButton[0] !== allButton[0].children[0])
        filterBy(compareDate);
        allButton[0].insertBefore(dateButton[0],allButton[0].children[0]);
        radiusButton ();
        animationButton();

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
        if ( popButton[0] !== allButton[0].children[0])
        filterBy(compareLikes);
        allButton[0].insertBefore(popButton[0],allButton[0].children[0]);
        radiusButton ()
        animationButton();
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



//////////////////////////////////////////////////////////////////////
//////ZONE IMAGE AGRANDIE/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Open lightbox
function openLightbox(i){
  
  bigPicture[0].style.display="flex";
  header[0].style.opacity="0.1";
  main[0].style.opacity="0.1";
  bigPictureImg[0].alt=numberOfPicture[i].alt
  bigPictureImg[0].src= photoContainerImage[i].src
  bigPictureTitle[0].innerHTML= numberOfPicture[i].title;
  bigPictureClose[0].focus();
  body[0].setAttribute("aria-hidden","true");
  bigPicture[0].setAttribute("aria-hidden","false");
  return imageResult= i
}

//click or key to open the lightbox
function imgListener(i){
  photoContainerImage[i].addEventListener("click",function(){
    openLightbox(i);
    videoInMedia()
    
    })
   buttonLightbox[i].addEventListener("click", function(){
     openLightbox(i)
     videoInMedia()
   })
  
//Escape to close the lightbox
document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {  
        closeLightbox()
      }
  };
}
//close lightbox
function closeLightbox(){
  bigPicture[0].style.display="none";
  header[0].style.opacity="1";
    main[0].style.opacity="1";
    body[0].setAttribute("aria-hidden","false");
  
  bigPicture[0].setAttribute("aria-hidden","true");

}

//eventListener for closing the lightbox
bigPictureClose[0].addEventListener("click",closeLightbox)

//Get the title of the media
function srcTitle(){
  bigPictureImg[0].src= photoContainerImage[imageResult].src;
  bigPictureTitle[0].innerHTML= numberOfPicture[imageResult].title ;
  bigPictureImg[0].alt=numberOfPicture[imageResult].alt
}

//the lightbox will adapt to the format of the media
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

//Pick the precedent media
leftArrow[0].parentNode.addEventListener("click",function(){

        if(imageResult<=0){
          imageResult += numberOfPicture.length -1;
        }else {
        imageResult --
        }
        videoInMedia()
        srcTitle()
  
})
document.addEventListener("keydown", function(evt){
  if (evt.which == 37) {
    if(imageResult<=0){
      imageResult += numberOfPicture.length -1;
    }else {
    imageResult --
    }
    videoInMedia()
    srcTitle()
  }
}
);

//pick the next media
rightArrow[0].parentNode.addEventListener("click",function(){
  
      if (imageResult==numberOfPicture.length -1){
        imageResult =0;
        }else {
      imageResult ++
      }
      srcTitle()
      videoInMedia()
})
document.addEventListener("keydown", function(evt){
  if (evt.which == 39) {
    if (imageResult==numberOfPicture.length -1){
      imageResult =0;
      }else {
    imageResult ++
    }
    srcTitle()
    videoInMedia()
}
}
);


///////////////////////////////////////////////////////////////////////////////
//Function qui se lance au lancement de la page////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
numberOfPicture.sort(compareLikes);
pageMedia();
allLikes();
radiusButton ();
animationButton();
for (var i=0; i < numberOfPicture.length; i++){
  (function (i){
    likeClick(i);
    imgListener(i);
    
  })
  (i)
};

  })

