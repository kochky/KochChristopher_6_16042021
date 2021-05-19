fetch('/js/FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    } else {alert ("test")}
  })
  .then(function(value) {
      var numberOfPhotographers = value.photographers.length;
//créer les div pour afficher les photographes disponibles sur le json
var array= [];
    for (var i=0; i < numberOfPhotographers; i++) { 
        const newElt = document.createElement("a");
        const photographContainer= document.createElement("div")
        const photographPhoto= document.createElement("img")
        const photographName = document.createElement("div");
        const city = document.createElement("div");
        const photo = document.createElement("div");
        const description = document.createElement("div");
        const prix = document.createElement("div");
        var tagDiv= document.createElement("div")
        var testDiv = document.getElementById("grid");
        

        var tagsList = document.getElementsByClassName("header__navbar__liste");
        
       
       

      


        testDiv.appendChild(newElt);
        newElt.classList.add("index__main__grid__photographe");
        newElt.appendChild(photographContainer);
        newElt.id= value['photographers'][i]['id'];
        newElt.setAttribute("href","photograph.html?"+newElt.id);
        
        photographContainer.className= "index__main__grid__photographe__container";
        photographContainer.appendChild(photographPhoto);
        photographPhoto.classList.add("index__main__grid__photographe__container__photo");
        newElt.appendChild(photographName);
        photographName.classList.add("index__main__grid__photographe__nom");
        newElt.appendChild(city);
        city.classList.add("index__main__grid__photographe__localisation");
        newElt.appendChild(description);
        description.classList.add("index__main__grid__photographe__description");
        newElt.appendChild(prix);
        prix.classList.add("index__main__grid__photographe__prix");
        photographPhoto.setAttribute("src", "/images/sample photos/Photographers ID Photos/"+value ['photographers'][i]['portrait']+" ")
        photographName.innerHTML = value['photographers'][i]['name'];
        city.innerHTML = value['photographers'][i]['city']+","+value['photographers'][i]['country'];
        description.innerHTML = value['photographers'][i]['tagline'];
        prix.innerHTML = value['photographers'][i]['price']+"€";
        newElt.appendChild(tagDiv);
        tagDiv.className= "tagsContainer"
        var numberOfTags = value.photographers[i].tags.length;
        
        
        for (var h=0; h < numberOfTags; h++) {
         
            var tags = document.createElement("div");
            tagDiv.appendChild(tags)
            tags.classList.add("index__main__grid__photographe__tags");
            tags.innerHTML= "#"+value['photographers'][i]['tags'][h];
            var tagsArray =  array.push(value.photographers[i].tags[h])
            

           
        }     

    }
    var arrayNoDouble = Array.from(new Set(array)); //supprime les doublons de array
    
    let numberOfTagsNavbar = arrayNoDouble.length;
    for (var x=0; x < numberOfTagsNavbar; x++) {
      var newTagsNavbar = document.createElement("li");
           
            tagsList[0].appendChild(newTagsNavbar);
            newTagsNavbar.className="header__navbar__liste__tags";
            newTagsNavbar.innerHTML= "#"+arrayNoDouble[x];
    

           
    }

})
  .catch(function(err) {
    
    
  });

