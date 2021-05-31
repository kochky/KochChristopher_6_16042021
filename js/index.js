fetchData().then((data) => 
{
   
    var tagIndexNavbar= new TagNavbar(data);
    var tagsArray=[];
    
    for (let photographer of data.photographers){ // create the photographers and their card
        var newPhotographer =new Photographer(photographer)
        newPhotographer.createCard();
        
        for (let tag of newPhotographer.tags){  //create the tags in the card
           newPhotographer.createTag(tag,newPhotographer.id);
           var tagsArrayPush =  tagsArray.push(tag)     //Put the tags in an array, to create the navbar
       }
    }

    var arrayNoDouble = Array.from(new Set(tagsArray))// No tags in double in the navbar
           
    for (let tag of arrayNoDouble){ // create the navbar with the tags of the photographers without double
        tagIndexNavbar.createTagNavbar(tag)
    }
    
})