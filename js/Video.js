
class Video extends Media {
     
    constructor(data)
    {
        super(data)
        this.src = data.video;   
    }

    render(data)
    {
        var pictureDiv = document.getElementsByClassName("main__photos__article");
        pictureDiv[0].innerHTML+= `
        <article class=main__photos__article__container aria-label='${this.title}'>
            <video  class=main__photos__article__container__img>
                <source src=./images/Sample_Photos/${this.photographerId}/${this.video} type=video/mp4>
            </video>
            <div class=main__photos__article__container__description>
                <h2 class=main__photos__article__container__description__name >${this.title}</h2>
                <div>
                    <h2 class=main__photos__article__container__description__like>${this.likes}</h2>
                    <button aria-label='Ouvrir la photo ${this.title} en grand' class=openLightbox></button>
                    <button aria-label='Aimer la video' class=main__photos__article__container__description__heart><i class='fas fa-heart heart_full'></i><i class='far fa-heart heart_empty'></i>
                    </button>
                </div>
            </div>
        </article>
    `
    }
}