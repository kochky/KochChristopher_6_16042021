class TagNavbar {

    constructor (data){
        this.tag= data.tags
    }

    renderTagNavbar(tag) //HTML pattern of the tag navbar
    {
        return `<button aria-label="Filtrer les photographes par le tag #${tag}"class="header__navbar__liste__tags">#${(tag)}</button>`
        var tagsList = document.getElementsByClassName("header__navbar__liste");
        newTagsNavbar.innerHTML="#"+arrayNoDouble[x];   

    }

    createTagNavbar(tag)// Div which will receive the tag
    {
        var tagsList = document.getElementsByClassName("header__navbar__liste");
        tagsList[0].innerHTML += this.renderTagNavbar(tag)
    }


}