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

    
















    }