class MediaList 
{

    constructor(data) 
    {   this.all = []
        this.factory = new MediaFactory;
        this.medias= data.medias
        this.resultLike=0;
        this.clicked
        this.imageResult;
    }


    init(media) 
        {   
            for (let item of media) 
            {
            this.all.push(this.factory.init(item))
            
            }
            this.all.sort(this.compareLikes)
            this.animationButton()
            this.factoryMedia(this.all)
            this.allLikes()
            this.allButtonFilterListener()
            this.radiusButton()
            
          
        }
    factoryMedia(media){
        for (let item of media) 
        {
        this.factory.init(item).render(item) 
        }

    }
    allLikes(){//Add the likes of all the medias et display the result in the page bottom
        this.resultLike=0;
        let totalLike= document.getElementsByClassName("main__like-price-button__number");
        for (let like in this.all ) {
            this.resultLike +=this.all[like].likes;
        }
        totalLike[0].innerHTML = this.resultLike + "<i class='fas fa-heart main__like-price-button__number__heart'></i>";
    }

    deleteMedia(){//delete the cards 
        let photoArticle= document.getElementsByClassName("main__photos__article")
       photoArticle[0].innerHTML=""
        
    }

    filterBy(media){//Sort the medias and recreate them in the DOM
        this.resultLike=0;
        this.all.sort(media);
        this.deleteMedia();
        this.factoryMedia(this.all);
        this.animationButton();
        this.allLikes()
        for (let media in this.all ) { 
            this.all[media].alreadyClick(media)
            this.imgListener(media)
           const likeButton = document.getElementsByClassName("main__photos__article__container__description__heart");
           likeButton[media].addEventListener("click",(e)=>{
            this.all[media].likeClick(media);
            this.allLikes()
          })

        }
        
    }

    animationOpen(){//Animation to display all the buttons
        let allButton = document.getElementsByClassName("main__photos__allbutton");
        let arrowButton= document.getElementsByClassName("arrow");

        if (this.clicked!=true){
        MediaList.clicked= true;
            allButton[0].children[0].style.transform="scaleY(1)"
            arrowButton[0].style.transform="rotate(-180deg)"
            allButton[0].children[1].style.transitionDelay=" 0ms";
            allButton[0].children[2].style.transitionDelay="200ms";
            allButton[0].children[1].style.transform="scaleY(1)"
            allButton[0].children[2].style.transform="scaleY(1)"
        } 
    }


    animationClose(e){//Animation to close the buttons list
        let allButton = document.getElementsByClassName("main__photos__allbutton");
        let arrowButton= document.getElementsByClassName("arrow");
        if (e.which!= 27 && e.target== allButton[0].children[0]){}
        else{
            MediaList.clicked=false;
            allButton[0].children[1].style.transitionDelay=" 200ms";
            allButton[0].children[2].style.transitionDelay="0ms";
            allButton[0].children[1].style.transform='scaleY(0)';
            allButton[0].children[2].style.transform="scaleY(0)";
            arrowButton[0].style.transform="rotate(0deg)" 
        }
    }
        
