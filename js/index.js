fetchData().then((data) => 
{  
    let tagsButtonNavbar = document.getElementsByClassName("header__navbar__liste__tags")
    var newTagNavbar= new TagNavbar(); 
    for (let photographer of data.photographers){ // create the photographers and their card
        var newPhotographer =new Photographer(photographer)
        newPhotographer.createCard();
        
        for (let tag of newPhotographer.tags){  //create the tags in the card
            newPhotographer.createTag(tag,newPhotographer.id);
            newTagNavbar.AddTag(tag)
        }
    }

    for (let tag of newTagNavbar.tagsNoDouble){ // create the navbar with the tags of the photographers without double
        newTagNavbar.createTagNavbar(tag)
    }

    for (let tag in newTagNavbar.tagsNoDouble){  //the navbar filter the photographers cards
        
            tagsButtonNavbar[tag].addEventListener("click",function(){ 
            newTagNavbar.tagFilters(tag)
            newTagNavbar.tagVisibility();
            newTagNavbar.tagColor(tag);
            
        })
    }
})