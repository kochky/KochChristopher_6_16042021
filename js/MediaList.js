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



    //DOM ELEMENTS
    allButton(e){
      return document.getElementsByClassName("main__photos__allbutton")[e]
    }
    
    arrowButton(e){
      return  document.getElementsByClassName("arrow")[e]
    }
    main(){
      return document.getElementsByTagName("main")[0]
    }
    body(){
        return document.getElementsByTagName("body")[0]
    }
    bigPicture(){
      return document.getElementsByClassName("big-picture")[0];
    }
    bigPictureClose(){
      return document.getElementsByClassName("big-picture__container__cross")[0]
    }
    header(){
      return document.getElementsByTagName("header")[0];
    }
    photoContainerImage(i){
      return document.getElementsByClassName("main__photos__article__container__img")[i]
    }
    bigPictureTitle(){
      return document.getElementsByClassName("big-picture__container__title")[0]
    }
    bigPictureImg(i){
      return document.getElementsByClassName("big-picture__container__img")[i]
    }

    init(media) //Start when photograph.html is open
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
           this.fakeCard()
            
          
        }
    factoryMedia(media){//Create MediaCard depends if video or picture
        for (let item of media) 
        {
        this.factory.init(item).render(item) 
        }

    }
    fakeCard(){
      var pictureDiv = document.getElementsByClassName("main__photos__article");
        pictureDiv[0].innerHTML+= "<div class=fakecard></div>"
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
        this.fakeCard()
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
        if (this.clicked!=true){
          MediaList.clicked= true;
            this.allButton(0).children[0].style.transform="scaleY(1)"
            this.arrowButton(0).style.transform="rotate(-180deg)"
            this.allButton(0).children[1].style.transitionDelay=" 0ms";
            this.allButton(0).children[2].style.transitionDelay="200ms";
            this.allButton(0).children[1].style.transform="scaleY(1)"
            this.allButton(0).children[2].style.transform="scaleY(1)"
        } 
    }


    animationClose(e){//Animation to close the buttons list
        if (e.which!= 27 && e.target== this.allButton(0).children[0]){}
        else{
            MediaList.clicked=false;
            this.allButton(0).children[1].style.transitionDelay=" 200ms";
            this.allButton(0).children[2].style.transitionDelay="0ms";
            this.allButton(0).children[1].style.transform='scaleY(0)';
            this.allButton(0).children[2].style.transform="scaleY(0)";
            this.arrowButton(0).style.transform="rotate(0deg)" 
        }
    }
        
    animationButton(){// Listener for the buttons list
        for (let u=0; u<this.allButton(0).children.length -1; u++){
          this.allButton(0).children[u].addEventListener("focus",(e)=>{this.animationOpen()})
          this.allButton(0).children[0].addEventListener("click",(e)=>{this.animationOpen()})
          document.addEventListener("keydown",(e)=>{this.animationClose(e)})
          document.addEventListener("click",(e)=>{this.animationClose(e)})
      
        }
    }
    compareLikes(a,b){
        if (a.likes <= b.likes)
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
       
        this.allButton(0).children[0].style.borderTopLeftRadius= "5px";
        this.allButton(0).children[0].style.borderTopRightRadius= "5px";
        this.allButton(0).children[2].style.borderBottomLeftRadius= "5px";
        this.allButton(0).children[2].style.borderBottomRightRadius= "5px";
        this.allButton(0).children[1].style.borderTopLeftRadius= "0px";
        this.allButton(0).children[1].style.borderTopRightRadius= "0px";
        this.allButton(0).children[1].style.borderBottomLeftRadius= "0px";
        this.allButton(0).children[1].style.borderBottomRightRadius= "0px";
        this.allButton(0).children[0].style.borderBottomLeftRadius= "0px";
        this.allButton(0).children[0].style.borderBottomRightRadius= "0px";
        this.allButton(0).children[2].style.borderTopLeftRadius= "0px";
        this.allButton(0).children[2].style.borderTopRightRadius= "0px";
        
      }
    allButtonFilterListener(){//Listener "sort by"
        this.titleButtonFilterListener();
        this.dateButtonFilterListener();
        this.popButtonFilterListener()
    }
    
    titleButtonFilterListener(){
      
        let titleButton= document.getElementsByClassName("main__photos__allbutton__button__title");
       
        titleButton[0].addEventListener("click",(e)=>{
            if (  titleButton[0] !==this.allButton(0).children[0]){
              this.filterBy(this.compareTitle);
              this.allButton(0).insertBefore(titleButton[0],this.allButton(0).children[0]);
              this.radiusButton()
             }
          })  
    }
    
    dateButtonFilterListener(){
      let dateButton= document.getElementsByClassName("main__photos__allbutton__button__date");
      dateButton[0].addEventListener("click",(e)=>{

          if ( dateButton[0] !== this.allButton(0).children[0]){
          
          this.filterBy(this.compareDate);
          this.allButton(0).insertBefore(dateButton[0],this.allButton(0).children[0]);
          this.radiusButton()
          }

          })

    }
    popButtonFilterListener(){
      let popButton= document.getElementsByClassName("main__photos__allbutton__button__popular")
      popButton[0].addEventListener("click",(e)=>{
          
          if ( popButton[0] !== this.allButton(0).children[0]){
          this.filterBy(this.compareLikes);
          this.allButton(0).insertBefore(popButton[0],this.allButton(0).children[0]);
          this.radiusButton()
          }
          })
    }
    
              
    openLightbox(i){//Open the lightbox and background has an opacity

        this.bigPicture().style.display="flex";
        this.header().style.opacity="0.1";
        this.main().style.opacity="0.1";
        this.bigPictureImg(0).alt=this.all[i].alt
        this.bigPictureImg(0).src= "./images/Sample_Photos/"+this.all[i].photographerId+"/"+this.all[i].src
        this.bigPictureTitle().innerHTML= this.all[i].title;
        this.bigPictureClose().focus();
        this.body().setAttribute("aria-hidden","true");
        this.bigPicture().setAttribute("aria-hidden","false");
        this.closeListener()
        this.lightboxController(i)
        this.imageResult= i;
      }

    closeListener(){//If click on the X or Escape pressed, the modal will close

    
    
      this.bigPictureClose().addEventListener("click",(e)=>{
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
      this.photoContainerImage(i).addEventListener("click",(e)=>{
      
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
      
      this.bigPicture().style.display="none";
      this.header().style.opacity="1";
      this.main().style.opacity="1";
      this.body().setAttribute("aria-hidden","false");
      this.bigPicture().setAttribute("aria-hidden","true");
    
    }
    srcTitle(){//Get the title of the media
      this.bigPictureImg(0).src= "./images/Sample_Photos/"+this.all[this.imageResult].photographerId+"/"+this.all[this.imageResult].src
      this.bigPictureTitle().innerHTML= this.all[this.imageResult].title
      this.bigPictureImg(0).alt=this.all[this.imageResult].alt
    }
    

    videoInMedia () {//the lightbox will adapt to the format of the media

      if (this.all[this.imageResult].image==undefined){
        
        this.bigPictureImg(1).style.display="block";
        this.bigPictureImg(0).style.display="none";
        this.bigPictureImg(1).firstElementChild.src= "./images/Sample_Photos/"+this.all[this.imageResult].photographerId+"/"+this.all[this.imageResult].src
        this.bigPictureImg(1).load();

      }else {
        this.bigPictureImg(1).style.display="none";
        this.bigPictureImg(0).style.display="block";
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