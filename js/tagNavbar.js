class TagNavbar {

    constructor (){
        this.tags=[];
        this.tagsNoDouble=[];
        this.alreadyClicked=[];
        this.tagEnable=[];
    }
    AddTag(tag){
     
    this.tags.push(tag);//Put the tags in an array, to create the navbar
    this.tagsNoDouble=Array.from(new Set(this.tags))// No tags in double in the navbar


    }
    renderTagNavbar(tag) //HTML pattern of the tag navbar
    {
        return `<button aria-label="Filtrer les photographes par le tag #${tag}"class="header__navbar__liste__tags">#${(tag)}</button>`
       
    }

    createTagNavbar(tag)// Div which will receive the tag
    {
        var tagsList = document.getElementsByClassName("header__navbar__liste");
        tagsList[0].innerHTML += this.renderTagNavbar(tag)
    }


    tagsContainer (){
        var tagsContainer=document.getElementsByClassName("tagsContainer")

        return tagsContainer
    }
    
    tagPoint() { //GIVE POINT TO THE PHOTOGRAPHERS IF THEY HAVE THE TAG WhICH IS IN THE FILTERS
        var tagPoints= [[0],[0],[0],[0],[0],[0]]
        for (var p=0; p<this.alreadyClicked.length; p++){   
        for (var u=0; u<this.tagsContainer().length; u++){   
            let tagsCorr = this.tagsContainer()[u].textContent.includes(this.alreadyClicked[p])

            if(tagsCorr) {
               tagPoints[u]++;
            }
      }}
      return tagPoints
    }

    tagFilters(o) { //IT MAKES THE ARRAY WITH THE ACTIVE FILTERS AND GIVE POINT TO THE PHOTOGRAPHER IF THEY HAVE THE ACTIVE FILTER
        let tagsIndex= this.alreadyClicked.indexOf(this.tagsNoDouble[o]);
         if (this.tagEnable[o]!=true) {
         this.alreadyClicked.push(this.tagsNoDouble[o])
         this.tagPoint();
        }else { 
              let tagsRemove= this.alreadyClicked.splice(tagsIndex,1);
          this.tagPoint()
              
                }
        }

     tagVisibility(){////COMPARE THE POINTS WITH THE ACTIVE FILTERS
            for (var u=0; u<this.tagsContainer().length; u++){
            if ( this.tagPoint()[u] != this.alreadyClicked.length && this.tagPoint) {
                this.tagsContainer()[u].parentNode.style.display="none"
            }else {this.tagsContainer()[u].parentNode.style.display="block"}
            } 
        }
    
       
        tagColor(o) { /// CHANGE THE COLOR OF THE TAGS IN THE NAVBAR
        let tagsButtonNavbar = document.getElementsByClassName("header__navbar__liste__tags")
            if (this.tagEnable[o]!=true) {
                this.tagEnable[o]=true;
                tagsButtonNavbar[o].style.background ="#901c1c";
                tagsButtonNavbar[o].style.color="white"
            }else {
                this.tagEnable[o]=false;
                tagsButtonNavbar[o].style.color ="#901c1c";
                tagsButtonNavbar[o].style.background="white";
        }
        }


}