class Media {

    constructor(data)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title= data.title;
        this.image= data.image;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.alt = data.alt_text;
        this.price = data.price;
        this.video = data.video;
        this.alreadyLike;
        this.index;
    }

    alreadyClick(i){
        let heartFull = document.getElementsByClassName("heart_full");
        if (this.alreadyLike) {
            heartFull[i].style.opacity= 1
          }else {
            heartFull[i].style.opacity= 0;
          }
    }
    likeClick(i){
        let heartFull = document.getElementsByClassName("heart_full");
        
        if (this.alreadyLike){
          this.likes --;
          this.alreadyLike= false;
          heartFull[i].style.opacity= 0; 
      
        }else {
          this.likes ++;
          this.alreadyLike= true;
          heartFull[i].style.opacity= 1; 
          heartFull[i].style.transform= "scale(1.1, 1.1)";
         }
           const likeCount = document.getElementsByClassName("main__photos__article__container__description__like");
         likeCount[i].innerHTML=this.likes;
         
      }
    
   

    


















}


