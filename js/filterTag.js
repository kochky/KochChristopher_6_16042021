fetchData().then((data) => 
{
    let tagsContainer= document.getElementsByClassName("tagsContainer");
    let tagsButtonNavbar = document.getElementsByClassName("header__navbar__liste__tags")
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
})