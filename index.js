


fetch('FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json();
      
    }
  })
  
  
  .then(function(value) {
     
    let numberOfPhotographers = value.photographers.length;
   
    
    
    
    
    

    for (var i=0; i < numberOfPhotographers; i++) { //crééer les div pour afficher les photographes disponibles sur le json
        const newElt = document.createElement("a");
        const photographContainer= document.createElement("div")
        const photographPhoto= document.createElement("img")
        const photographName = document.createElement("div");
        const city = document.createElement("div");
        const photo = document.createElement("div");
        const description = document.createElement("div");
        const prix = document.createElement("div");
        let tagDiv= document.createElement("div")
        let testDiv = document.getElementById("grid");
       
        testDiv.appendChild(newElt);
        newElt.classList.add("main__grid__photographe");
        newElt.appendChild(photographContainer);
        newElt.setAttribute("href", "photograph.html")
        photographContainer.className= "main__grid__photographe__container";
        photographContainer.appendChild(photographPhoto);
        photographPhoto.classList.add("main__grid__photographe__container__photo");
        newElt.appendChild(photographName);
        photographName.classList.add("main__grid__photographe__nom");
        newElt.appendChild(city);
        city.classList.add("main__grid__photographe__localisation");
        newElt.appendChild(description);
        description.classList.add("main__grid__photographe__description");
        newElt.appendChild(prix);
        prix.classList.add("main__grid__photographe__prix");
        console.log("test");
        photographPhoto.setAttribute("src", "/images/sample photos/Photographers ID Photos/"+value ['photographers'][i]['portrait']+" ")
        photographName.innerHTML = value['photographers'][i]['name'];
        city.innerHTML = value['photographers'][i]['city']+","+value['photographers'][i]['country'];
        description.innerHTML = value['photographers'][i]['tagline'];
        prix.innerHTML = value['photographers'][i]['price']+"€";
        newElt.appendChild(tagDiv);
        tagDiv.className= "tagsContainer"
        
        let numberOfTags = value.photographers[i].tags.length;
        for (var h=0; h < numberOfTags; h++) {
            console.log("tags"+h)
            const tags = document.createElement("div");
            
            tagDiv.appendChild(tags)
            tags.classList.add("main__grid__photographe__tags");
            tags.innerHTML= "#"+value['photographers'][i]['tags'][h]

        }
    
    
       


    //for (var i=0; i < numberOfTags, i++) {}
    }

   


    

   
  


















})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  .catch(function(err) {
    
  });

