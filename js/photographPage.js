fetchData().then((data) => 
{

    //Pick  the id in the url adress
    function pickId(){
    let urlId = window.location.search.slice(1);
    let idPage= data.photographers.find(x => x.id == urlId)
    return idPage  
    }

    var newPhotographer =new Photographer(pickId())//create the photographer according to the id in the url 
    newPhotographer.selectMedia(data,data.media)// Give the media to the photographer


    newPhotographer.renderProfile()
   
})