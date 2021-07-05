fetchData().then((data) => 
{

    //Pick  the id in the url adress
    function pickId(){
    let urlId = window.location.search.slice(4);
    let idPage= data.photographers.find(x => x.id == urlId)
    return idPage  
    }

    var newPhotographer =new Photographer(pickId())//create the photographer according to the id in the url 
    newPhotographer.selectMedia(data,data.media)// Give the media to the photographer
    newPhotographer.renderProfile()//make the photographer information in the header

   
    let list= new MediaList(newPhotographer);//Create the class medialist which contains the mediafactory
    list.init(list.medias)//create the Image or Video with the MediaFactory and display them on the page

    for (let media in list.all){
      
        list.imgListener(media)//every media can open the lightbox
        list.all[media].alreadyClick(media)//check if the like are already clicked
      
    
        const likeButton = document.getElementsByClassName("main__photos__article__container__description__heart");
        likeButton[media].addEventListener("click", function(){//every like button can increase the number of likes
        list.all[media].likeClick(media);
        list.allLikes()
        })
    
          
    }
    
    
    
    

    


})