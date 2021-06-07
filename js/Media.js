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
    heartFull(i){
      return document.getElementsByClassName("heart_full")[i]
    }
    alreadyClick(i){
        
        if (this.alreadyLike) {
            this.heartFull(i).style.opacity= 1
          }else {
            this.heartFull(i).style.opacity= 0;
          }
    }
    likeClick(i){
      
        
        if (this.alreadyLike){
          this.likes --;
          this.alreadyLike= false;
          this.heartFull(i).style.opacity= 0; 
      
        }else {
          this.likes ++;
          this.alreadyLike= true;
          this.heartFull(i).style.opacity= 1; 
          this.heartFull(i).style.transform= "scale(1.1, 1.1)";
         }
           const likeCount = document.getElementsByClassName("main__photos__article__container__description__like");
         likeCount[i].innerHTML=this.likes;
         
      }
    
   

    


















}


