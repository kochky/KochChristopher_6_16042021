class Photographer {

    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
        this.background = data.background;
        this.medias = [];
    }

    
    renderCard() //HTML pattern of the cards
    {  return `
            <a aria-label="card de ${this.name}" id="${this.id}" href="photograph.html?${this.id}" class="index__main__grid__photographe">
            <div class="index__main__grid__photographe__container"> 
                <img alt="photo de ${this.name}" src="/images/sample_photos/Photographers_ID_Photos/${this.portrait}" class="index__main__grid__photographe__container__photo">
            </div>
            <h1 class="index__main__grid__photographe__nom">${this.name}</h1>
            <h2 class="index__main__grid__photographe__localisation">${this.city},${this.country}</h2> 
            <h3 class="index__main__grid__photographe__description">${this.tagline}</h3>
            <h4 class="index__main__grid__photographe__prix">${this.price}€</h4>
            <div class="tagsContainer"></div>
        </a>
        `;

    }
    createCard() //Put the "renderCard" in the div "Grid"
    {
        var gridDiv = document.getElementById("grid");
    gridDiv.innerHTML += this.renderCard()
    }
    
    renderTag(tag){ //Tag HTML pattern
        return `<div class="index__main__grid__photographe__tags">#${tag}</div>`

    }
  
    createTag(tag,i){ // Div in the card for the tags
        document.getElementById(i).children[5].innerHTML += this.renderTag(tag);
        
    }
    
    selectMedia(data,media){
        let urlId = window.location.search.slice(1);
        this.medias= data.media.filter(x => x.photographerId == urlId)

    }
    
    renderProfile(){
        const photoName = document.getElementById("photographer_name");
        const photoLocation = document.getElementById("photographer_location");
        const photoDescription = document.getElementById("photographer_description");
        const photoPicture = document.getElementById("photographer_picture");
        const nameForm = document.getElementById("name_Modale")
        photoName.innerHTML =this.name;
        photoLocation.innerHTML= this.city+","+this.country;
        photoDescription.innerHTML= this.tagline;
        photoPicture.setAttribute("src", "/images/sample_photos/Photographers_ID_Photos/"+this.portrait)
        photoPicture.setAttribute("alt","photo de "+this.name)
        nameForm.innerHTML= "Contactez-moi" + "<br />" +this.name
        this.renderTags()
    }

    renderTags(){
        const tagContainer= document.getElementsByClassName("main__presentation__photograph__tagsContainer");
        for (let tag of this.tags){
            var tags = document.createElement("div");
            tagContainer[0].appendChild(tags);
            tags.classList.add("main__presentation__photograph__tags");
            tags.innerHTML= "#"+tag;


        }

    }















    }