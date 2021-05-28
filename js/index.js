
fetch('/js/FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    }
  })
  .then(function(value) {
      var gridDiv = document.getElementById("grid");
      var tagsList = document.getElementsByClassName("header__navbar__liste");
      let tagsContainer= document.getElementsByClassName("tagsContainer");
      let tagsButtonNavbar = document.getElementsByClassName("header__navbar__liste__tags")
//créer les div pour afficher les photographes disponibles sur le json
    var tagsArray= [];
    for (var i=0; i < value.photographers.length; i++) { 
       
        var numberOfTags = value.photographers[i].tags.length;
        gridDiv.innerHTML +=  "<a aria-label='card de "+value['photographers'][i]['name']+"' id="+value['photographers'][i]['id']+" href=photograph.html?"+value['photographers'][i]['id']+" class=index__main__grid__photographe><div class=index__main__grid__photographe__container> <img alt='photo de "+value['photographers'][i]['name']+"' src=/images/sample_photos/Photographers_ID_Photos/"+value['photographers'][i]['portrait']+" class=index__main__grid__photographe__container__photo></div><h1 class=index__main__grid__photographe__nom>"+value['photographers'][i]['name']+"</h1> <h2 class=index__main__grid__photographe__localisation>"+value['photographers'][i]['city']+","+value['photographers'][i]['country']+"</h2> <h3 class=index__main__grid__photographe__description>"+value['photographers'][i]['tagline']+"</h3> <h4 class=index__main__grid__photographe__prix>"+value['photographers'][i]['price']+"€</h4><div class=tagsContainer> </div></a>";
     
        for (var h=0; h < numberOfTags; h++) {
          
          tagsContainer[i].innerHTML += "<div class=index__main__grid__photographe__tags>#"+value['photographers'][i]['tags'][h]+"</div> " 
          var tagsArrayPush =  tagsArray.push(value.photographers[i].tags[h])//créer le tableau sans doublon  
        }     

    }
    var arrayNoDouble = Array.from(new Set(tagsArray)); //supprime les doublons de array

    for (var x=0; x <  arrayNoDouble.length; x++) {
      var newTagsNavbar = document.createElement("button");
           
            tagsList[0].appendChild(newTagsNavbar);
            newTagsNavbar.className="header__navbar__liste__tags";
            newTagsNavbar.innerHTML= "#"+arrayNoDouble[x];
            newTagsNavbar.setAttribute("aria-label","Filtrer les photographes par le tag "+newTagsNavbar.textContent)       
    }
/////FILTRES DES TAGS/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

let tagsButtonNavbarArray=[];
let tagEnable=[]

////GIVE POINT TO THE PHOTOGRAPHERS IF THEY HAVE THE TAG WhICH IS IN THE FILTERS
function tagPoint(){
  tagPoints= [[0],[0],[0],[0],[0],[0]]
  for (var p=0; p<tagsButtonNavbarArray.length; p++){   
    for (var u=0; u<tagsContainer.length; u++){
   let tagsCorr = tagsContainer[u].textContent.includes(tagsButtonNavbarArray[p])
      if(tagsCorr) {
         tagPoints[u]++;
      }
}}
}
////IT MAKES THE ARRAY WITH THE ACTIVE FILTERS AND GIVE POINT TO THE PHOTOGRAPHER IF THEY HAVE THE ACTIVE FILTER
function tagFilters(o) {
let tagsIndex= tagsButtonNavbarArray.indexOf(tagsButtonNavbar[o].innerHTML);

 if (tagEnable[o]!=true) {
  let tagsPush= tagsButtonNavbarArray.push(tagsButtonNavbar[o].innerHTML)
 tagPoint();
}else { 
      let tagsRemove= tagsButtonNavbarArray.splice(tagsIndex,1);
  tagPoint()
      
        }
}
////COMPARE THE POINTS WITH THE ACTIVE FILTERS
function tagVisibility(){
  for (var u=0; u<tagsContainer.length; u++){
    if ( tagPoints[u] != tagsButtonNavbarArray.length && tagPoints) {
      tagsContainer[u].parentNode.style.display="none"
    }else {tagsContainer[u].parentNode.style.display="block"}
  } 
}
//
/// CHANGE THE COLOR OF THE TAGS IN THE NAVBAR
function tagColor(o) {
  if (tagEnable[o]!=true) {
    tagEnable[o]=true;
    tagsButtonNavbar[o].style.background ="#901c1c";
    tagsButtonNavbar[o].style.color="white"
}else {
    tagEnable[o]=false;
    tagsButtonNavbar[o].style.color ="#901c1c";
    tagsButtonNavbar[o].style.background="white";
}
}


////EVENT LISTERNER FOR EACH TAGS IN THE NAVBAR
for (var o=0; o<tagsButtonNavbar.length; o++){   
(function (o){
  tagsButtonNavbar[o].addEventListener("click",function(e){
    tagFilters(o);
    tagVisibility();
    tagColor(o);
})})(o)}
//

})
  .catch(function(err) {
    
    
  });

