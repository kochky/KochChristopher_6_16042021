fetch('/js/FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    } else {alert ("test")}
  })


  .then(function(value) {
var tagsButtonNavbar = document.getElementsByClassName("header__navbar__liste__tags")
let tagsContainer= document.getElementsByClassName("tagsContainer")
let tagsButtonNavbarArray=[];
console.log(tagsButtonNavbar.length)

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
        
     const tagsCorr = tagsContainer[u].textContent.includes(tagsButtonNavbarArray[p])
        if(tagsCorr) {
           tagPoints[u]++;
           
          
        }
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
                 
                  
                }         
               
              }

              }
        }
        
        

}

for (var o=0; o<tagsButtonNavbar.length; o++){
    console.log("test")
(function (o){
 
  tagsButtonNavbar[o].addEventListener("click",function(e){
    bla(o);
    for (var u=0; u<tagsContainer.length; u++){
      if ( tagPoints[u] != tagsButtonNavbarArray.length && tagPoints) {
        console.log("pas bon");
        tagsContainer[u].parentNode.style.display="none"
      }
    }
   
    
  



})
})
  (o)
}

  })

  .catch(function(err) {
    
    
});