    animationButton(){// Listener for the buttons list
        let allButton = document.getElementsByClassName("main__photos__allbutton");
        for (var u=0; u< allButton[0].children.length -1; u++){
        allButton[0].children[u].addEventListener("focus",this.animationOpen)
        allButton[0].children[0].addEventListener("click",this.animationOpen)
        document.addEventListener("keydown",this.animationClose)
        document.addEventListener("click",this.animationClose)
      
        }
    }
    compareLikes(a,b){
        if (a.likes < b.likes)
        return 0
        if (a.likes >b.likes)
        return -1;
      } 
    compareDate(a,b){
        return new Date(b.date) - new Date(a.date)
      }
    compareTitle(a,b){
        if (a.title < b.title)
        return -1;
        if (a.title >b.title)
        return 0; 
    }
    radiusButton () {//change the radius because the buttons change itself order when clicked
        let allButton = document.getElementsByClassName("main__photos__allbutton");
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
    allButtonFilterListener(){//Listener "sort by"
        this.titleButtonFilterListener();
        this.dateButtonFilterListener();
        this.popButtonFilterListener()
    }
    titleButtonFilterListener(){
        let allButton = document.getElementsByClassName("main__photos__allbutton");
        let titleButton= document.getElementsByClassName("main__photos__allbutton__button__title");
       
        titleButton[0].addEventListener("click",(e)=>{
            if (  titleButton[0] !== allButton[0].children[0]){
              this.filterBy(this.compareTitle);
              allButton[0].insertBefore(titleButton[0],allButton[0].children[0]);
              this.radiusButton()
             }
          })  
    }
    
   dateButtonFilterListener(){
    let dateButton= document.getElementsByClassName("main__photos__allbutton__button__date");
    let allButton = document.getElementsByClassName("main__photos__allbutton");
    dateButton[0].addEventListener("click",(e)=>{

        if ( dateButton[0] !== allButton[0].children[0]){
         
        this.filterBy(this.compareDate);
        allButton[0].insertBefore(dateButton[0],allButton[0].children[0]);
        this.radiusButton()
        }

        })

   }
   popButtonFilterListener(){
    let allButton = document.getElementsByClassName("main__photos__allbutton");
    let popButton= document.getElementsByClassName("main__photos__allbutton__button__popular")
    popButton[0].addEventListener("click",(e)=>{
        
        if ( popButton[0] !== allButton[0].children[0]){
        this.filterBy(this.compareLikes);
        allButton[0].insertBefore(popButton[0],allButton[0].children[0]);
        this.radiusButton()
        }
        })
   }
   
  


   openLightbox(i){//Open the lightbox and background has an opacity
  
    let bigPicture= document.getElementsByClassName("big-picture");
    let header = document.getElementsByTagName("header");
    let main = document.getElementsByTagName("main")
    let body = document.getElementsByTagName("body")
    let bigPictureTitle= document.getElementsByClassName("big-picture__container__title")
    let bigPictureImg= document.getElementsByClassName("big-picture__container__img")
    let bigPictureClose= document.getElementsByClassName("big-picture__container__cross")
   
      bigPicture[0].style.display="flex";
      
      header[0].style.opacity="0.1";
      main[0].style.opacity="0.1";
      bigPictureImg[0].alt=this.all[i].alt
      bigPictureImg[0].src= "images/sample_photos/"+this.all[i].photographerId+"/"+this.all[i].src
      bigPictureTitle[0].innerHTML= this.all[i].title;
      bigPictureClose[0].focus();
      body[0].setAttribute("aria-hidden","true");
      bigPicture[0].setAttribute("aria-hidden","false");
      this.closeListener()
      this.lightboxController(i)
      this.imageResult= i;
    }

  closeListener(){//If click on the X or Escape pressed, the modal will close

    let bigPictureClose= document.getElementsByClassName("big-picture__container__cross")
   
    bigPictureClose[0].addEventListener("click",(e)=>{
      this.closeLightbox()
    })
    document.onkeydown = (evt)=> {
      evt = evt || window.event;
      if (evt.keyCode == 27) {  
        this.closeLightbox()
      }
  };
  } 

  imgListener(i){//Card open the lightbox
    let photoContainerImage= document.getElementsByClassName("main__photos__article__container__img");
    photoContainerImage[i].addEventListener("click",(e)=>{
    
           this.openLightbox(i);
           this.videoInMedia()
          
         
          })
    let buttonLightbox= document.getElementsByClassName("openLightbox");
    buttonLightbox[i].addEventListener("click", (e)=>{
          this.openLightbox(i)
          this.videoInMedia()
         })
  }
        
  closeLightbox(){//close lightbox
    let bigPicture= document.getElementsByClassName("big-picture");
    let header = document.getElementsByTagName("header");
    let main = document.getElementsByTagName("main")
    let body = document.getElementsByTagName("body")
    bigPicture[0].style.display="none";
    header[0].style.opacity="1";
    main[0].style.opacity="1";
    body[0].setAttribute("aria-hidden","false");
    bigPicture[0].setAttribute("aria-hidden","true");
  
  }
  srcTitle(){//Get the title of the media
    let bigPictureTitle= document.getElementsByClassName("big-picture__container__title")
    let bigPictureImg= document.getElementsByClassName("big-picture__container__img")
    let photoContainerImage= document.getElementsByClassName("main__photos__article__container__img");

    bigPictureImg[0].src= "images/sample_photos/"+this.all[this.imageResult].photographerId+"/"+this.all[this.imageResult].src
    bigPictureTitle[0].innerHTML= this.all[this.imageResult].title
    bigPictureImg[0].alt=this.all[this.imageResult].alt
  }
  

  videoInMedia () {//the lightbox will adapt to the format of the media
    let bigPictureImg= document.getElementsByClassName("big-picture__container__img")

    if (this.all[this.imageResult].image==undefined){// si l'image précédente est une video
      
      bigPictureImg[1].style.display="block";
      bigPictureImg[0].style.display="none";
      bigPictureImg[1].firstElementChild.src= "images/sample_photos/"+this.all[this.imageResult].photographerId+"/"+this.all[this.imageResult].src
      bigPictureImg[1].load();

    }else {
      bigPictureImg[1].style.display="none";
      bigPictureImg[0].style.display="block";
    }
        
  }
  leftArrow(){
      
    if(this.imageResult<=0){
        this.imageResult += this.all.length -1;
      }else {
        this.imageResult --
      }
      this.videoInMedia()
      this.srcTitle()
  }
  rightArrow(){
    if (this.imageResult== this.all.length -1){
        this.imageResult =0;
        }else {
          this.imageResult ++
      }
      this.srcTitle()
      this.videoInMedia()
  }

  lightboxController() {//Control the change of media in the lightbox
    let leftArrow= document.getElementsByClassName("big-picture__container__left-arrow");
    let rightArrow= document.getElementsByClassName("big-picture__container__right-arrow");

      leftArrow[0].parentNode.addEventListener("click",(e)=>{//Pick the precedent media
        this.leftArrow()
          
        })
        document.addEventListener("keydown",(evt)=>{
          if (evt.which == 37) {
           this.leftArrow()
          }
        }
        );


        rightArrow[0].parentNode.addEventListener("click",(e)=>{
          this.rightArrow()
             
        })
        document.addEventListener("keydown",(evt)=>{
          if (evt.which == 39) {
           this.rightArrow()
        }
        }
        );
    }
}