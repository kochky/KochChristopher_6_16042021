fetch('/js/FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    } else {alert ("test")}
  })
  .then(function(value) {
      var numberOfPhotographers = value.photographers.length;
//créer les div pour afficher les photographes disponibles sur le json
var tagsArray= [];
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
            var tagsArrayPush =  tagsArray.push(value.photographers[i].tags[h])//créer le tableau sans doublon
            

           
        }     

    }
    var arrayNoDouble = Array.from(new Set(tagsArray)); //supprime les doublons de array
    
    let numberOfTagsNavbar = arrayNoDouble.length;

    for (var x=0; x < numberOfTagsNavbar; x++) {
      var newTagsNavbar = document.createElement("li");
           
            tagsList[0].appendChild(newTagsNavbar);
            newTagsNavbar.className="header__navbar__liste__tags";
            newTagsNavbar.innerHTML= "#"+arrayNoDouble[x];
    

           
    }
/////FILTRES DES TAGS
    //console.log(value.photographers)
  var tagsButtonNavbar = document.getElementsByClassName("header__navbar__liste__tags")
let tagsContainer= document.getElementsByClassName("tagsContainer")
let tagsButtonNavbarArray=[];


function bla(o) {
  
  var tagsIndex= tagsButtonNavbarArray.indexOf(tagsButtonNavbar[o].innerHTML);
  
 if (test[o]!=true) {
   tagPoints= [[0],[0],[0],[0],[0],[0]]
    test[o]=true;
    tagsButtonNavbar[o].style.background ="#901c1c";
    tagsButtonNavbar[o].style.color="white"
    var tagsPush= tagsButtonNavbarArray.push(tagsButtonNavbar[o].innerHTML)
    for (var p=0; p<tagsButtonNavbarArray.length; p++){   
      for (var u=0; u<tagsContainer.length; u++){
        //tagsContainer[u].parentNode.style.display="block"
     const tagsCorr = tagsContainer[u].textContent.includes(tagsButtonNavbarArray[p])
        if(tagsCorr) {
           tagPoints[u]++;
           
          
        }//else { tagsContainer[u].parentNode.style.display="none"}
}}}
      else { 
      test[o]=false;
      tagPoints= [[0],[0],[0],[0],[0],[0]]
      var tagsRemove= tagsButtonNavbarArray.splice(tagsIndex,1);
      tagsButtonNavbar[o].style.color ="#901c1c";
      tagsButtonNavbar[o].style.background="white";   
          for (var p=0; p<=tagsButtonNavbarArray.length; p++){
              for (var u=0; u<tagsContainer.length; u++){
                tagsContainer[u].parentNode.style.display="block";
                const tagsCorr = tagsContainer[u].textContent.includes(tagsButtonNavbarArray[p])
                if (tagsCorr){
                  
                  tagPoints[u] ++;
                  if ( tagPoints[u] != tagsButtonNavbarArray.length && tagPoints){
                    //tagsContainer[u].parentNode.style.display="none"
                  }
                }         
               
              }

              }
        }
        
        

}








for (var o=0; o<tagsButtonNavbar.length; o++){
(function (o){
 
  tagsButtonNavbar[o].addEventListener("click",function(e){
    bla(o);
    for (var u=0; u<tagsContainer.length; u++){
      if ( tagPoints[u] != tagsButtonNavbarArray.length && tagPoints) {
        console.log("pas bon");
        tagsContainer[u].parentNode.style.display="none"
      }
    }
    console.log(tagPoints);
    console.log(tagsButtonNavbarArray.length)
    
  



})
})
  (o)
}






})
  .catch(function(err) {
    
    
  });

